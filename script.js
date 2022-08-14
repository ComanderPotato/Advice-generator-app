const button = document.querySelector('.button')
const advice = document.querySelector('.advice')
const advNum = document.querySelector('.adv-num')
const main = document.querySelector('.main')
let markup = '';
button.addEventListener('click', function() {
  fetch('https://api.adviceslip.com/advice').then(res => {return res.json()}).then(data => {
    advNum.innerHTML = `Advice #${data.slip.id}`;
    advice.innerHTML = `“${data.slip.advice}”`;
    console.log(data.slip.id)
  
  })
})
