/* Fetch users geolocation */
export function getCurrentPosition(location = {}) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, location);
    })
}

/* Weather state object set to the image's URL */
export const weatherState = {
    "sn": "https://github.com/kgalejandrino/DevChallenges/blob/main/Front-End%20Developer/weather-app/src/assets/Snow.png?raw=true",
    "sl": "https://github.com/kgalejandrino/DevChallenges/blob/main/Front-End%20Developer/weather-app/src/assets/Sleet.png?raw=true",
    "h": "https://github.com/kgalejandrino/DevChallenges/blob/main/Front-End%20Developer/weather-app/src/assets/Hail.png?raw=true",
    "t": "https://github.com/kgalejandrino/DevChallenges/blob/main/Front-End%20Developer/weather-app/src/assets/Hail.png?raw=true",
    "hr": "https://github.com/kgalejandrino/DevChallenges/blob/main/Front-End%20Developer/weather-app/src/assets/HeavyRain.png?raw=true",
    "lr": "https://github.com/kgalejandrino/DevChallenges/blob/main/Front-End%20Developer/weather-app/src/assets/LightRain.png?raw=true",
    "s": "https://github.com/kgalejandrino/DevChallenges/blob/main/Front-End%20Developer/weather-app/src/assets/Shower.png?raw=true",
    "hc": "https://github.com/kgalejandrino/DevChallenges/blob/main/Front-End%20Developer/weather-app/src/assets/HeavyCloud.png?raw=true",
    "lc": "https://github.com/kgalejandrino/DevChallenges/blob/main/Front-End%20Developer/weather-app/src/assets/LightCloud.png?raw=true",
    "c": "https://github.com/kgalejandrino/DevChallenges/blob/main/Front-End%20Developer/weather-app/src/assets/Clear.png?raw=true"
}

/* Functionality to get the Date - format (eg. Fri, 5 Jun) */
const dayArr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const formatDate = (d) => {
    const dt = new Date(d);

    const day = dt.getUTCDay();
    const date = dt.getUTCDate();
    const month = dt.getUTCMonth();

    return `${dayArr[day]}, ${date} ${monthArr[month]}`
}

/* Functionality to get convert celcius to farenheight */
export const convertToFarenheight = (temp) => {
    return (temp - 32) * (5/9);
}



