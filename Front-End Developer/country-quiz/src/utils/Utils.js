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

export const getQuestion = (arr) => {
    const data = generateRandom(arr);
    let capital = '';
    let answers = [];
    let city = '';

    if(data) {
        capital = data.capital;
        city = data.name;
        answers.push(city);
        
        for(let i = 0; i < 3; i++) {
            if(generateRandom(arr).name !== city) {
                answers.push(generateRandom(arr).name);
            }
        }
    }

    let quiz = {
        question: `${capital} is the capital of`,
        choices: shuffleArray(answers),
        correct: city
    }
    
    return quiz;
}