document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".slider-image");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;
  
    function showImage(index) {
      images.forEach(image => image.style.display = "none");
      images[index].style.display = "block";
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
  
    nextButton.addEventListener("click", nextImage);
    prevButton.addEventListener("click", prevImage);
  
    showImage(currentIndex);
  });
  