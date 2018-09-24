$(document).ready(function(){

    // var controller = new ScrollMagic.Controller();


    // var pinIntroScene = new ScrollMagic.Scene({
    //     triggerElement: '.text-box',
    //     // triggerHook: 0,
    //     duration: '10%'

    // })
    //     .setPin('.text-box', {pushFollowers:false})
    //     .addTo(controller);

    // $('.project').each(function () {
    //     var ourScene = new ScrollMagic.Scene({

    //         triggerElement: this.children[0],
    //         duration: '80%',
    //         // triggerHook: 0.9,
    //         // reverse: false
    //     })
    //         .setClassToggle(this, 'fade-in')
    //         // .addIndicators({
    //         //     name: 'fade-scene',
    //         //     colorTrigger: 'pink',
    //         //     colorStart: 'yellow',
    //         //     colorEnd: 'blue'
    //         // })
    //         .addTo(controller);
    // })


    //Slider////////
    


    let sliderImages = document.querySelectorAll('.slide'),
        slider = document.querySelector('.wrap'),
        arrowRight = document.querySelector('.arrow__right'),
        arrowLeft = document.querySelector('.arrow__left'),
        close = document.querySelector('.nav__icon__slider'),
        picBtn = document.querySelectorAll('.folio'),

        current = 0;
    console.log(picBtn);

//CLear images

    function reset() {
        for(let i = 0; i < sliderImages.length; i++){
            sliderImages[i].style.display = 'none';
        
        }
    }

//Slide init

    function startSlide() {
        reset();
        sliderImages[0].style.display = 'block';

    }

//Show prev

    function slideLeft() {
        reset();
        sliderImages[current - 1].style.display = 'block';
        current--;
    }
//Left arrow click

    arrowLeft.addEventListener('click', function () {
        if(current === 0){
            current = sliderImages.length;
        }
        slideLeft();
    });

//Show next

    function slideRight() {
        reset();
        sliderImages[current + 1].style.display = 'block';
        current++;
    }
//Right arrow click
    arrowRight.addEventListener('click', function () {
        if(current === sliderImages.length){
            current = 0;
        }
        slideRight();
    });

//Start slider
    function pictureClick(){

        slider.style.display = 'none';
        for(let i = 0; i < picBtn.length; i++){
        picBtn[i].addEventListener('click', function(){
            slider.style.display = 'block';
            startSlide();
            console.log('dziala');
        });
    }
}
//Close slider
    close.addEventListener('click', function(){
        slider.style.display = 'none';
    });

 pictureClick();


//scrolling
    var inputMenu = document.getElementById('navi-toggle');

    $(".nav__item").click(function(){
        inputMenu.checked = false;
    });

    $('#arrow').on('click', function(event) {
        $('html, body').animate({
            scrollTop: $("#experience").offset().top
        }, 1000);
    });



});

