export const formatTimeAgo = (dateString) => {
    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split('-');
    const [hours, minutes, seconds] = timePart.split(':');

    const date = new Date(year, month - 1, day, hours, minutes, seconds);
    const currentDate = new Date();
    const timestamp = date.getTime();
    const currentTimestamp = currentDate.getTime();
    const timeDifference = currentTimestamp - timestamp;
    const secondsInMs = 1000;
    const minutesInMs = secondsInMs * 60;
    const hoursInMs = minutesInMs * 60;
    const daysInMs = hoursInMs * 24;

    if (timeDifference < secondsInMs) {
        return 'a few seconds ago';
    } else if (timeDifference < minutesInMs) {
        const secondsAgo = Math.floor(timeDifference / secondsInMs);
        return `${secondsAgo} seconds${secondsAgo === 1 ? '' : 'и'} ago`;
    } else if (timeDifference < hoursInMs) {
        const minutesAgo = Math.floor(timeDifference / minutesInMs);
        return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`;
    } else if (timeDifference < daysInMs) {
        const hoursAgo = Math.floor(timeDifference / hoursInMs);
        return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;
    } else {
        const daysAgo = Math.floor(timeDifference / daysInMs);
        return `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
    }
};
