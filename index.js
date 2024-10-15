const hamMenu = document.querySelector(".nav-ham-menu")
const offScreenMenu = document.querySelector(".off-screen-menu")

hamMenu.addEventListener("click", () => {
    offScreenMenu.classList.toggle("active")

    if (offScreenMenu.classList.contains("active")) {
        document.addEventListener("click", closeMenu)
    }
})

function closeMenu(e) {
  if (!hamMenu.contains(e.target) && !offScreenMenu.contains(e.target)) {
    offScreenMenu.classList.remove("active")
  }
}