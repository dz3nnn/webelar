<template>
    <div class="aboutUs">
        <span class="aboutUs_text">
            <span class="letters letters-1">Ready</span>
            <span class="letters letters-2">Set</span>
            <span class="letters letters-3">Go!</span>
        </span>
    </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
export default {
    data(){

    },
    mounted(){
        var aboutUs_text = {};
        aboutUs_text.opacityIn = [0,1];
        aboutUs_text.scaleIn = [0.2, 1];
        aboutUs_text.scaleOut = 3;
        aboutUs_text.durationIn = 1800;
        aboutUs_text.durationOut = 1600;
        aboutUs_text.delay = 1500;

        new anime.timeline({loop: true})
        .add({
            targets: '.aboutUs_text .letters-1',
            opacity: aboutUs_text.opacityIn,
            scale: aboutUs_text.scaleIn,
            duration: aboutUs_text.durationIn
        }).add({
            targets: '.aboutUs_text .letters-1',
            opacity: 0,
            scale: aboutUs_text.scaleOut,
            duration: aboutUs_text.durationOut,
            easing: "easeInExpo",
            delay: aboutUs_text.delay
        }).add({
            targets: '.aboutUs_text .letters-2',
            opacity: aboutUs_text.opacityIn,
            scale: aboutUs_text.scaleIn,
            duration: aboutUs_text.durationIn
        }).add({
            targets: '.aboutUs_text .letters-2',
            opacity: 0,
            scale: aboutUs_text.scaleOut,
            duration: aboutUs_text.durationOut,
            easing: "easeInExpo",
            delay: aboutUs_text.delay
        }).add({
            targets: '.aboutUs_text .letters-3',
            opacity: aboutUs_text.opacityIn,
            scale: aboutUs_text.scaleIn,
            duration: aboutUs_text.durationIn
        }).add({
            targets: '.aboutUs_text .letters-3',
            opacity: 0,
            scale: aboutUs_text.scaleOut,
            duration: aboutUs_text.durationOut,
            easing: "easeInExpo",
            delay: aboutUs_text.delay
        }).add({
            targets: '.aboutUs_text',
            opacity: 0,
            duration: 500,
            delay: 500
        });
    }
}
</script>

<style lang="scss">
    // .about-us_anim{
    //     background-color: #fff;
    //     color: #212121;
    //     font-weight: 400;
    //     font-size: 2vw;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     text-align: center;
    //     text-transform: uppercase;
    //     font-family: "Khula", sans-serif;
    //     height: 100vh;
    //     box-sizing: border-box;
    //     letter-spacing: 6px;
    //     margin: 0;
    //     line-height: 1.2;
    //     .about-us_anim_svg, .about-us_anim_svg svg{
    //         position: relative;
    //         width: 100%;
    //         height: 100%;
    //         path{
    //             stroke-width: 2;
    //         }
    //     }
    // }
    .aboutUs{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .aboutUs_text {
            width: 500px;
            position: relative;
            font-weight: 900;
            font-size: 4.5em;
            background: #000;
            .letters {
                position: absolute;
                margin: 0;
                left: 0;
                top: 0.3em;
                right: 0;
                opacity: 0; 
            }
        } 
    }
</style>