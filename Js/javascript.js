$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




    function Abhishek() {
        
  var blue = document.querySelector('.first_navbar')
  if (window.scrollY > 0) {
        blue.classList.add('scrolled');
    } else {
        blue.classList.remove('scrolled');
    }
    console.log(blue);
}
Abhishek()