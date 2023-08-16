<template>
  <sub-header headline="iphone kijelző javítás"></sub-header>
  <basic-section :withSlot="true" :image="img">
    <h2 class="text-3xl font-bold sm:text-4xl">Milyen javítási lehetőség választható?</h2>
    <p class="mt-4 text-white text-lg tr:text-xl">
        Ha már megtörtént a baj, nincs mit tenni, javítani célszerű a kijelzőt. Két opció áll rendelkezésre:
    </p>
    <div class="my-4">
        <h1 class="underline text-lg tr:text-xl">
        1. Felújítás
        </h1>
        <p class="tr:text-lg">
        Ha csak az üveg tört meg, vagy egyes típusoknál nem érzékel megfelelően illetve egyáltalán nem és hibátlanul ad képet a kijelződ, akkor a felújításra van szükség!
        </p>
    </div>
    <div class="my-4">
        <h1 class="underline text-lg tr:text-xl">
        2. Csere
        </h1>
        <p class="tr:text-lg">
        Ha csak az üveg tört meg, vagy egyes típusoknál nem érzékel megfelelően illetve egyáltalán nem és hibátlanul ad képet a kijelződ, akkor a felújításra van szükség! 
        </p>
    </div>
  </basic-section>
  <mega-accordion-section contentType="iphoneScreenChange" :priceList="screenChangeList"></mega-accordion-section>
  <screen-types></screen-types>
  <contact-cta></contact-cta>
  <image-carousel :images="images"></image-carousel>
</template>

<script>
import { store } from '../../store.js';
import SubHeader from '../../components/Headers/SubHeader.vue'
import BasicSection from '../../components/Sections/BasicSection.vue'
import MegaAccordionSection from '../../components/Sections/MegaAccordionSection.vue'
import ScreenTypes from '../../components/IphoneSections/ScreenTypes.vue';
import ContactCta from '../../components/Contact/ContactCta.vue';
import ImageCarousel from '../../components/Carousel/ImageCarousel.vue';
export default {
  components: { BasicSection, SubHeader, MegaAccordionSection, ScreenTypes, ContactCta, ImageCarousel },
  data ()  {
    return {
        img: '/fix-and-phones-new/images/sections/iphone_screen_change_section.jpeg',
        images: [
        'images/carousel/screenchange/ipSn_accordion_1.jpg',
        'images/carousel/screenchange/ipSn_accordion_2.jpg',
        'images/carousel/screenchange/ipSn_accordion_3.jpg',
        'images/carousel/screenchange/ipSn_accordion_4.jpg',
        'images/carousel/screenchange/ipSn_accordion_5.jpg',
        'images/carousel/screenchange/ipSn_accordion_6.jpg',
        'images/carousel/screenchange/ipSn_accordion_7.jpg',
        'images/carousel/screenchange/ipSn_accordion_8.jpg',
        'images/carousel/screenchange/ipSn_accordion_9.jpg',
        'images/carousel/screenchange/ipSn_accordion_10.jpg',
        'images/carousel/screenchange/ipSn_accordion_11.jpg',
        ]
    }
  },
  computed: {
    screenChangeList() {
        return store.iphoneList.filter(iphone => iphone.screenChange || iphone.screenRenewal);
    }
  }
}
</script>

<style>

</style>