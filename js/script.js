var btnShowAll = document.querySelector('.button-show-all');
var btnHidden = document.querySelector('.button-hidden');

var carousel = document.querySelector('.carousel');


btnShowAll.addEventListener('click', function () {
    carousel.style.height = '100%';
    carousel.style.overflow = 'none';
    btnShowAll.classList.add('hidden');
    btnHidden.classList.remove('hidden');
});


btnHidden.addEventListener('click', function() {
    carousel.style.height = '200px';
    btnShowAll.classList.remove('hidden');
    btnHidden.classList.add('hidden');
});



const swiper = new Swiper('.swiper', {

    slidesPerView: 10,
    slidesperGroup: 1,
    loop: true,
    direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
 
    },

});
