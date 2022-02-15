// Adicionando iteração aos elementos clicáveis
const iterables = Array.from(document.getElementsByClassName("iterable"))

function alertElement(e) {
  alert("Você clicou na opção de:" + this.id)
}

iterables.map((iterable) => {
  iterable.onclick = alertElement
})

// handleMobileMenu
const openButton = document.getElementById("open")
const closeButton = document.getElementById("close")
const nav = document.getElementById("header__nav")
const disconect = document.getElementById("logout-mobile")

openButton.onclick = () => {
  nav.style.display = "flex"
  closeButton.style.display = "flex"
  disconect.style.display = "flex"
}

closeButton.onclick = () => {
  nav.style.display = "none"
  disconect.style.display = "none"
  closeButton.style.display = "none"
}
