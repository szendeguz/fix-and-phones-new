<template>
  <sub-header headline="apple watch kijelző javítás"></sub-header>
  <basic-section :headline="headline" :paragraph1="paragraph1" :paragraph2="paragraph2" :image="img"></basic-section>
  <mega-accordion-section contentType="watchScreenChange" :priceList="watchScreenList"></mega-accordion-section>
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
        headline: 'Kijelző felújítás',
        paragraph1: 'Az alaplap felületére forrasztott áramkörök fizikai hatásra, extrém hő hatására vagy túlfeszültség következtében (hibás, vagy nem jó minőségű utángyártott töltő) meghibásodhatnak, elengedhetnek, amelynek következtében eltérő hibákat produkálhat készülékünk.',
        paragraph2: 'Az alaplapi meghibásodások szinte minden esetben megjavíthatóak alaplap csere nélkül is, de ehhez professzionális géppark, igényes munka és több éves tapasztalat szükséges!',
        img: '/fix-and-phones-new/images/sections/watch_screen_section.jpg',
        images: [
        'images/carousel/watchscreenchange/watch_accordion_1.jpg',
        'images/carousel/watchscreenchange/watch_accordion_2.jpg',
        'images/carousel/watchscreenchange/watch_accordion_3.jpg',
        ]
    }
  },
  computed: {
    watchScreenList() {
        return store.applewatchList.filter(watch => watch.screenRenewal);
    }
  }
}
</script>

<style>

</style>