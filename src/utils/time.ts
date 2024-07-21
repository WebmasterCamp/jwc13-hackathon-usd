export function getDatesArray(startYear: number, startMonth: number) {
    const dates = [];
    const today = new Date();
    const startDate = new Date(startYear, startMonth - 1, 1); // Month is 0-indexed in JS

    while (startDate <= today) {
        dates.push(new Date(startDate));
        startDate.setMonth(startDate.getMonth() + 1);
    }

    return dates;
}

export function getCalendarMonth() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    let calendar = [];
    
    // Add days from previous month
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevMonthYear = month === 1 ? year - 1 : year;
    const prevMonthDays = new Date(prevMonthYear, prevMonth, 0).getDate();
    
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
        calendar.push({
            date: prevMonthDays - i,
            month: prevMonth,
            year: prevMonthYear,
            isCurrentMonth: false
        });
    }
    
    // Add days of current month
    for (let i = 1; i <= daysInMonth; i++) {
        calendar.push({
            date: i,
            month: month,
            year: year,
            isCurrentMonth: true
        });
    }
    
    // Add days from next month
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextMonthYear = month === 12 ? year + 1 : year;
    let nextMonthDay = 1;
    
    while (calendar.length < 42) {
        calendar.push({
            date: nextMonthDay,
            month: nextMonth,
            year: nextMonthYear,
            isCurrentMonth: false
        });
        nextMonthDay++;
    }
    
    return calendar;
}