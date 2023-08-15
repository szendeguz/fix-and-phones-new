<template>
  <sub-header headline="iphone akkumulátor csere"></sub-header>
  <basic-section
  :headline="headline" :paragraph1="paragraph1" :paragraph2="paragraph2" :image="img"
  :withScrollButton="true" buttonText="Árlista"
  :whiteTheme="false"
  />
  <mega-accordion-section contentType="iphoneBatteryChange" :priceList="batteryChangeList"></mega-accordion-section>
  <battery-discount :discountList="batteryDiscountList"></battery-discount>
  <image-carousel :images="images"></image-carousel>
</template>

<script>
import { store } from '../../store.js';
import SubHeader from '../../components/Headers/SubHeader.vue'
import BasicSection from '../../components/Sections/BasicSection.vue'
import MegaAccordionSection from '../../components/Sections/MegaAccordionSection.vue';
import BatteryDiscount from '../../components/IphoneSections/BatteryDiscount.vue';
import ImageCarousel from '../../components/Carousel/ImageCarousel.vue';
export default {
  components: { SubHeader, BasicSection, MegaAccordionSection, BatteryDiscount, ImageCarousel },
  data() {
    return {
        headline: 'LOREM IPSUM',
        paragraph1: 'Az alaplap felületére forrasztott áramkörök fizikai hatásra, extrém hő hatására vagy túlfeszültség következtében (hibás, vagy nem jó minőségű utángyártott töltő) meghibásodhatnak, elengedhetnek, amelynek következtében eltérő hibákat produkálhat készülékünk.',
        paragraph2: 'Az alaplapi meghibásodások szinte minden esetben megjavíthatóak alaplap csere nélkül is, de ehhez professzionális géppark, igényes munka és több éves tapasztalat szükséges!',
        img: '../../src/assets/images/sections/iphone_battery_section.jpg',
        images: [
            'images/carousel/batterychange/ipBtc_accordion_1.jpg',
            'images/carousel/batterychange/ipBtc_accordion_2.jpg',
            'images/carousel/batterychange/ipBtc_accordion_3.jpg',
            'images/carousel/batterychange/ipBtc_accordion_4.jpg',
        ]
    }
  },
  computed: {
    batteryChangeList() {
        return store.iphoneList.filter(iphone => iphone.batteryChange);
    },
    batteryDiscountList() {
        return store.iphoneList.filter(iphone => iphone.batteryChangeError);
    }
  }
}
</script>

<style>

</style>