<template>
    <div class="bg-lighter flex flex-col justify-center items-center p-8 mt-12">
        <three-tab @tabclick="changeTab" :buttons="this.tabButtons" class="-mt-14"></three-tab>
        <div 
        v-if="this.activeTab === 'iPhone'"
        class="grid tr:grid-cols-3 md:grid-cols-2 p-8"
        >
            <mega-accordion
            @accordionclick="changeActive"
            v-for="product, index in this.iphoneList" 
            :key="index" 
            :product="this.createProduct(product, index)" 
            contentType="baseList"
            />
        </div>
        <div 
        v-if="this.activeTab === 'Apple Watch'"
        class="grid tr:grid-cols-3 md:grid-cols-2 p-8"
        >
            <mega-accordion 
            @accordionclick="changeActive"
            v-for="product, index in this.applewatchList" 
            :key="index" 
            :product="this.createProduct(product, index)" 
            contentType="baseList"
            />
        </div>
    </div>
</template>

<script>
import { store } from '../../store.js';
import MegaAccordion from '../Accordions/MegaAccordion.vue';
import ThreeTab from '../utilities/ThreeTab.vue'
export default {
  components: { ThreeTab, MegaAccordion },
  data() {
    return {
        tabButtons: [
            {
                text: 'iPhone',
                active: true,
                id: 0,
            },
            {
                text: 'Apple Watch',
                active: false,
                id: 1,
            },
            {
                text: 'iPad',
                active: false,
                id: 2,
            }
        ],
        iphoneList: [],
        applewatchList: [],
        activeTab: 'iPhone',
    }
  },
  created() {
    this.iphoneList = store.iphoneList;
    this.applewatchList = store.applewatchList;
  },
  methods: {
    changeTab(event) {
        this.tabButtons.forEach(button => button.active = false);

        const activeTab = this.tabButtons.find(button => button.id === event);
        activeTab.active = true;

        this.activeTab = activeTab.text;
    },
    createProduct(product, index) {
      product.id = index;

      return product;
    },
    changeActive(product) {
        if (product.active) {
            product.active = false;
            return;
        }

        this.iphoneList.forEach(iphone => iphone.active = false);
        this.applewatchList.forEach(watch => watch.active = false);

        if (product.type === 'iphone') {
            this.iphoneList.find(iphone => iphone.id === product.id).active = true;
        } else if (product.type === 'watch') {
            this.applewatchList.find(watch => watch.id === product.id).active = true;
        }
    }
  },
}
</script>

<style>

</style>