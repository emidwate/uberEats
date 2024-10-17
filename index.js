const hamMenu = document.querySelector(".nav-ham-menu")
const offScreenMenu = document.querySelector(".off-screen-menu")
const nav = document.querySelector(".nav")
const form = document.querySelector(".form")

document.addEventListener("scroll", changeNav)
document.addEventListener("click", closeMenu)
hamMenu.addEventListener("click", () => {
  offScreenMenu.classList.add("active")
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
})

function closeMenu(e) {
  if (!hamMenu.contains(e.target) && !offScreenMenu.contains(e.target)) {
    offScreenMenu.classList.remove("active")
  }
}

function changeNav() {
  if (window.scrollY == 0 ) {
    nav.style.backgroundColor = "transparent"
  } else {
    nav.style.backgroundColor = "white"
  }
}