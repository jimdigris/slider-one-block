'use strict';

(function () {

    const sliderWrap = document.querySelector('.sliderWrap');
    const slider = {
        image: sliderWrap.querySelector('img'),
        speed: 2000,

        slide: [
            {
                src: 'images/2.jpg',
                alt: 'альт 2',
                title: 'тайтл 2'
            },
            {
                src: 'images/3.jpg',
                alt: 'альт 3',
                title: 'тайтл 3'
            },
            {
                src: 'images/4.jpg',
                alt: 'альт 4',
                title: 'тайтл 4'
            }
        ]
    }

    let activeSlide = 0;


    // ---


    setInterval(startSlider, slider.speed);

    function startSlider() {
        slider.image.src = slider.slide[activeSlide].src;
        slider.image.alt = slider.slide[activeSlide].alt;
        slider.image.title = slider.slide[activeSlide].title;

        activeSlide++;
        if (activeSlide === slider.slide.length) {
            activeSlide = 0;
        }
    }

})(); 
