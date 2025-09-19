function initTaskTracker() {
    // Cek apakah inisialisasi sudah pernah dijalankan
    if (document.getElementById('task-container')?.dataset.initialized) {
        return;
    }

    const seedTasks = [ { "week": 1, "date": "16/06/2025", "task": "Modeling Brake Pad", "status": "Done" }, { "week": 1, "date": "16/06/2025", "task": "Animasi Render", "status": "Done" }, { "week": 1, "date": "17/06/2025", "task": "Modeling Azure", "status": "Done" }, { "week": 1, "date": "18/06/2025", "task": "Modeling Side Step", "status": "50%" }, { "week": 1, "date": "18/06/2025", "task": "Animasi Azure", "status": "Done" }, { "week": 1, "date": "19/06/2025", "task": "Modeling Side Step", "status": "Done" }, { "week": 1, "date": "19/06/2025", "task": "Modeling Mirror DVR", "status": "75%" }, { "week": 1, "date": "20/06/2025", "task": "Modeling Mirror DVR", "status": "Done" }, { "week": 1, "date": "20/06/2025", "task": "Animasi Mirror DVR", "status": "Done" }, { "week": 2, "date": "23/06/2025", "task": "Compositing Mirror DVR", "status": "Done" }, { "week": 2, "date": "23/06/2025", "task": "Modeling Console Box", "status": "Done" }, { "week": 2, "date": "24/06/2025", "task": "Compositing Azure Marketplace", "status": "Done" }, { "week": 2, "date": "25/06/2025", "task": "Modeling Car Fridge", "status": "50%" }, { "week": 2, "date": "26/06/2025", "task": "Modeling Car Fridge", "status": "Done" }, { "week": 2, "date": "26/06/2025", "task": "Animasi Car Fridge", "status": "20%" }, { "week": 3, "date": "30/06/2025", "task": "Modeling Cup Holder", "status": "Done" }, { "week": 3, "date": "30/06/2025", "task": "Animasi Car fridge", "status": "40%" }, { "week": 3, "date": "01/07/2025", "task": "Animasi Car Fridge", "status": "60%" }, { "week": 3, "date": "02/07/2025", "task": "Animasi Car Fridge", "status": "80%" }, { "week": 3, "date": "03/07/2025", "task": "Animasi Car Fridge", "status": "Render" }, { "week": 3, "date": "03/07/2025", "task": "Modeling BS_Mirror", "status": "Done" }, { "week": 3, "date": "04/07/2025", "task": "Modeling Backseat Storage", "status": "Done" }, { "week": 3, "date": "04/07/2025", "task": "Rev_Animasi_Mirror DVR", "status": "Done" }, { "week": 4, "date": "07/07/2025", "task": "Modeling Car Suction", "status": "Done" }, { "week": 4, "date": "07/07/2025", "task": "Rev_Backseat Storage", "status": "Done" }, { "week": 4, "date": "08/07/2025", "task": "Absen", "status": "" }, { "week": 4, "date": "09/07/2025", "task": "Rev_Rendering Car Fridge", "status": "Done" }, { "week": 4, "date": "09/07/2025", "task": "Rev_Azure Comp", "status": "Done" }, { "week": 4, "date": "10/07/2025", "task": "Modeling Horn", "status": "Done" }, { "week": 4, "date": "10/07/2025", "task": "Rev_Azure Rendering", "status": "60%" }, { "week": 4, "date": "11/07/2025", "task": "Kompilasi Azure", "status": "Done" }, { "week": 5, "date": "14/07/2025", "task": "Modeling Horn XT3 dan XT5", "status": "Done" }, { "week": 5, "date": "14/07/2025", "task": "Display Horn", "status": "Done" }, { "week": 5, "date": "14/07/2025", "task": "Side Step Jimny", "status": "Render" }, { "week": 5, "date": "14/07/2025", "task": "Rev_Car Fridge", "status": "Render" }, { "week": 5, "date": "15/07/2025", "task": "Animasi Side Step Jimny", "status": "75%" }, { "week": 5, "date": "15/07/2025", "task": "Rev_Display Horn", "status": "Done" }, { "week": 5, "date": "16/07/2025", "task": "Animasi Side Step Jimny", "status": "Done" }, { "week": 5, "date": "16/07/2025", "task": "Render Side Step Jimny", "status": "25%" }, { "week": 5, "date": "17/07/2025", "task": "Finishing", "status": "" }, { "week": 5, "date": "18/08/2025", "task": "Modeling Dashcam", "status": "Done" }, { "week": 6, "date": "21/07/2025", "task": "Car Mirror", "status": "Done" }, { "week": 6, "date": "22/07/2025", "task": "Modeling Car Head Unit AI 2", "status": "Done" }, { "week": 6, "date": "23/07/2025", "task": "Animasi Car Fridge", "status": "Done" }, { "week": 6, "date": "24/07/2025", "task": "Render Car Fridge", "status": "Done" }, { "week": 6, "date": "25/07/2025", "task": "Car Fridge finishing", "status": "Done" }, { "week": 7, "date": "28/07/2025", "task": "Car Head Unit AI 2_Texturing", "status": "Done" }, { "week": 7, "date": "28/07/2025", "task": "Modeling Car Message chair", "status": "50%" }, { "week": 7, "date": "29/07/2025", "task": "Animasi Bumper Logo", "status": "Done" }, { "week": 7, "date": "30/07/2025", "task": "Modeling Net SHield", "status": "Done" }, { "week": 7, "date": "30/07/2025", "task": "Animasi UI Head Unit", "status": "40%" }, { "week": 7, "date": "31/07/2025", "task": "Modeling All part BYD Atto 1", "status": "Done" }, { "week": 7, "date": "31/07/2025", "task": "Modeling Head rest", "status": "70%" }, { "week": 7, "date": "01/08/2025", "task": "Modeling Head rest", "status": "Done" }, { "week": 8, "date": "04/08/2025", "task": "Modeling Ball Join", "status": "Done" }, { "week": 8, "date": "04/08/2025", "task": "Modeling Tierod", "status": "Done" }, { "week": 8, "date": "04/08/2025", "task": "Modeling Rackend", "status": "Done" }, { "week": 8, "date": "05/08/2025", "task": "Render Ball Join,Tierod", "status": "Done" }, { "week": 8, "date": "05/08/2025", "task": "Modeling Stabilizer Link", "status": "Done" }, { "week": 8, "date": "06/08/2025", "task": "Render car suction phone holder", "status": "Done" }, { "week": 8, "date": "07/08/2025", "task": "Modeling Cup Holder Zenix", "status": "Done" }, { "week": 8, "date": "08/08/2025", "task": "Modeling Silicone dashboard console", "status": "Done" }, { "week": 9, "date": "11/08/2025", "task": "Modeling Silicone Console Box Multitray", "status": "Done" }, { "week": 9, "date": "11/08/2025", "task": "Rev_Rackend", "status": "DOne" }, { "week": 9, "date": "11/08/2025", "task": "Rev_Stabilizer Link", "status": "Done" }, { "week": 12, "date": "04/09/2025", "task": "Modelling Rear Cup Holder", "status": "Done" }, { "week": 12, "date": "04/09/2025", "task": "Modelling Door Armrest Grip", "status": "Done" }, { "week": 12, "date": "04/09/2025", "task": "Render Rear Cup Holder", "status": "Done" }, { "week": 12, "date": "04/09/2025", "task": "Render Door Armrest Grip", "status": "Done" }, { "week": 12, "date": "04/09/2025", "task": "Modelling Triple Hook Hanger Headrest", "status": "75%" }, { "week": 13, "date": "08/09/2025", "task": "Modelling Trash Bin", "status": "Done" }, { "week": 13, "date": "08/09/2025", "task": "Modelling Triple Hook Hanger Headrest", "status": "Done" }, { "week": 13, "date": "08/09/2025", "task": "Render Triple Hook Hanger Headrest", "status": "Done" }, { "week": 13, "date": "08/09/202.5", "task": "Render Trash Bin", "status": "Done" }, { "week": 13, "date": "08/09/2025", "task": "Modelling Seat gap filler", "status": "Done" }, { "week": 13, "date": "08/09/2025", "task": "Render Seat Gap Fille", "status": "Done" }, { "week": 13, "date": "09/09/2025", "task": "Modelling Headrest Storage", "status": "Done" }, { "week": 13, "date": "09/09/2025", "task": "Render Headrest Storage", "status": "Done" }, { "week": 13, "date": "10/09/2025", "task": "Modelling Cabin Light", "status": "DOne" }, { "week": 13, "date": "10/09/2025", "task": "Rendering Cabin Light", "status": "Done" }, { "week": 13, "date": "11/09/2025", "task": "Modelling Steer skin", "status": "Done" }, { "week": 13, "date": "11/09/2025", "task": "Rendering Steer Skin", "status": "Done" }];
    const userTasks = loadJSON('custom_tasks', []);
    const importantMap = loadJSON('important_tasks', {});
    const seedOverrides = loadJSON('seed_overrides', {});
    const seedDeleted = new Set(loadJSON('seed_deleted', []));
    
    function generateStableId(task){ return `${task.week}|${task.date}|${task.task}`; }
    function generateTaskId(task){ return generateStableId(task); }

    function buildAllTasks(){
        userTasks.forEach(t => { if(!t.week) t.week = computeWeekNumber(t.date); });
        const mergedSeed = seedTasks.map(t => {
            const id = generateStableId(t);
            if(seedDeleted.has(id)) return null;
            if(seedOverrides[id]) return { ...t, ...seedOverrides[id] };
            return t;
        }).filter(Boolean);
        return [...mergedSeed, ...userTasks];
    }
    let tasks = buildAllTasks();

    const state = { editingTaskId: null, view: 'grid', attachments: loadJSON('task_attachments', {}), year: 'all', month: 'all', day: 'all', onlyImportant: false, calendarVisible: false, calendarYear: new Date().getFullYear(), calendarMonth: new Date().getMonth(), calendarSelected: null };

    function saveJSON(key, value){ try { localStorage.setItem(key, JSON.stringify(value)); } catch(e) {} }
    function loadJSON(key, fallback){ try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch(e){ return fallback; } }

    function parseDateStr(str){ if(!str || !/^\d{2}\/\d{2}\/\d{4}$/.test(str)) return null; const [d,m,y] = str.split('/').map(Number); return new Date(y, m-1, d); }
    function computeWeekNumber(dateStr){
        const dt = parseDateStr(dateStr); if(!dt) return 0;
        const oneJan = new Date(dt.getFullYear(),0,1); const diff = (dt - oneJan + ((oneJan.getTimezoneOffset()-dt.getTimezoneOffset())*60000));
        const day = Math.floor(diff / 86400000) + 1; return Math.ceil(day / 7);
    }

    let statuses = [], years = [], monthsByYear = {}, daysByYearMonth = {};
    function rebuildDerived(){
        statuses = [...new Set(tasks.map(t => (t.status||'').trim()))].filter(Boolean);
        years = [...new Set(tasks.map(t => { const d=parseDateStr(t.date); return d? d.getFullYear(): null; }).filter(Boolean))].sort();
        monthsByYear = {}; daysByYearMonth = {};
        tasks.forEach(t => {
            const d = parseDateStr(t.date); if(!d) return;
            const y = d.getFullYear(); const m = d.getMonth()+1; const day = d.getDate();
            monthsByYear[y] = monthsByYear[y] || new Set(); monthsByYear[y].add(m);
            const key = `${y}-${String(m).padStart(2,'0')}`;
            daysByYearMonth[key] = daysByYearMonth[key] || new Set(); daysByYearMonth[key].add(day);
        });
        Object.keys(monthsByYear).forEach(y => monthsByYear[y] = [...monthsByYear[y]].sort((a,b)=>a-b));
        Object.keys(daysByYearMonth).forEach(k => daysByYearMonth[k] = [...daysByYearMonth[k]].sort((a,b)=>a-b));
    }

    const els = {
        taskList: document.getElementById('task-list'), empty: document.getElementById('empty-state'), search: document.getElementById('search'), statusFilters: document.getElementById('status-filters'), clearFilters: document.getElementById('clear-filters'), progress: document.getElementById('overall-progress'), toggleView: document.getElementById('toggle-view'), yearFilter: document.getElementById('year-filter'), monthFilter: document.getElementById('month-filter'), dayFilter: document.getElementById('day-filter'), addTaskBtn: document.getElementById('add-task'), modalOverlay: document.getElementById('modal-overlay'), modalClose: document.getElementById('modal-close'), taskForm: document.getElementById('task-form'), taskDate: document.getElementById('task-date'), taskName: document.getElementById('task-name'), taskStatus: document.getElementById('task-status'), taskImportant: document.getElementById('task-important'), taskWeek: document.getElementById('task-week'), taskDir: document.getElementById('task-dir'), importantFilter: document.getElementById('important-filter'), calendarToggle: document.getElementById('calendar-toggle'), calendarView: document.getElementById('calendar-view'), taskViewWrapper: document.getElementById('task-view-wrapper'), calPrev: document.getElementById('cal-prev'), calNext: document.getElementById('cal-next'), calToday: document.getElementById('cal-today'), calTitle: document.getElementById('cal-title'), calGrid: document.getElementById('cal-grid'), calDayTitle: document.getElementById('cal-day-title'), calDayTasks: document.getElementById('cal-day-tasks'), addTaskDay: document.getElementById('add-task-day'),
    };

    if (!els.taskList) { console.error("Task Tracker init failed: elements not found."); return; }
    
    document.getElementById('task-container').dataset.initialized = 'true';

    function renderStatusFilters(){
        if (!els.statusFilters) return;
        els.statusFilters.innerHTML = '';
        statuses.forEach(st => {
            const btn = document.createElement('button');
            const active = state.statusFilter && state.statusFilter.has(st);
            btn.className = `px-2 py-1 rounded-md border text-gray-600 text-[11px] tracking-wide ${active ? 'bg-blue-500 text-white border-blue-500' : 'border-gray-300 hover:bg-gray-200'}`;
            btn.textContent = st;
            btn.addEventListener('click', () => {
                state.statusFilter = state.statusFilter || new Set();
                if(state.statusFilter.has(st)) state.statusFilter.delete(st); else state.statusFilter.add(st);
                renderStatusFilters(); renderTasks();
            });
            els.statusFilters.appendChild(btn);
        });
    }

    function renderDateFilters(){
        if (!els.yearFilter) return;
        els.yearFilter.innerHTML = '<option value="all">All</option>' + years.map(y=>`<option value="${y}">${y}</option>`).join('');
        els.yearFilter.value = state.year;
        renderMonthOptions(); renderDayOptions();
    }

    function renderMonthOptions(){
        if (!els.monthFilter) return;
        els.monthFilter.innerHTML = '<option value="all">All</option>';
        if(state.year==='all'){ els.monthFilter.disabled=true; return; }
        els.monthFilter.disabled=false;
        const months = monthsByYear[state.year] || [];
        months.forEach(m => {
            const label = new Date(state.year, m-1, 1).toLocaleString('default',{month:'short'});
            els.monthFilter.insertAdjacentHTML('beforeend', `<option value="${String(m).padStart(2,'0')}">${label}</option>`);
        });
        els.monthFilter.value = state.month;
    }

    function renderDayOptions(){
        if (!els.dayFilter) return;
        els.dayFilter.innerHTML = '<option value="all">All</option>';
        if(state.year==='all' || state.month==='all'){ els.dayFilter.disabled=true; return; }
        els.dayFilter.disabled=false;
        const key = `${state.year}-${state.month}`;
        const days = daysByYearMonth[key] || [];
        days.forEach(d => els.dayFilter.insertAdjacentHTML('beforeend', `<option value="${String(d).padStart(2,'0')}">${d}</option>`));
        els.dayFilter.value = state.day;
    }
    
    function filteredTasks(){
        return tasks.filter(t => {
            const dt = parseDateStr(t.date);
            if(state.year !== 'all' && (!dt || dt.getFullYear() !== parseInt(state.year))) return false;
            if(state.month !== 'all' && (!dt || String(dt.getMonth()+1).padStart(2,'0') !== state.month)) return false;
            if(state.day !== 'all' && (!dt || String(dt.getDate()).padStart(2,'0') !== state.day)) return false;
            if(state.search && !t.task.toLowerCase().includes(state.search.toLowerCase())) return false;
            if(state.statusFilter && state.statusFilter.size > 0 && !state.statusFilter.has(t.status)) return false;
            if(state.onlyImportant && !importantMap[generateTaskId(t)]) return false;
            return true;
        });
    }

    function renderTasks(){
        const list = filteredTasks();
        els.taskList.innerHTML = '';
        els.empty.classList.toggle('hidden', list.length > 0);
        if (els.progress) {
             els.progress.innerHTML = overallProgressHTML();
             els.progress.classList.toggle('hidden', tasks.length === 0);
        }
        list.forEach(task => {
            const taskId = generateTaskId(task);
            const wrapper = document.createElement('div');
            wrapper.dataset.taskId = taskId;
            const statusBadge = statusBadgeHTML(task.status);
            const progressBar = progressFromStatus(task.status);
            const isImportant = !!importantMap[taskId];
            wrapper.className = `group relative rounded-xl border border-gray-200 bg-white/80 shadow-sm hover:shadow-md transition overflow-hidden`;
            wrapper.innerHTML = `
                <div class="p-4 flex-1 flex flex-col">
                    <div class="flex items-start justify-between gap-3">
                        <div class="flex-1">
                            <div class="flex items-center justify-between gap-2">
                                <div class="text-xs font-medium text-blue-600">Week ${task.week}</div>
                                <div class="flex items-center gap-1">
                                    <button data-action="edit-task" title="Edit" class="p-1.5 rounded border border-gray-300 hover:bg-blue-50 text-blue-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 3.487a2.25 2.25 0 0 1 3.182 3.182L8.4 18.313a4.5 4.5 0 0 1-1.897 1.13l-2.651.758a.75.75 0 0 1-.927-.927l.758-2.651a4.5 4.5 0 0 1 1.13-1.897L16.862 3.487ZM19.5 21h-15" /></svg></button>
                                    <button data-action="delete-task" title="Delete" class="p-1.5 rounded border border-gray-300 hover:bg-red-50 text-red-500 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 7h12M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7m3 4v6m4-6v6" /></svg></button>
                                    <button data-action="toggle-important" class="text-lg ${isImportant ? 'text-yellow-500' : 'text-gray-300'} hover:text-yellow-500 transition-colors">${isImportant ? '⭐' : '☆'}</button>
                                </div>
                            </div>
                            <h2 class="font-semibold text-sm md:text-base leading-tight mt-1">${escapeHTML(task.task)}</h2>
                            <div class="text-[11px] mt-0.5 text-gray-500">${task.date}</div>
                        </div>
                        ${statusBadge}
                    </div>
                    <div class="mt-3 h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                        <div class="h-full ${progressBar.color} transition-all duration-500" style="width:${progressBar.percent}%"></div>
                    </div>
                </div>`;
            
            wrapper.addEventListener('click', e => {
                const btn = e.target.closest('[data-action]');
                if (!btn) return;
                const action = btn.dataset.action;
                if (action === 'edit-task') startEditTask(task);
                if (action === 'delete-task') deleteTask(task);
                if (action === 'toggle-important') toggleImportant(task);
            });
            
            els.taskList.appendChild(wrapper);
        });
    }
    
    function escapeHTML(str){ return String(str).replace(/[&<>"]+/g, s=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[s])); }
    function statusBadgeHTML(status){
        const cls = status==='Done' ? 'bg-green-100 text-green-700' : status.includes('%') ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700';
        return `<span class="shrink-0 px-2 py-1 rounded-md text-[11px] font-semibold ${cls}">${escapeHTML(status||'-')}</span>`;
    }
    function progressFromStatus(status){
        if(status==='Done') return { percent:100, color:'bg-green-500' };
        if(/(\d+)%/.test(status)){ const p = parseInt(status); return { percent:p, color:'bg-amber-400' }; }
        return { percent: status==='Render'?90: (status?50:0), color:'bg-blue-400' };
    }
    function overallProgressHTML(){
        const numeric = tasks.map(t => progressFromStatus(t.status).percent);
        const avg = numeric.length? Math.round(numeric.reduce((a,b)=>a+b,0)/numeric.length):0;
        return `<div class="flex items-center gap-2">
            <span class="text-gray-500 text-xs">Progress:</span>
            <div class="w-40 h-2 bg-gray-200 rounded-full overflow-hidden"><div class="h-full bg-blue-500" style="width:${avg}%"></div></div>
            <span class="text-xs font-semibold">${avg}%</span>
        </div>`;
    }

    // --- FUNGSI KALENDER DIPERBAIKI ---
    function toDateStr(d){ return String(d.getDate()).padStart(2,'0')+'/'+String(d.getMonth()+1).padStart(2,'0')+'/'+d.getFullYear(); }
    function sameDay(a,b){ return a && b && a.getFullYear()===b.getFullYear() && a.getMonth()===b.getMonth() && a.getDate()===b.getDate(); }

    function buildCalendar(){
        if(!els.calGrid) return;
        els.calGrid.innerHTML='';
        const year = state.calendarYear; const month = state.calendarMonth;
        const first = new Date(year, month, 1); const startDay = (first.getDay() + 6) % 7;
        const daysInMonth = new Date(year, month+1, 0).getDate();
        const totalCells = Math.ceil((startDay + daysInMonth)/7)*7;
        const today = new Date();
        els.calTitle.textContent = first.toLocaleString('default',{month:'long', year:'numeric'});

        for(let cell=0; cell<totalCells; cell++){
            const dayNum = cell - startDay + 1;
            let dateObj, inMonth = true;
            if(dayNum < 1){
                const prevDate = new Date(year, month, 0);
                dateObj = new Date(year, month-1, prevDate.getDate() + dayNum);
                inMonth = false;
            } else if(dayNum > daysInMonth){
                dateObj = new Date(year, month+1, dayNum - daysInMonth);
                inMonth = false;
            } else {
                dateObj = new Date(year, month, dayNum);
            }

            const iso = toDateStr(dateObj);
            const dayTasks = tasks.filter(t => t.date === iso);
            const cellDiv = document.createElement('div');
            cellDiv.className = 'p-2 border rounded cursor-pointer hover:bg-gray-100 text-sm flex flex-col items-center justify-center';
            if(!inMonth) cellDiv.classList.add('opacity-40');
            if(today.toDateString() === dateObj.toDateString()) cellDiv.classList.add('bg-blue-100', 'font-bold');
            if(state.calendarSelected && sameDay(dateObj, state.calendarSelected)) cellDiv.classList.add('border-2', 'border-blue-500');

            cellDiv.innerHTML = `<span>${dateObj.getDate()}</span>`;
            if (dayTasks.length > 0) {
                cellDiv.innerHTML += `<div class="mt-1 w-2 h-2 bg-blue-500 rounded-full"></div>`;
            }

            cellDiv.addEventListener('click', ()=>{
                state.calendarSelected = dateObj;
                buildCalendar(); // Re-render untuk highlight
                updateCalendarDayTasks();
            });
            els.calGrid.appendChild(cellDiv);
        }
    }

    function updateCalendarDayTasks(){
        if(!els.calDayTasks) return;
        els.calDayTasks.innerHTML='';
        if(!state.calendarSelected){
            els.calDayTitle.textContent = 'Pilih tanggal';
            els.calDayTasks.innerHTML = '<div class="text-xs text-gray-400 text-center p-4">Belum ada tanggal dipilih.</div>';
            return;
        }
        const iso = toDateStr(state.calendarSelected);
        els.calDayTitle.textContent = 'Tugas untuk: '+ iso;
        const list = tasks.filter(t => t.date === iso);
        if(!list.length){
            els.calDayTasks.innerHTML = '<div class="text-xs text-gray-400 text-center p-4">Tidak ada tugas.</div>';
            return;
        }
        list.forEach(t => {
            const statusBadge = statusBadgeHTML(t.status);
            const div = document.createElement('div');
            div.className = 'p-2 rounded border border-gray-200 bg-white flex items-start justify-between gap-2';
            div.innerHTML = `<div class="text-xs leading-snug"><div class="font-medium">${escapeHTML(t.task)}</div></div>${statusBadge}`;
            els.calDayTasks.appendChild(div);
        });
    }

    function openModal(){ els.modalOverlay.classList.remove('hidden'); }
    function closeModal(){ els.modalOverlay.classList.add('hidden'); }
    
    function startEditTask(task) {
        state.editingTaskId = generateTaskId(task);
        const modalTitle = document.getElementById('modal-title');
        if (modalTitle) modalTitle.textContent = "Edit Task";
        const d = parseDateStr(task.date);
        if (d) els.taskDate.value = d.toISOString().slice(0,10);
        els.taskName.value = task.task;
        els.taskStatus.value = task.status || '0%';
        els.taskImportant.checked = !!importantMap[state.editingTaskId];
        els.taskWeek.value = task.week || '';
        if (els.taskDir) els.taskDir.value = task.dir || '';
        openModal();
    }
    
    function deleteTask(task) {
        if (!confirm(`Hapus task "${task.task}"?`)) return;
        const taskId = generateTaskId(task);
        const isSeed = seedTasks.some(s => generateStableId(s) === taskId);
        if (isSeed) {
            seedDeleted.add(taskId);
            saveJSON('seed_deleted', [...seedDeleted]);
        } else {
            const index = userTasks.findIndex(t => generateTaskId(t) === taskId);
            if (index > -1) {
                userTasks.splice(index, 1);
                saveJSON('custom_tasks', userTasks);
            }
        }
        tasks = buildAllTasks();
        rebuildDerived();
        renderTasks();
    }
    
    function toggleImportant(task) {
        const taskId = generateTaskId(task);
        if (importantMap[taskId]) delete importantMap[taskId];
        else importantMap[taskId] = true;
        saveJSON('important_tasks', importantMap);
        renderTasks();
    }

    // --- INISIALISASI DAN EVENT LISTENERS ---
    rebuildDerived();
    renderStatusFilters();
    renderDateFilters();
    renderTasks();
    buildCalendar();
    updateCalendarDayTasks();
    
    els.search.addEventListener('input', e => { state.search = e.target.value.trim(); renderTasks(); });
    els.addTaskBtn.addEventListener('click', () => {
        state.editingTaskId = null;
        const modalTitle = document.getElementById('modal-title');
        if(modalTitle) modalTitle.textContent = "Tambah Task Harian";
        els.taskForm.reset();
        openModal();
    });
    els.modalClose.addEventListener('click', closeModal);
    els.taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const dateVal = els.taskDate.value;
        const [y,m,d] = dateVal.split('-');
        const reformattedDate = `${d}/${m}/${y}`;
        const computedWeek = els.taskWeek.value || computeWeekNumber(reformattedDate);
        
        const formData = {
            week: parseInt(computedWeek), date: reformattedDate, task: els.taskName.value.trim(), status: els.taskStatus.value, dir: (els.taskDir ? els.taskDir.value.trim() : '')
        };

        if (state.editingTaskId) {
            const isSeed = seedTasks.some(s => generateStableId(s) === state.editingTaskId);
            if (isSeed) {
                 seedOverrides[state.editingTaskId] = formData;
                 saveJSON('seed_overrides', seedOverrides);
            } else {
                const index = userTasks.findIndex(t => generateTaskId(t) === state.editingTaskId);
                if (index > -1) userTasks[index] = { ...userTasks[index], ...formData };
                saveJSON('custom_tasks', userTasks);
            }
        } else {
            userTasks.push(formData);
            saveJSON('custom_tasks', userTasks);
        }
        
        const taskId = generateTaskId(formData);
        if (els.taskImportant.checked) {
            importantMap[taskId] = true;
        } else {
            delete importantMap[taskId];
        }
        saveJSON('important_tasks', importantMap);

        tasks = buildAllTasks();
        rebuildDerived();
        renderTasks();
        renderDateFilters();
        buildCalendar();
        closeModal();
    });
    
    els.calendarToggle.addEventListener('click', ()=>{
        state.calendarVisible = !state.calendarVisible;
        els.calendarView.classList.toggle('hidden', !state.calendarVisible);
        els.taskViewWrapper.classList.toggle('hidden', state.calendarVisible);
    });

    if (els.calPrev) {
        els.calPrev.addEventListener('click', ()=>{ state.calendarMonth--; if(state.calendarMonth<0){ state.calendarMonth=11; state.calendarYear--; } buildCalendar(); });
        els.calNext.addEventListener('click', ()=>{ state.calendarMonth++; if(state.calendarMonth>11){ state.calendarMonth=0; state.calendarYear++; } buildCalendar(); });
    }
}