let lastScrollTop = 0

window.addEventListener("scroll", () => {
  const currentScrollTop =
    (window.pageYOffset || document.documentElement.scrollTop) - 50

  const nav = document.querySelector("nav")

  if (currentScrollTop > lastScrollTop) {
    nav.style.transform = "translateY(-5rem)"
  } else if (currentScrollTop < lastScrollTop) {
    nav.style.transform = ""
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop // Prevent negative scrolling
})

// script.js
