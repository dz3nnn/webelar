<template>
  <div id="app">
    <Preloader />
    <Navbar />
    <FixedButton />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import FixedButton from '@/components/fixedButton'
import Preloader from '@/components/preloader'
export default{
  components: {
    Preloader,
    Navbar,
    FixedButton
  }
}
</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  .container{
    width: 100%!important;
  }
  @media (max-width: 1340px){
    .container{
      padding: 0 1rem;
    }
  }
</style>
