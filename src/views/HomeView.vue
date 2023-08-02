<template>
  <home-hero></home-hero>
  <service-list></service-list>
  <about-us></about-us>
  <devices></devices>
  <testimonials></testimonials>
  <contact-us></contact-us>
</template>

<script>
import ContactUs from '../components/Contact/ContactUs.vue'
import HomeHero from '../components/Headers/HomeHero.vue'
import AboutUs from '../components/Homepage/AboutUs.vue'
import Devices from '../components/Homepage/Devices.vue'
import ServiceList from '../components/Homepage/ServiceList.vue'
import Testimonials from '../components/Homepage/Testimonials.vue'
export default {
  components: { HomeHero, ServiceList, AboutUs, Devices, Testimonials, ServiceList, ContactUs },

}
</script>

<style>

</style>