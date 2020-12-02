<template>
  <div>
    <div class="promo">
      <PromoText />
      <div class="promo_call-map">
        <PromoCall />
        <PromoMap />
      </div>
    </div>
    <AboutUsText />
  </div>
</template>

<script>
import PromoText from '@/components/promoText'
import PromoCall from '@/components/promoCall'
import PromoMap from '@/components/promoMap'
import AboutUsText from '@/components/aboutUsText'
export default {
  name: 'Home',
  components: { 
    PromoText,
    PromoCall,
    PromoMap,
    AboutUsText
  }
}
</script>
<style lang="scss">
  .promo{
    .promo_call-map{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media (max-width: 980px){
    .promo{
      .promo_call-map{
        flex-direction: column;
      }
    }
  }
</style>