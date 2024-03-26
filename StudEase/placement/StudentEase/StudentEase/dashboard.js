const monthYear = document.getElementById('month-year');
const prevMonth = document.getElementById('prev-month');
const nextMonth = document.getElementById('next-month');
const calendarGrid = document.querySelector('.calendar-grid');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function fillCalendar(month, year) {
    while (calendarGrid.children.length > 7) {
        calendarGrid.removeChild(calendarGrid.lastChild);
    }

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = `${new Date(year, month).toLocaleDateString('en-US', { month: 'long' })} ${year}`;

    for (let i = 0; i < firstDayOfMonth; i++) {
        const cell = document.createElement('div');
        calendarGrid.appendChild(cell);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const cell = document.createElement('div');
        cell.textContent = i;
        calendarGrid.appendChild(cell);
    }
}

prevMonth.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    fillCalendar(currentMonth, currentYear);
});

nextMonth.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    fillCalendar(currentMonth, currentYear);
});

fillCalendar(currentMonth, currentYear);
