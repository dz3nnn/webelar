<template>
    <div class="promo_call-write">
        <a class="btn z-depth-3 white black-text">Получить консультацию</a>
        <a class="btn z-depth-3 white black-text">Позвонить</a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .promo_call-write{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 400px;
        width: 100%;
        a{
            width: 235px;
            margin-bottom: 10px;
            transition: .3s all linear;
            &:nth-last-of-type(){
                margin-bottom: 0;
            }
            &:hover{
                box-shadow: 0 8px 17px 2px rgba(0,0,0,0.3), 0 3px 14px 2px rgba(0,0,0,0.3), 0 5px 5px -3px rgba(0,0,0,0.3);
            }
        }
    }
</style>