$(document).ready(function(){

    var controller = new ScrollMagic.Controller();


    var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '.text-box',
        // triggerHook: 0,
        duration: '10%'

    })
        .setPin('.text-box', {pushFollowers:false})
        .addTo(controller);

    $('.project').each(function () {
        var ourScene = new ScrollMagic.Scene({

            triggerElement: this.children[0],
            duration: '80%',
            // triggerHook: 0.9,
            // reverse: false
        })
            .setClassToggle(this, 'fade-in')
            // .addIndicators({
            //     name: 'fade-scene',
            //     colorTrigger: 'pink',
            //     colorStart: 'yellow',
            //     colorEnd: 'blue'
            // })
            .addTo(controller);
    })
});