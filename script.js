let button = document.querySelector("#btn")
let closeBtn = document.querySelector("#close")
let popUp = document.querySelector("#pop-up")

button.addEventListener("click", popUpOpen)
closeBtn.addEventListener("click", popUpClose)

function popUpOpen() {
    popUp.style.display = "block"
}

function popUpClose() {
    popUp.style.display = "none"
}