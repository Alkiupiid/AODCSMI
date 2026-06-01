const question1 = document.querySelector('#question-1');
const answer1 = document.querySelector('#answer-1');
const question2 = document.querySelector('#question-2');
const answer2 = document.querySelector('#answer-2');
const question3 = document.querySelector('#question-3');
const answer3 = document.querySelector('#answer-3');

function toggleVisibility(qElement, aElement) {
  if(aElement.classList.contains('open-grid-container')) {
    aElement.classList.remove('open-grid-container');
    qElement.setAttribute('aria-expanded', 'false');
    aElement.setAttribute('aria-hidden', 'true');
    console.log('Answer Hidden');
  }
  else {
    aElement.classList.add('open-grid-container');
    qElement.setAttribute('aria-expanded', 'true');
    aElement.setAttribute('aria-hidden', 'false');
    console.log('Answer Shown');
  }
}

question1.addEventListener('click', function() {
  toggleVisibility(question1, answer1)
});
question2.addEventListener('click', function() {
  toggleVisibility(question2, answer2)
});
question3.addEventListener('click', function() {
  toggleVisibility(question3, answer3)
});