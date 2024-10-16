const hamMenu = document.querySelector(".nav-ham-menu")
const offScreenMenu = document.querySelector(".off-screen-menu")
const addressElem = document.querySelector(".hero-subsection-address")
const nav = document.querySelector(".nav")

const navClone = nav.cloneNode(true)

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

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.style.backgroundColor = "white"
    } else {
      nav.style.backgroundColor = "transparent"
    }
  })
})

observer.observe(addressElem)