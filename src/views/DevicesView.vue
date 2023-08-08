<template>
  <sub-header headline="Készülékek"></sub-header>
  <devices-section></devices-section>
  <device-picker></device-picker>
</template>

<script>
import DevicesSection from '../components/Devices/DevicesSection.vue'
import SubHeader from '../components/Headers/SubHeader.vue'
import DevicePicker from '../components/Devices/DevicePicker.vue';
export default {
  components: { SubHeader, DevicesSection, DevicePicker },
}
</script>

<style>

</style>