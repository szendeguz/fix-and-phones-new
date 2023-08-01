<template>
  <navbar></navbar>
  <RouterView />
  <page-footer></page-footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navigation/Navbar.vue'
import PageFooter from './components/Navigation/PageFooter.vue'
export default {
  components: { Navbar, PageFooter }
}
</script>

<style >
</style>
