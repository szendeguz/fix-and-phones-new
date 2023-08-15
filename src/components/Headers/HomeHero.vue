<template>
<section
  class="relative hero-bg-img bg-cover bg-center bg-no-repeat sm:h-[80vh]"
>
  <div
    class="absolute inset-0 bg-lighter/75 sm:bg-transparent sm:from-light sm:to-white/25 sm:bg-gradient-to-r"
  ></div>
  <div
    class="relative mx-auto max-w-screen-xl sm:max-h-[80vh] px-4 sm:py-32 py-24 sm:px-6 lg:flex lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5x">
        iPhone, iPad, Apple Watch termékek javítása
        <strong class="block font-extrabold uppercase text-accent mt-1">
          kedvező áron, garanciával
        </strong>
      </h1>
      <p class="mt-8 max-w-lg sm:text-xl/relaxed">
        Gyors, precíz alaplap javítás, kijelző felújítás, moduláris csere és egyéb speciális szervizelés több éves tapasztalattal, professzionális minőségben.
      </p>
      <div class="mt-16 flex flex-wrap gap-4 text-center">
        <universal-button :arrowButton="true" :accentBackground="true" text="Készülékek" destination="/keszulekek"></universal-button>
        <universal-button :arrowButton="true" :whiteBackground="true" text="Kapcsolat" destination="/kapcsolat"></universal-button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import UniversalButton from '../utilities/UniversalButton.vue'
export default {
    components: { UniversalButton }
}
</script>

<style>

</style>
