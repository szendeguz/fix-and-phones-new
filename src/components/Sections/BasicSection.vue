<template>
  <section :class="[this.whiteTheme ? 'bg-white text-background' : '']">
  <div
    class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full"
        :class="[this.reverseOrder ? '' : 'lg:order-last']"
      >
        <img
          alt="Party"
          :src="image"
          class="absolute inset-0 h-full lg:h-max w-full object-fill lg:py-24 rounded-lg"
        />
      </div>
      <div v-if="!withSlot" class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl">{{ this.headline }}</h2>
        <p class="mt-4 text-gray-300">
          {{ this.paragraph1 }}
        </p>
        <p v-if="this.paragraph2" class="mt-4 text-gray-300">
          {{ this.paragraph2 }}
        </p>
        <div class="mt-8">
            <universal-button 
            v-if="withButton"
            :basicButton="true" :accentBackground="true" :text="buttonText" :destination="buttonDestination"
            />
        </div>
      </div>
      <div v-else class="lg:py-24">
        <slot></slot>
      </div>
    </div>
  </div>
</section>

</template>

<script>
import UniversalButton from "../utilities/UniversalButton.vue"

export default {
  components: { UniversalButton },
  props: {
    headline: '',
    paragraph1: '',
    paragraph2: '',
    image: '',
    reverseOrder: false,
    withButton: false,
    buttonText: '',
    buttonDestination: '',
    whiteTheme: false,
    withSlot: false,
  }
}
</script>

<style>

</style>