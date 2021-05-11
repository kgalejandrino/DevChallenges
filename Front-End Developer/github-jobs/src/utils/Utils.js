/* Function: To convert date to days ago/ months ago */
export const calculateDate = dt => {
    const date = new Date(dt);
    const date1 = new Date();

    const timeDifference = date1.getTime() - date.getTime();
    let daysDifference = Math.floor(timeDifference / (1000 * 3600 ));

    if(daysDifference < 24) {
        return `about ${daysDifference} hours ago`;
    } else {
        let days = Math.floor(daysDifference / 24);
        if(days < 31) {
            return days === 1 ? `${days} day ago`: `${days} days ago`;
        } else {
            let months = Math.round(days / 30);
            return months === 1 ? `${months} month ago`: `${months} months ago`;
        }
    }
}

