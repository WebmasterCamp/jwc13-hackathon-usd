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
