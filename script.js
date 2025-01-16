// script.js
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelectorAll(".coffee-item button").forEach((button) => {
    button.addEventListener("click", () => {
      alert("Item added to cart!");
    });
  });
  
  let slideIndex = 0;
  showSlides();

  function showSlides() {
      let slides = document.querySelectorAll(".slide");
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1; }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 3000); // Change slide every 3 seconds
  }

  function changeSlide(n) {
      let slides = document.querySelectorAll(".slide");
      slides[slideIndex - 1].style.display = "none";
      slideIndex += n;
      if (slideIndex > slides.length) { slideIndex = 1; }
      if (slideIndex < 1) { slideIndex = slides.length; }
      slides[slideIndex - 1].style.display = "block";
  }