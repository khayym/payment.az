export const groupSorter = (data) => {
    const groups = data.reduce((groups, game) => {
        const date = game.isoTime;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(game);
        return groups;
    }, {});
    const groupArrays = Object.keys(groups).map((date) => {
        return {
            date,
            lists: groups[date]
        };
    });

    return groupArrays
}