const images = ['assets/img1.jpg', 'assets/img2.jpg', 'assets/img3.jpg'];
let idx = 0;

function rotateImage() {
  idx = (idx + 1) % images.length;
  document.getElementById("carousel-img").src = images[idx];
}

setInterval(rotateImage, 3000);