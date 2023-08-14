<template>
  <carousel class="sm:max-w-[80%] tr:max-w-[60%] mx-auto mb-10 sm:mb-20 mt-5" :autoplay="1500" :pauseAutoplayOnHover="true" :items-to-show="this.windowWidth" :wrapAround="true">
    <slide v-for="image in images" :key="image">
        <img :src="image" class="max-w-[80%] rounded-xl">
    </slide>
    <template #addons>
    <navigation />
    <pagination />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    components: { Carousel, Slide, Pagination, Navigation, },
    props: {
        images: {
            type: [],
            required: true,
        }
    },
    computed: {
        windowWidth() {
            const currentWidth = window.innerWidth;
            if (currentWidth > '1300') {
                 return 3;
            } else if (currentWidth > '900') {
                return 2.5
            } else { 
                return 1.5;
            }
        },
    },
}
</script>

<style>

</style>