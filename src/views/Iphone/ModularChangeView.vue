<template>
  <sub-header headline="iphone moduláris csere"></sub-header>
  <basic-section :headline="headline" :paragraph1="paragraph1" :paragraph2="paragraph2" :image="img"></basic-section>
  <modular-accordion></modular-accordion>
  <basic-section :withSlot="true" :image="softwareUpdateImg">
    <div class="text-white trlg:w-1/2 tr:w-3/5 py-8 text-center">
        <h2 class="text-accent lg:text-4xl md:text-3xl text-2xl mb-1">Szoftver frissítés</h2>
        <p class="text-xl font-semibold">3.500 Ft</p>
    </div>
  </basic-section>
  <basic-section :withSlot="true" :reverseOrder="true" :whiteTheme="true" :image="dataSavingImg">
    <div class="text-background trlg:w-1/2 tr:w-3/5 py-8 text-center">
        <h2 class="text-accent lg:text-4xl md:text-3xl text-2xl mb-1">Másolás, visszaállítás</h2>
        <p class="text-xl font-semibold">3.500 Ft</p>
    </div>
  </basic-section>
  <contact-cta></contact-cta>
  <logo-decorator></logo-decorator>
</template>

<script>
import SubHeader from '../../components/Headers/SubHeader.vue'
import BasicSection from '../../components/Sections/BasicSection.vue'
import ModularAccordion from '../../components/Accordions/ModularAccordion.vue'
import ContactCta from '../../components/Contact/ContactCta.vue'
import LogoDecorator from '../../components/utilities/LogoDecorator.vue'
export default {
  components: { SubHeader, BasicSection, ModularAccordion, ContactCta, LogoDecorator },
  data() {
    return {
        headline: 'Mik azok a moduláris hibák?',
        paragraph1: 'Az alaplap felületére forrasztott áramkörök fizikai hatásra, extrém hő hatására vagy túlfeszültség következtében (hibás, vagy nem jó minőségű utángyártott töltő) meghibásodhatnak, elengedhetnek, amelynek következtében eltérő hibákat produkálhat készülékünk.',
        paragraph2: 'Az alaplapi meghibásodások szinte minden esetben megjavíthatóak alaplap csere nélkül is, de ehhez professzionális géppark, igényes munka és több éves tapasztalat szükséges!',
        img: '../src/assets/images/sections/iphone_battery_section.jpg',
        softwareUpdateImg: '../src/assets/images/sections/software_update_section.jpg',
        dataSavingImg: '../src/assets/images/sections/data_saving_section.jpg',
    }
  }
}
</script>

<style>

</style>