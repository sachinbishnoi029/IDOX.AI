
const Preloader = document.getElementById('preloader')
setTimeout(() => {
  console.log("Delayed for 1 second.");
  document.body.classList.remove("overflow-hidden");
  Preloader.classList.add("d-none")
}, 2000);
//back to top
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("back-to-top");

  // Show the button when the user scrolls down 200px from the top
  window.onscroll = function () {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  };

  // Scroll back to the top when the button is clicked
  button.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
});
//nav-bar


$('.slick2').slick({
  dots: false,
  infinite: true,
  speed: 3000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'Linear',
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  responsive: [{
    breakpoint: 1300,
    settings: {
      slidesToShow: 6,
      autoplay: true,
      speed: 3000,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      cssEase: 'Linear',
      infinite: true,
      dots: false,
    }
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'Linear',
      speed: 1000,
    }
  },
  {
    breakpoint: 650,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      cssEase: 'Linear',
    }
  },
  {
    breakpoint: 580,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      cssEase: 'Linear',
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplaySpeed: 0,
      cssEase: 'Linear',
    }
  }
  ]

})


$('.slider3').slick({
  autoplay: false,
  centerMode: true,
  centerPadding: '240px',
  slidesToShow: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "200px",
      }
    },
    {
      breakpoint: 850,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    },
  ]
});




let nav = document.querySelector(".nav");
let menubar = document.querySelector(".menubar");
let loadtake = document.querySelector(".nav-logo")
let finish = document.querySelectorAll(".finish");
let overlay = document.querySelector(".over-layer")
let bgbody = document.querySelector(".bg-bodys");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
nav.addEventListener("click", function () {
  menubar.classList.toggle("left-0")
  nav.classList.toggle("nav-bg")
  nav.classList.toggle("nav-2")
  span1.classList.toggle("nav1")
  span2.classList.toggle("nav2")
  span3.classList.toggle("nav3")
  overlay.classList.toggle("left-0")
  bgbody.classList.toggle("over-flow")
  document.body.classList.toggle("overflow_hidden");
})
overlay.addEventListener("click", function () {
  menubar.classList.toggle("left-0")
  span1.classList.toggle("nav1")
  nav.classList.toggle("nav-bg")
  span2.classList.toggle("nav2")
  span3.classList.toggle("nav3")
  overlay.classList.toggle("left-0")
  bgbody.classList.toggle("over-flow")
  document.body.classList.toggle("overflow_hidden");
})
finish.forEach(e => {
  e.addEventListener("click", function () {
    menubar.classList.remove("left-0")
    span1.classList.toggle("nav1")
    nav.classList.toggle("nav-bg")
    span2.classList.toggle("nav2")
    span3.classList.toggle("nav3")
    bgbody.classList.remove("over-flow")
    overlay.classList.toggle("left-0")
    span2.classList.toggle("nav2")
    span3.classList.toggle("nav3")
    document.body.classList.toggle("overflow_hidden");
  })
});
