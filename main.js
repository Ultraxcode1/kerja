document.addEventListener("DOMContentLoaded", function () {
  // --- KUMPULAN FUNGSI HELPER ---
  const loadJSON = (key, fallback) => {
      try { return JSON.parse(localStorage.getItem(key)) || fallback; } 
      catch(e) { return fallback; }
  };
  const saveJSON = (key, value) => {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch(e) {}
  };

  // --- Logika Menu & Navigasi ---
  const userMenuButton = document.getElementById("user-menu-button");
  const userMenu = document.getElementById("user-menu");
  if (userMenuButton && userMenu) {
    userMenuButton.addEventListener("click", (e) => { e.stopPropagation(); userMenu.classList.toggle("hidden"); });
    window.addEventListener("click", () => { userMenu.classList.add("hidden"); });
  }

  const trackerMenuButton = document.getElementById("tracker-menu-button");
  const trackerSubmenu = document.getElementById("tracker-submenu");
  if (trackerMenuButton && trackerSubmenu) {
    trackerMenuButton.addEventListener("click", () => {
        trackerSubmenu.classList.toggle("hidden");
        document.getElementById("tracker-arrow-icon")?.classList.toggle("rotate-180");
    });
  }

  const navItems = document.querySelectorAll(".nav-item");
  const contentPages = document.querySelectorAll(".page-content");
  navItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      navItems.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
      contentPages.forEach((page) => page.classList.add("hidden"));
      const targetPage = document.getElementById(this.dataset.target);
      if (targetPage) {
        targetPage.classList.remove("hidden");
        const dataSource = this.getAttribute('data-source');
        if (dataSource && targetPage.innerHTML.trim().length === 0) {
          loadContent(dataSource, targetPage);
        }
      }
    });
  });

  const loadContent = (url, element) => {
    element.innerHTML = `<p class="text-gray-500 p-4">Memuat...</p>`;
    fetch(url).then(res => res.text()).then(html => {
        element.innerHTML = html;
        if (typeof window.initTaskTracker === 'function') window.initTaskTracker();
    }).catch(err => element.innerHTML = `<p class="text-red-500 p-4">Gagal memuat konten.</p>`);
  };

  // --- Logika Upload Foto Profil ---
  const profilePicture = document.getElementById('profile-picture');
  const profileUpload = document.getElementById('profile-upload');
  if (profilePicture && profileUpload) {
      const savedImage = localStorage.getItem('profilePicture');
      if (savedImage) profilePicture.src = savedImage;
      profilePicture.addEventListener('click', (e) => { e.stopPropagation(); e.preventDefault(); profileUpload.click(); });
      profileUpload.addEventListener('change', () => {
          const file = profileUpload.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (e) => {
              profilePicture.src = e.target.result;
              localStorage.setItem('profilePicture', e.target.result);
          };
          reader.readAsDataURL(file);
      });
  }

  // --- FUNGSI BARU: Logika untuk Dashboard Dinamis ---

  // 1. Update Kartu "Tugas Hari Ini"
  function updateDashboardMetrics() {
      const todayTasksCountEl = document.getElementById('today-tasks-count');
      if (!todayTasksCountEl) return;

      const tasks = loadJSON('custom_tasks', []); // Hanya ambil tugas buatan pengguna
      const today = new Date();
      const formattedToday = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

      const todayTasks = tasks.filter(task => task.date === formattedToday);
      todayTasksCountEl.textContent = `${todayTasks.length} Tugas`;
  }

  // 2. Logika untuk "Prioritas Utama"
  const prioritiesList = document.getElementById('priorities-list');
  const newPriorityInput = document.getElementById('new-priority-input');
  const addPriorityBtn = document.getElementById('add-priority-btn');

  let priorities = loadJSON('dashboard_priorities', []);

  function renderPriorities() {
      if (!prioritiesList) return;
      prioritiesList.innerHTML = '';
      if (priorities.length === 0) {
          prioritiesList.innerHTML = `<p class="text-sm text-gray-400 text-center py-4">Belum ada prioritas.</p>`;
          return;
      }
      priorities.forEach((text, index) => {
          const li = document.createElement('li');
          li.className = "flex items-center gap-3 text-sm text-gray-700 p-2 rounded-md hover:bg-gray-50 group";
          li.innerHTML = `
              <i class="fas fa-thumbtack text-gray-400 fa-xs"></i>
              <span class="flex-1">${text}</span>
              <button data-index="${index}" class="delete-priority-btn text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
          `;
          prioritiesList.appendChild(li);
      });
  }

  function addPriority() {
      const text = newPriorityInput.value.trim();
      if (text) {
          priorities.push(text);
          saveJSON('dashboard_priorities', priorities);
          newPriorityInput.value = '';
          renderPriorities();
      }
  }

  if (addPriorityBtn && newPriorityInput && prioritiesList) {
      addPriorityBtn.addEventListener('click', addPriority);
      newPriorityInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') addPriority();
      });

      prioritiesList.addEventListener('click', (e) => {
          if (e.target.classList.contains('delete-priority-btn')) {
              const index = parseInt(e.target.dataset.index);
              priorities.splice(index, 1);
              saveJSON('dashboard_priorities', priorities);
              renderPriorities();
          }
      });
  }
  
  // 3. Logika untuk Grafik Aktivitas (tetap sama, sudah dinamis)
  const weeklyChartCanvas = document.getElementById('weeklyActivityChart');
  if (weeklyChartCanvas) {
      const userTasks = loadJSON('custom_tasks', []);
      const today = new Date();
      const labels = [];
      const dataMap = {};
      for (let i = 6; i >= 0; i--) {
          const date = new Date(today);
          date.setDate(today.getDate() - i);
          const dayName = date.toLocaleDateString('id-ID', { weekday: 'long' });
          const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;
          labels.push(dayName);
          dataMap[formattedDate] = 0;
      }
      userTasks.forEach(task => {
          if (task.status === 'Done' && dataMap.hasOwnProperty(task.date)) dataMap[task.date]++;
      });
      
      new Chart(weeklyChartCanvas.getContext('2d'), {
          type: 'bar',
          data: {
              labels: labels,
              datasets: [{
                  label: 'Tugas Selesai', data: Object.values(dataMap), backgroundColor: 'rgba(74, 105, 226, 0.8)', borderWidth: 1, borderRadius: 8,
              }]
          },
          options: {
              responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }, plugins: { legend: { display: false } }
          }
      });
  }

  // Panggil semua fungsi update saat halaman dimuat
  updateDashboardMetrics();
  renderPriorities();
});