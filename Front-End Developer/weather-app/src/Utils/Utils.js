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

export function getCurrentPosition(location = {}) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, location);
    })
}




