<template>
  <nav class="white container">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo black-text"><span class="light-blue-text accent-2-text">&</span>Webelar</router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger black-text"><i class="large material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <a href="#" class="black-text">О нас</a>
        <a href="#" class="black-text">Услуги</a>
        <a href="#" class="black-text">Почему мы?</a>
        <a href="#" class="black-text">Контакты</a>
      </ul>
    </div>
    <ul ref="slidenav" class="sidenav grey darken-4" id="mobile-demo">
      <div class="links">
        <a to="href" class="white-text logo"><span class="light-blue-text accent-2-text">&</span>Webelar</a>
        <a href="#" class="">О нас</a>
        <a href="#" class="">Услуги</a>
        <a href="#" class="">Почему мы?</a>
        <a href="#" class="">Контакты</a>
      </div>
      <div class="social">
        <a href="#" class=""><i class="fab fa-telegram-plane"></i></a>
        <a href="#" class=""><i class="fab fa-instagram"></i></a>
        <a href="#" class=""><i class="fas fa-phone-alt"></i></a>
        <a href="#" class=""><i class="fas fa-envelope"></i></a>
        <a href="#" class=""><i class="fab fa-viber"></i></a>
        <a href="#" class=""><i class="fab fa-whatsapp"></i></a>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
  },
  mounted(){
    M.Sidenav.init(this.$refs.slidenav)
  },
};
</script>

<style lang="scss" scoped>
    nav{
      box-shadow: none;
      ul#nav-mobile{
        display: flex;
        a{
          box-shadow: none;
          font-size: 12px;
          border-radius: 0px;
        }
      }
      ul#mobile-demo{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 200px;
        .links{
          padding: 15px;
          a.logo{
            font-size: 25px;
            margin: 20px 0px;
          }
          a{
            padding: 0;
            line-height: 40px;
          }
        }
        .social{
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          padding: 15px;
          margin-bottom: 20px;
          a{
            display: flex;
            justify-content: center;
            padding: 0;
            margin: 5px;
            opacity: 0.8;
            transition: .3s all linear;
            &:hover{
              opacity: 1;
            }
          }
        }
      }
    }
    .sidenav-trigger{
      position: absolute!important;
      left: 0px!important;
      top: 3px!important;
    }
    @media(max-width: 992px){
      nav{
        padding: 0;
        background: #212121;
        .nav-wrapper{
          display: flex;
          justify-content: center;
          background: #212121;
          a{
            position: relative;
            transform: translateX(0%);
            left: 0;
          }
          .brand-logo{
            color: #fff!important;
          }
          .sidenav-trigger{
            color: #fff!important;
          }
        }
      }
    }
</style>