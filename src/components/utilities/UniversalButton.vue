<template>
<router-link
  v-if="this.arrowButton"
  class="group relative w-full sm:w-auto inline-flex items-center justify-center overflow-hidden rounded px-10 py-3 focus:outline-none focus:ring"
  :class="this.buttonStyle"
  :to="this.destination"
>
  <span class="absolute -end-full transition-all group-hover:end-4">
    <svg
      class="h-5 w-5 rtl:rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </span>
  <span class="text-sm font-medium transition-all group-hover:me-4">
    {{ this.text }}
  </span>
</router-link>
<routerlink
  v-if="this.basicButton"
  class="inline-block rounded px-12 py-3 text-sm font-medium cursor-pointer transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring"
  :class="this.buttonStyle"
  :to="this.destination"
>
  {{ this.text }}
</routerlink>
</template>

<script>
export default {
  data() {
    return {
      buttonStyle: '',
    }
  },
  props: {
    arrowButton: false,
    basicButton: false,
    accentBackground: false,
    whiteBackground: false,
    transparentBackground: false,
    destination: '',
    text: '',
  },
  mounted() {
    this.getButtonStyle();
  },
  methods: {
    getButtonStyle() {
      switch (true) {
        case this.accentBackground:
          this.buttonStyle = 'bg-accent text-white';
          break;
        case this.whiteBackground:
          this.buttonStyle = 'bg-white text-accent'
          break;
        case this.transparentBackground:
          this.buttonStyle = 'bg-transparent text-white border border-white'
        default:
          break;
      }
    }
  }

}
</script>

<style>

</style>