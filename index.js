const quizData= [
    {
        question:"How old is Subhasish ?",
        a:'13',
        b:'22',
        c:'24',
        d:'25',
        correct:'b'
    },{
        question:"What is the most popular programing language in the year 2021?",
        a:'Java',
        b:'Python',
        c:'JavaScript',
        d:'C++',
        correct:'c'
    
    },{
        question:'Who is the president of india?',
        a:'Narendre Modi',
        b:'Subhasish Ghosh',
        c:'Peter parker',
        d:'Amit Patel',
        correct:'a'
    },{
        question:"What does HTML stands for ?",
        a:'Hypertext Markup Language',
        b:'Highlighted Markup Language',
        c:'Hypertext Makeup Language',
        d:'Hypertext Market Language',
        correct:'a'
    },{
        question:"What year JavaScript launched?",
        a:'2000',
        b:'1995',
        c:'2012',
        d:'1996',
        correct:'b'

    }
];

const quiz = document.getElementById('quiz');
const answerEls= document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text= document.getElementById('a-text');
const b_text= document.getElementById('b-text');
const c_text= document.getElementById('c-text');
const d_text= document.getElementById('d-text');
const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

    deselectAnswer()
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
const getSelected=()=>{
 
  let answer = undefined;
  answerEls.forEach((answerEl)=>{
   if(answerEl.checked){
       answer= answerEl.id;
   }
  });
  return answer;
    
}


function deselectAnswer(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}
submitBtn.addEventListener('click',()=>{
   const answer = getSelected();
   console.log(answer);
if(answer === quizData[currentQuiz].correct){
    score++
}
    if(answer) {
        currentQuiz++;
        
        if(currentQuiz < quizData.length){
                loadQuiz();
            
            }else {
                quiz.innerHTML= `<h2>You answered correctly at ${score}/${quizData.length} questions</h2>`
                }
            }
            })

       