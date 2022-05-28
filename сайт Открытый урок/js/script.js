//Слайдер
let slideIndex = 1;
showSlides(slideIndex);
function nextSlide() {
   showSlides(slideIndex += 1);
}
function previousSlide() {
   showSlides(slideIndex -= 1);
}
function currentSlide(n) {
   showSlides(slideIndex = n);
}

function showSlides(n) {
   let slides = document.getElementsByClassName("slider__item");
   if (n > slides.length) {
      slideIndex = 1
   }
   if (n < 1) {
      slideIndex = slides.length
   }
   for (let slide of slides) {
      slide.style.display = "none";
   }
   slides[slideIndex - 1].style.display = "block";
}



//Анимация header'a
window, onscroll = function() {scroll()};
function scroll(){
	let head = document.getElementById('Head')
	let pos = 1330;
	if (document.body.scrollop > pos || document.documentElement.scrollTop > pos){;
	  head.classList.add("active");
	} else {
      head.classList.remove("active");
	}
}
