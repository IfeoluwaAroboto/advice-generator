let id = document.querySelector(".id")
let ad = document.querySelector(".advice")
let btn = document.querySelector(".btn")
let dice = document.querySelector("#roll-dice")
const apiUrl = "https://api.adviceslip.com/advice"

async function getAdvice(){
    const response  = await fetch(apiUrl)
    const data = await response.json()
    id.innerHTML = "#" + data.slip.id
    ad.innerHTML = data.slip.advice
}
window.addEventListener("DOMContentLoaded", ()=> {
   getAdvice()
})
btn.addEventListener("click", () => {
    getAdvice()
 dice.classList.toggle("dice")
 dice.disabled = true;
})
