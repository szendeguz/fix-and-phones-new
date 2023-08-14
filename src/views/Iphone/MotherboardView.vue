<template>
  <sub-header headline="iPhone Alaplap Javítás"></sub-header>
  <basic-section :headline="headline" :paragraph1="paragraph1" :paragraph2="paragraph2" :image="img"
  :withButton="true" buttonText="Árlista" destination="/"
  :whiteTheme="false"
  />
  <basic-section :image="img2"
  :reverseOrder="true"  :whiteTheme="true" :withSlot="true"
  >
    <div class="text-background">
        <h2 class="text-3xl font-bold sm:text-4xl mb-8">Leggyakoribb hibák</h2>
        <simple-accordion :content="accordionContent"></simple-accordion> 
    </div>
  </basic-section>
  <mega-accordion-section contentType="ipMotherboard" :priceList="motherboardPriceList" ></mega-accordion-section>
  <contact-cta></contact-cta>
  <image-carousel :images="carouselImages"></image-carousel>
</template>

<script>
import { store } from '../../store.js';
import SimpleAccordion from '../../components/Accordions/SimpleAccordion.vue'
import SubHeader from '../../components/Headers/SubHeader.vue'
import BasicSection from '../../components/Sections/BasicSection.vue'
import MegaAccordionSection from '../../components/Sections/MegaAccordionSection.vue'
import ContactCta from '../../components/Contact/ContactCta.vue';
import ImageCarousel from '../../components/Carousel/ImageCarousel.vue';
export default {
    components: { SubHeader, BasicSection, SimpleAccordion, MegaAccordionSection, ContactCta, ImageCarousel },
    data() {
        return {
            motherboardPriceList: store.iphoneMotherboardList,
            headline: 'Az alaplai hibákról',
            paragraph1: 'Az alaplap felületére forrasztott áramkörök fizikai hatásra, extrém hő hatására vagy túlfeszültség következtében (hibás, vagy nem jó minőségű utángyártott töltő) meghibásodhatnak, elengedhetnek, amelynek következtében eltérő hibákat produkálhat készülékünk.',
            paragraph2: 'Az alaplapi meghibásodások szinte minden esetben megjavíthatóak alaplap csere nélkül is, de ehhez professzionális géppark, igényes munka és több éves tapasztalat szükséges!',
            img: '../src/assets/images/sections/motherboard_desc_1.jpg',
            img2: '../src/assets/images/sections/motherboard_desc_2.jpg',
            accordionContent: [
            {
                head: 'Töltésvezérlő IC', 
                paragraph1: 'Maga a Töltésvezérlő IC felelős az áramfelvételért, az akkumulátor töltésre kell gondolni. Az esetek nagy részében fizikai kárral is járhat a hiba megléte, pl. akkumulátor felpúposodik. Sokféle módon ölthet formát: gyorsabban merül, vagy épp egyáltalán nem tölt a készülék. Ha utángyártott kábelt használunk, előfordulhat, hogy a kábel egyik felével tölt, de a másik felével már egyáltalán nem. Eredeti gyári kábellel nem is tölti a készüléket.',
                paragraph2: 'Leggyakoribb modellek: iPhone 5s, iPhone 6s, iPhone SE (1.generáció)',
                active: false,
            },
            {
                head: 'Audio IC', 
                paragraph1: 'A két leggyakoribb jel, ami után szinte biztosra lehet venni a problémát: nem akar hangot rögzíteni, illetve lejátszani vagy épp telefonálás során a kihangosításra szolgáló gomb színe teljesen szürke lesz.',
                paragraph2: 'Leggyakoribb modellek: iPhone 7, iPhone 7 Plus',
                active: false,
            },
            {
                head: 'Touch IC', 
                paragraph1: 'Ezt a fajta problémát nehéz házilag kideríteni, mivel sokszor a kijelző meghibásodására gondolnak. A kijelző érintése megszűnik, hiába koppintjuk bárhova ujjunkat. ',
                paragraph2: 'Leggyakoribb modell: iPhone 6 Plus',
                active: false,
            },
            {
                head: 'Baseband Chip', 
                paragraph1: 'Legtöbbször a probléma csak egy frissítés, vagy visszaállítás után jön elő, de előfordulhat, hogy egyszer csak nem érzékeli a Sim kártyádat a készüléked és nem áll fel hálózatra. Ha a telefon információi közül eltűnt az IMEI számod (egyedi azonosítója a készüléknek), akkor biztosak lehetünk ebben a hibában!',
                paragraph2: 'Leggyakoribb modell: iPhone X',
                active: false,
            },
            {
                head: 'Wi-Fi IC', 
                paragraph1: 'A legkönnyebben beazonosítható hibáról van szó. Ha szeretnénk csatlakozni egy hálózatra, nem jelenik meg egy opció sem és „kiszürkült” a  Wi-Fi kapcsoló, nem is lehet bekapcsolni. Ez a hiba együtt járhat a Bluetooth kapcsolattal is, így javítás esetén mindkettő orvosolva lesz!',
                active: false,
            },
        ],
        carouselImages: [
            'images/carousel/motherboard/mb_accordion_1.jpg',
            'images/carousel/motherboard/mb_accordion_3.jpg',
            'images/carousel/motherboard/mb_accordion_4.jpg',
            'images/carousel/motherboard/mb_accordion_5.jpg'
        ]
        }
    }
}
</script>

<style>

</style>