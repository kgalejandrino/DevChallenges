import axios from 'axios';

export const options = [
    { 'question': 'Select Category', 'choices': ['Capital', 'Flag'] },
    { 'question': 'Select Region', 'choices': ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']}
];

/* Function: Generate random numbers */
const generateRandom = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
}


/* Function: shuffles elements in the array */
/* Credits to @Durstenfeld shuffle */
const shuffleArray = (arr) => {
    for(let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


/* Function: Format country name (e.g Macedonia (the former Yugoslav Republic of) to Macedonia) */
const formatStr = (str) => {
    if(str.indexOf('(') === -1) {
        return str;
    } else {
        return str.substring(0, str.indexOf("("));
    }
}

/* Function: Generate 10 random object containing (questions & choices) */
export const getQuestion = async (category, region) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/region/${region}?fields=name;capital;flag`);
    let json = response.data;
    console.log(json);
    const questions = [];

    for(let i = 0; i < 10; i++) {
        if(category === 'Capital') {
            let data = generateRandom(json);
            json = json.filter(item => item.name !== data.name);
            let answers = [];
            answers.push(formatStr(data.name));

            for(let i = 0; i < 3; i++) {
                const answer = generateRandom(json).name;
                answers.push(formatStr(answer));
            }

            const random = {
               question: `${data.capital} is a capital of`,
               choices: shuffleArray(answers),
               correct: formatStr(data.name)
            }
            questions.push(random); 
        } else if(category === 'Flag') {
            let data = generateRandom(json);
            json = json.filter(item => item.name !== data.name);
            let answers = [];
            answers.push(formatStr(data.name));

            for(let i = 0; i < 3; i++) {
                const answer = generateRandom(json).name;
                answers.push(formatStr(answer));
            }

            const random = {
               question: 'Which country does this flag belong to?',
               choices: shuffleArray(answers),
               correct: formatStr(data.name),
               url: data.flag
            }
            questions.push(random); 
        }
    }
    return questions;
}
