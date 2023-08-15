<template>
  <section class="bg-background text-white">
  <div
    class="mx-auto max-w-screen-xl lg:flex flex-col flex justify-center items-center px-4 sm:py-32 py-16 lg:items-center"
  >
    <div class="decorator mx-auto min-w-[80%] text-center py-32 rounded">
      <h1
        class="text-white bg-clip-text text-3xl font-extrabold sm:text-5xl"
      >
        Válaszd ki a készüléked.

        <span class="sm:block"> Tekintsd meg javításainkat. </span>
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        A különböző meghibásodásokhoz tartalmazó árlistánkat megtalálod a megfelelő készülék kiválasztása után.
      </p>
    </div>
    <div class="mt-8 flex flex-wrap justify-center gap-4">
        <universal-button :arrowButton="true" :transparentBackground="true" text="Készülékek" destination="/keszulekek"></universal-button>
        <universal-button :arrowButton="true" :transparentBackground="true" text="Kapcsolat" destination="/kapcsolat"></universal-button>
      </div>
  </div>
</section>
</template>

<script>
import UniversalButton from '../utilities/UniversalButton.vue'
export default {
  components: { UniversalButton },

}
</script>

<style scoped>
.decorator {
    background: linear-gradient(-45deg, #00bdf7, #40a5f2, #6d8ae2, #8f6cc6);
    background-size: 400% 400%;
	animation: gradient 12s ease-in infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
</style>