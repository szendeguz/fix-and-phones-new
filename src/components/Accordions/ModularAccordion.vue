<template>
   <div class="px-8 p-12 bg-white text-background">
    <h1 class="text-4xl text-center font-semibold mb-8">Árlista hibatípusonként</h1>
    <div class="tr:w-[55%] sm:w-[75%] w-[85%] mx-auto">
        <div v-for="item in accordionContent" :key="item.head" class="mx-auto mb-2">
        <div class="rounded border-2 border-lightest">
            <div class="accordion-header rounded flex justify-between" @click="item.active = !item.active">
                <span class="font-semibold text-lg">{{ item.name }}</span>
                <span v-if="!item.active">&#9660;</span>
                <span v-if="item.active">&#9650;</span>
            </div>
            <Transition mode="out-in" name="slide-up">
                <div v-if="item.active">
                    <div v-for="problem in item.problems" :key="problem" class="odd:bg-gray-300">
                        <p class="mr-2 py-3 px-6 text-xl text-gray-900">{{ problem.name }}:&nbsp;<span class="font-semibold">{{ problem.price }}&nbsp;Ft</span></p>
                    </div>
                    <div class="my-4 flex felx-col justify-center">
                        <universal-button :basicButton="true" :accentBackground="true" text="Bővebben" destination="/"></universal-button>
                    </div>
                </div>
            </Transition>
        </div>
        </div>
    </div>
   </div>
</template>

<script>
import { store } from '../../store.js';
import UniversalButton from '../utilities/UniversalButton.vue';
export default {
  components: { UniversalButton },
  data() {
    return {
        accordionContent: store.iphoneModularList,
    }
  },
}
</script>

<style>

</style>