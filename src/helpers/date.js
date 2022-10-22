const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const date = () => {
    const date = new Date();
    return {
        day: date.getDate(),
        month: month[date.getMonth()],
        year: date.getFullYear(),
        hours: date.getHours(),
        minut: date.getMinutes(),
    }
}