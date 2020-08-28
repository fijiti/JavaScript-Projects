var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// This function scrolls through the photos.  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className.replace(" acive", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Timer function 
function countdown() {
    var seconds = document.getElementById("seconds").value;
    var aTimer = setInterval(function () {
        if (seconds <= 0) {
            clearInterval(aTimer);
            timer.innerHTML = "Times Up!";
        }
        else {
            timer.innerHTML = seconds;
            seconds -= 1;
        }

    }, 1000);

}