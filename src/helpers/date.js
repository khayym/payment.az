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
const currentDate = new Date().toLocaleDateString();
const splitedNewDate = currentDate?.split('/');

export const dateFixer = (date) => {
    const splitedOldDate = date?.split('/');

    if (currentDate === date) {
        return 'Today'
    } else if (splitedNewDate[0] == splitedOldDate[0] && splitedNewDate[1] == parseInt(splitedOldDate[1]) + 1 && splitedOldDate[2] == splitedOldDate[2]) {
        return 'Yesteday';
    } else return date;
}