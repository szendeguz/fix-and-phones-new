<template>
    <section class="text-white">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-4xl text-center">
                <h2 class="text-2xl font-bold  md:text-3xl">
                    Tudtad?
                </h2>
                <p class="text-gray-300 mt-4">
                    Bizonyos készülékek hibaüzenetet, adnak ha cserélik az akkumulátort, ebben az esetben viszont tovább nem lehet követni a kapacitást és szerviz módot ír a beállításokban. Ezeket a készülékeket kérheted olcsóbban, a fenti feltételek mellett.
                </p>
            </div>
            <div class="flex flex-col items-center justify-between p-3 bg-white my-4 rounded shadow-xl tr:w-[55%] sm:w-[75%] md:w-[85%] mx-auto">
                <div class="mt-2 text-lg items-center text-background mb-2">
                    <div v-for="device in discountList" :key="device.name" class="ml-3">
                        <h3 class="mr-2 mb-3 text-xl text-background">{{ device.name }}:&nbsp;<span class="font-semibold">{{ device.batteryChangeError }} Ft</span></h3>
                    </div>
                    <div class="flex md:justify-end justify-center sm:mr-12 mt-6">
                        <universal-button :basicButton="true" destination="/kapcsolat" text="Kapcsolat" :accentBackground="true"></universal-button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import UniversalButton from '../utilities/UniversalButton.vue';
export default {
    components: { UniversalButton },
    props: {
        discountList: [],
    }
}
</script>

<style>

</style>