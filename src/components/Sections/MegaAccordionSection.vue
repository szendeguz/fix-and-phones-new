<template>
  <div class="bg-lighter flex flex-col justify-center items-center p-8 mt-24" id="megaaccordion">
    <div class="pt-6 -mt-20 mb-6">
        <h2 class="rounded text-2xl bg-gray-100 border-gray-300 text-gray-900 p-2">Árlistánk típusonként</h2>
    </div>
    <div class="grid tr:grid-cols-3 md:grid-cols-2 p-2">
        <mega-accordion :contentType="contentType" v-for="item, index in priceList" :key="item" :product="createProduct(item, index)"  @accordionclick="toggleActive"></mega-accordion>
    </div>
  </div>
</template>

<script>
import MegaAccordion from '../Accordions/MegaAccordion.vue';
export default {
    components: { MegaAccordion },
    props: {
        contentType: '',
        priceList: {},
    },
    methods: {
    createProduct(product, index) {
      product.id = index;

      return product;
    },
    toggleActive(item) {
        if (item.active) {
            item.active = false;
            return;
        }

        this.priceList.forEach(item => item.active = false);
        item.active = true;
    },
  }  
}
</script>

<style>

</style>