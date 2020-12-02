<template>
  <div ref="fixed_action_btn" class="fixed-action-btn">
        <a class="btn-floating btn-large grey darken-4 pulse">
            <i class="large material-icons">share</i>
        </a>
        <ul>
            <li><a class="btn-floating blue"><i class="fab fa-telegram-plane"></i></a></li>
            <li><a class="btn-floating pink"><i class="fab fa-instagram"></i></a></li>
            <li><a class="btn-floating teal"><i class="fas fa-phone-alt"></i></a></li>
            <li><a class="btn-floating red"><i class="fas fa-envelope"></i></a></li>
            <li><a class="btn-floating deep-purple"><i class="fab fa-viber"></i></a></li>
            <li><a class="btn-floating green"><i class="fab fa-whatsapp"></i></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
    },
    mounted(){
        M.FloatingActionButton.init(this.$refs.fixed_action_btn, {
            direction: 'top',
            hoverEnabled: false
        });
    },
}
</script>

<style>

</style>