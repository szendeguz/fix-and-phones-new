<template>
  <sub-header headline="iPhone Hátlap Csere"></sub-header>
  <basic-section 
  :headline="headline" :paragraph1="paragraph1" :paragraph2="paragraph2" :image="img"
  :withScrollButton="true" buttonText="Árlista"
  :whiteTheme="false"
  />
  <mega-accordion-section contentType="iphoneBackChange" :priceList="backChangeList"></mega-accordion-section>
  <contact-cta></contact-cta>
  <image-carousel :images="images"></image-carousel>
</template>

<script>
import { store } from '../../store.js';
import SubHeader from '../../components/Headers/SubHeader.vue'
import BasicSection from '../../components/Sections/BasicSection.vue'
import MegaAccordionSection from '../../components/Sections/MegaAccordionSection.vue'
import ContactCta from '../../components/Contact/ContactCta.vue';
import ImageCarousel from '../../components/Carousel/ImageCarousel.vue';
export default {
  components: { SubHeader, BasicSection, MegaAccordionSection, ContactCta, ImageCarousel },
  data() {
    return {
        headline: 'Lorem Ipsum',
        paragraph1: 'Az alaplap felületére forrasztott áramkörök fizikai hatásra, extrém hő hatására vagy túlfeszültség következtében (hibás, vagy nem jó minőségű utángyártott töltő) meghibásodhatnak, elengedhetnek, amelynek következtében eltérő hibákat produkálhat készülékünk.',
        paragraph2: 'Az alaplapi meghibásodások szinte minden esetben megjavíthatóak alaplap csere nélkül is, de ehhez professzionális géppark, igényes munka és több éves tapasztalat szükséges!',
        img: '../src/assets/images/sections/back_change_section.jpg',
        images: [
        'images/carousel/backchange/ipBc_accordion_1.jpg',
        'images/carousel/backchange/ipBc_accordion_2.jpg',
        'images/carousel/backchange/ipBc_accordion_3.jpg',
        'images/carousel/backchange/ipBc_accordion_4.jpg',
        'images/carousel/backchange/ipBc_accordion_5.jpg',
        'images/carousel/backchange/ipBc_accordion_6.jpg',
        'images/carousel/backchange/ipBc_accordion_7.jpg',
        'images/carousel/backchange/ipBc_accordion_8.jpg',
        ]
    }
  },
  computed: {
    backChangeList() {
        return store.iphoneList.filter(iphone => iphone.backChange);
    }
  }
}
</script>

<style>

</style>