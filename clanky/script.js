let btnView = document.querySelector(".btn-view")
let hdContent = document.querySelector("#hd-content")

btnView.addEventListener("click", showContent)

function showContent() {
    btnView.style.display = "none"
    hdContent.style.display = "block"
}