console.log('js file called..');

let score = 0;

// data

let questions = [
    {
        question:'What is the full form of CSS?',
        posAnswerOne:' Cascading Style Sheets',
        posAnswerTwo:'Coloured Style Sheets',
        posAnswerThree:'Color and Style Sheets',
        posAnswerFour:'None of the Above',
        answer:1
    },
    {
        question:'How can we change the background of an element?',
        posAnswerOne:' background Color',
        posAnswerTwo:'color',
        posAnswerThree:' Both A and b',
        posAnswerFour:'None of the Above',
        answer:1
    },
    {
        question:'In how many ways can CSS be written in?',
        posAnswerOne:'1',
        posAnswerTwo:'2',
        posAnswerThree:'3',
        posAnswerFour:'4',
        answer:3
    },
    {
        question:' How can we select an element with a specific ID in CSS??',
        posAnswerOne:'#',
        posAnswerTwo:'()',
        posAnswerThree:'.',
        posAnswerFour:'link',
        answer:1
    },
    {
        question:'Can negative values be allowed in padding property?',
        posAnswerOne:'Depends on property',
        posAnswerTwo:'Yes',
        posAnswerThree:'No',
        posAnswerFour:' None of the above',
        answer:2
    }
];
const main = document.getElementById('allQuestions');
function createQuestionPart(){
    const article = document.createElement('article');
    const question = document.createElement('p');
    const section = document.createElement('section');
    const posAnswerOne = document.createElement('p');
    posAnswerOne.setAttribute('id','1');
    posAnswerOne.setAttribute('onclick','checkAnswer(this)')
    const posAnswerTwo = document.createElement('p');
    posAnswerTwo.setAttribute('onclick','checkAnswer(this)')
    posAnswerTwo.setAttribute('id','2');
    const posAnswerThree = document.createElement('p');
    posAnswerThree.setAttribute('id','3');
    posAnswerThree.setAttribute('onclick','checkAnswer(this)')
    const posAnswerFour = document.createElement('p');
    posAnswerFour.setAttribute('id','4');
    posAnswerFour.setAttribute('onclick','checkAnswer(this)')
    const next = document.createElement('a');
    next.innerText = 'Next'
    


    section.appendChild(posAnswerOne);
    section.appendChild(posAnswerTwo);
    section.appendChild(posAnswerThree);
    section.appendChild(posAnswerFour);

    article.appendChild(question);
    article.appendChild(section);
    article.appendChild(next);

    return {article,question,section,posAnswerOne,posAnswerTwo,posAnswerThree,posAnswerFour,next};
}

function loadQuestions(){


    for(let i=0;i<questions.length;i++){

       let {article,question,section,posAnswerOne,posAnswerTwo,posAnswerThree,posAnswerFour,next} = createQuestionPart();
       question.innerText = questions[i].question;
       posAnswerOne.innerText= questions[i].posAnswerOne;
       posAnswerOne.setAttribute('class',questions[i].answer)
       posAnswerTwo.innerText= questions[i].posAnswerTwo;
       posAnswerTwo.setAttribute('class',questions[i].answer)
       posAnswerThree.innerText= questions[i].posAnswerThree;
       posAnswerThree.setAttribute('class',questions[i].answer)
       posAnswerFour.innerText= questions[i].posAnswerFour;
       posAnswerFour.setAttribute('class',questions[i].answer)
       article.setAttribute('id',10*(i+1));
       next.setAttribute('href',`#${10*(i+2)}`);
       if(i==questions.length -1){
            const submit = document.createElement('button');
            submit.setAttribute('onclick','displayScore()')
            const nameBtn = document.createTextNode('Submit');
            submit.appendChild(nameBtn);
            article.removeChild(next);
            article.appendChild(submit);
        }
       main.appendChild(article);
    }

}

function checkAnswer(e){
    let userAnswer;
    let realAnswer;
    console.log(e.getAttribute('id'))
    userAnswer = e.getAttribute('id');
    realAnswer = e.getAttribute('class');
    console.log(userAnswer,realAnswer);
    if(userAnswer == realAnswer){
        score++
        e.style.backgroundColor = 'green';
        window.alert('Next Question')
    }else{
        e.style.backgroundColor = 'red';
        window.alert('oopppss')
    }    
}


function displayScore(){
    let text ;
    if(score<3){
        text = 'Try Again'
    }else if(score>=3){
        text = 'Well Done!!'
    }
    
    window.alert(`Your Score = ${score} \n ${text}`);
}
