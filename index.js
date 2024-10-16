const hamMenu = document.querySelector(".nav-ham-menu")
const offScreenMenu = document.querySelector(".off-screen-menu")
const addressElem = document.querySelector(".hero-subsection-address")
const nav = document.querySelector(".nav")

hamMenu.addEventListener("click", () => {
    offScreenMenu.classList.toggle("active")

    if (offScreenMenu.classList.contains("active")) {
        document.addEventListener("click", closeMenu)
    }
})

document.addEventListener("scroll", changeNav)

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