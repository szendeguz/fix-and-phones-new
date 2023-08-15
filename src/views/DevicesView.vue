<template>
  <sub-header headline="Készülékek"></sub-header>
  <devices-section @scrolling="listenEmit"></devices-section>
  <device-picker :activeButton="activeButton"></device-picker>
</template>

<script>
import DevicesSection from '../components/Devices/DevicesSection.vue'
import SubHeader from '../components/Headers/SubHeader.vue'
import DevicePicker from '../components/Devices/DevicePicker.vue';
export default {
  components: { SubHeader, DevicesSection, DevicePicker },
  data() {
    return {
      activeButton: 'iPhone',
    }
  },
  methods: {
    listenEmit(target) {
      this.scrollToSection();
      this.activeButton = target;
    },
    scrollToSection() {
      const position = document.getElementById('threetab').offsetTop - 150;
      window.scrollTo({top: position});
    }
  }
}
</script>

<style>

</style>