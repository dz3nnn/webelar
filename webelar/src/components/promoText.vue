<template>
    <div class="promo_text">
        <h1>Хотите увеличить свою прибыль?<br>
            Мы поможем вам <span ref="typing" class="typing" id="typing"></span>
        </h1>
    </div>
</template>

<script>
import Typed from 'typed.js';
export default {
    mounted(){
        new Typed(this.$refs.typing, {
            strings: ['разработать SPA', 'разработать веб-сайт', 'настроить рекламу', 'сделать SEO продвижение'],
            typeSpeed: 70,
            backSpeed: 30,
            loop: true
        });
    }
}
</script>

<style lang="scss">
    .promo_text{
        display: flex;
        justify-content: flex-start;
        h1{
            text-transform: unset;
            font-weight: normal;
            font-size: 50px;
            width: 100%;
            .typing{
                font-size: 40px;
                border-bottom: 2px solid #53c3ff;
            }
        }
    }
</style>