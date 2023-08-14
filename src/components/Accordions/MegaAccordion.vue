<template>
  <!--HEADER-->
  <div @click.prevent="$emit('accordionclick', productData)">
        <div class="tr:mx-12 md:mx-8 mx-4">
            <div class="tab__header">
                <a href="#" class="p-4 no-underline text-white border-b-2 border-white flex justify-between">
                    <strong>{{ productData.name }}</strong>
                    <span class="down-Arrow" v-show="!productData.active">&#9660;</span>
                    <span class="up-Arrow" v-show="productData.active">&#9650;</span>
                </a>
            </div>
        </div>
    </div>
    <!--BODY-->
    <Transition mode="out-in" name="slide-up">
        <div v-if="productData.active" :class="rowStart" class="sm:col-span-2 tr:col-span-3 row-span-1 p-3 bg-realwhite my-4 rounded shadow-xl tr:w-[75%] mx-auto">
            <template v-if="contentType === 'baseList'">
                <h4 class="mx-auto text-center mb-8 text-gray-900 text-xl font-semibold underline decoration-accentColor">{{ productData.name }}</h4>
                <div class="sm:grid sm:grid-cols-2 flex flex-col items-center justify-between">
                    <div>
                        <img :src="productData.image">
                    </div>
                    <div v-if="productData.type === 'iphone'" class="block p-3">
                        <router-link to="/iphone-alaplap" class="mt-2 text-lg cursor-pointer flex flex-row items-center text-gray-900 mb-2
                        accordionHover">
                            <i class="fa-solid fa-microchip mr-2 text-xl text-gray-900"></i>Alaplap javítás
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </router-link>
                        <router-link to="/iphone-kijelzo-csere" class="mt-2 text-lg cursor-pointer flex flex-row items-center text-gray-900 mb-2
                        accordionHover">
                            <i class="fa-solid fa-mobile-screen-button mr-2 text-xl text-gray-900"></i> Kijelző csere
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </router-link>
                        <router-link to="/iphone-hatlap-csere" class="mt-2 text-lg cursor-pointer flex flex-row items-center text-gray-900 mb-2
                        accordionHover">
                            <i class="fa-solid fa-laptop-medical mr-2 text-xl text-gray-900"></i> Hátlap csere
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </router-link>
                        <router-link to="/iphone-akkumulator-csere" class="mt-2 text-lg cursor-pointer flex flex-row items-center text-gray-900 mb-2
                        accordionHover">
                            <i class="fa-solid fa-charging-station mr-2 text-xl text-gray-900"></i> Akkumulátor csere
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </router-link>
                        <router-link to="/iphone-modularis-csere" class="mt-2 text-lg cursor-pointer flex flex-row items-center text-gray-900 mb-2
                        accordionHover">
                            <i class="fa-solid fa-puzzle-piece mr-2 text-xl text-gray-900"></i> Moduláris csere
                            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </router-link>
                    </div>
                    <div v-else-if="productData.type === 'watch'">
                        <div class="text-gray-900 mb-4">
                            <div class="mb-2 text-lg cursor-pointer flex flex-row items-center
                            accordionHover">
                                <i class="fa-solid fa-mobile-screen mr-2 text-xl text-gray-900"></i> Kijelző felújítás:&nbsp;
                                <p class="text-xl font-semibold">{{ productData.screenRenewal }} Ft</p>
                            </div>
                            <div class="flex justify-end mr-12">
                                <router-link to="/watch-kijelzo" class="flex flex-row justify-center px-3 py-2 text-sm font-medium text-center shadow-lg text-realwhite border-accent border bg-accent rounded hover:bg-realwhite hover:text-accent focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    Bővebben
                                </router-link>
                            </div>
                        </div>
                        <div class="text-gray-900 mb-4">
                            <div class="mb-2 text-lg cursor-pointer flex flex-row items-center
                            accordionHover">
                                <i class="fa-solid fa-charging-station mr-2 text-xl text-gray-900"></i>  Akkumulátor csere:&nbsp;
                                <p class="text-xl font-semibold">{{ productData.batteryChange }} Ft</p>
                            </div>
                            <div class="flex justify-end mr-12">
                                <router-link to="/watch-akkumulator" class="flex flex-row justify-center px-3 py-2 text-sm font-medium text-center shadow-lg text-realwhite border-accent border bg-accent rounded hover:bg-realwhite hover:text-accent focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    Bővebben
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else-if="contentType === 'ipMotherboard'">
                <div class="flex flex-col items-center justify-between">
                    <div class="mt-2 text-lg items-center text-gray-900 mb-2">
                        <div v-for="problem in productData.problems" :key="problem.name" class="ml-3">
                            <h3 class="mr-2 mb-3 text-xl text-gray-900">{{ problem.name }}&nbsp;<span class="text-gray-700">{{ problem.desc }}</span>:&nbsp;<br><span class="font-semibold">{{ problem.price }} Ft</span></h3>
                        </div>
                        <div class="flex sm:justify-end sm:mr-12 mt-2 sm:mt-0">
                            <universal-button :arrowButton="true" :accentBackground="true" text="Kapcsolat" destination="/"/>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else-if="contentType === 'iphoneScreenChange'">
                <div class="flex flex-col items-center justify-between">
                    <div class="mt-2 text-lg items-center text-gray-900 mb-2">
                        <div class="ml-3">
                            <h3 class="mr-2 mb-3 text-xl text-gray-900">Kijelző felújítás:&nbsp;<span class="font-semibold">{{ productData.screenRenewal }} Ft</span></h3>
                        </div>
                        <div class="ml-3">
                            <h3 class="mr-2 mb-3 text-xl text-gray-900">Kijelző csere:&nbsp;<span class="font-semibold">{{ productData.screenChange }} Ft</span></h3>
                        </div>
                        <div class="flex sm:justify-end sm:mr-12 mt-2 sm:mt-0">
                            <universal-button :arrowButton="true" :accentBackground="true" text="Kapcsolat" destination="/"/>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="sm:grid sm:grid-cols-2 flex flex-col items-center justify-between">
                    <div v-if="contentType === 'iphoneBackChange'" class="mt-2 text-lg cursor-pointer flex flex-row items-center text-gray-900 mb-2 p-2 accordionHover">
                        <h3 class="mr-2 text-xl text-gray-900">Hátlap csere:&nbsp;</h3>
                        <p class="text-xl font-semibold">{{ productData.backChange }}</p> 
                    </div>
                    <div v-else-if="contentType === 'watchScreenChange'" class="mt-2 text-lg cursor-pointer flex flex-row items-center text-gray-900 mb-2 accordionHover">
                        <h3 class="mr-2 text-xl text-gray-900">Kijelző felújítás:&nbsp;</h3>
                        <p class="text-xl font-semibold">{{ productData.screenRenewal }} Ft</p>
                    </div>
                    <div v-else-if="contentType === 'iphoneBatteryChange' || contentType === 'watchBatteryChange'" class="mt-2 text-lg cursor-pointer flex flex-row items-center text-gray-900 mb-2 p-2 accordionHover">
                        <h3 class="mr-2 text-xl text-gray-900">Akkumulátor csere:&nbsp;</h3>
                        <p class="text-xl font-semibold">{{ productData.batteryChange }}</p> 
                    </div>
                    <div class="flex sm:justify-end sm:mr-12 mt-2 sm:mt-0">
                        <universal-button :arrowButton="true" :accentBackground="true" text="Rendelés" destination="/"/>
                    </div>
                </div>
            </template>
        </div>
    </Transition>
</template>

<script>
import UniversalButton from '../utilities/UniversalButton.vue';
export default {
  components: { UniversalButton },
    props: {
        product: Object,
        contentType: String,
    },
    emits: ["accordionclick"],
    data() {
        return {
            productData: this.product,
        }
    },
    computed: {
        windowWidth() {
            const currentWidth = window.innerWidth;
            if (currentWidth > '960') {
                 return 'large';
            } else if (currentWidth > '640') {
                return 'medium';
            } else { 
                return 'small';
            }
        },
        rowStart() {
            const currentWidth = this.windowWidth;
            console.log(currentWidth)

            if (currentWidth === 'large') {
                if (this.productData.id <= 3) return 'row-start-2';
                else if (this.productData.id > 3 && this.productData.id <= 6) return 'row-start-3';
                else if (this.productData.id > 6 && this.productData.id <= 9) return 'row-start-4';
                else if (this.productData.id > 9 && this.productData.id <= 12) return 'row-start-5';
                else if (this.productData.id > 12 && this.productData.id <= 15) return 'row-start-6';
                else if (this.productData.id > 15 && this.productData.id <= 18) return 'row-start-7';
                else if (this.productData.id > 18 && this.productData.id <= 21) return 'row-start-8';
                else return 'row-start-9';
            } else if (currentWidth === 'medium') {
                if (this.productData.id <= 2) return 'row-start-2';
                if (this.productData.id > 2 && this.productData.id <= 4) return 'row-start-3';
                if (this.productData.id > 4 && this.productData.id <= 6) return 'row-start-4';
                if (this.productData.id > 6 && this.productData.id <= 8) return 'row-start-5';
                if (this.productData.id > 8 && this.productData.id <= 10) return 'row-start-6';
                if (this.productData.id > 10 && this.productData.id <= 12) return 'row-start-7';
                if (this.productData.id > 12 && this.productData.id <= 14) return 'row-start-8';
                if (this.productData.id > 14 && this.productData.id <= 16) return 'row-start-9';
                if (this.productData.id > 16 && this.productData.id <= 18) return 'row-start-10';
                if (this.productData.id > 18 && this.productData.id <= 20) return 'row-start-11';
                if (this.productData.id > 20 && this.productData.id <= 22) return 'row-start-12';
                else return 'row-start-13';
            } else {
                return '';
            }
        }
    },
}
</script>

<style>
.slide-up-enter-active {
  transition: all 0.25s ease-out;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
</style>