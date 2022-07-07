let id = document.querySelector(".id")
let ad = document.querySelector(".advice")
let btn = document.querySelector(".btn")

const apiUrl = "https://api.adviceslip.com/advice"

async function getAdvice(){
    const response  = await fetch(apiUrl)
    const data = await response.json()

    ad.innerHTML = data.slip.advice
}
async function getId(){
    const response  = await fetch(apiUrl)
    const data = await response.json()

    id.innerHTML = "#" + data.slip.id
}
window.addEventListener("DOMContentLoaded", ()=> {
   getAdvice()
   getId()
}

)
btn.addEventListener("click", () => {
    getAdvice()
    getId()
})
