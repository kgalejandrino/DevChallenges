import axios from 'axios';

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

export const options = [
    { 'question': 'Select Category', 'choices': ['Capital', 'Flag'] },
    { 'question': 'Select Region', 'choices': ['Africa', 'Americas', 'Asia', 'Europe', 'Ocenia']}
];

export const getQuestion = async (category, region) => {
    const response = await axios.get(`https://restcountries.eu/rest/v2/region/${region}?fields=name;capital;flag`);
    const json = response.data;
    // console.log(json);
    const questions = [];

    for(let i = 0; i < 10; i++) {
        if(category === 'Capital') {
            let data = generateRandom(json);
            let answers = [];
            answers.push(data.name);

            for(let i = 0; i < 3; i++) {
                const answer = generateRandom(json).name;

                if(answer !== data.name && answer !== '') {
                    answers.push(answer);
                }
            }
            const random = {
               question: `${data.capital} is a capital of`,
               choices: shuffleArray(answers),
               correct: data.name
            }
            questions.push(random); 
        } else if(category === 'Flag') {
            let data = generateRandom(json);
            let answers = [];
            answers.push(data.name);

            for(let i = 0; i < 3; i++) {
                const answer = generateRandom(json).name;

                if(answer !== data.name && answer !== '') {
                    answers.push(answer);
                }
            }
            const random = {
               question: 'Which country does this flag belong to?',
               choices: shuffleArray(answers),
               correct: data.name,
               url: data.flag
            }
            questions.push(random); 
        }
    }
    return questions;
}
