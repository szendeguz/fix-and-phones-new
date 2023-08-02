<template>
  <section class="bg-white py-12">
  <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div class="bg-light p-8 md:p-12 lg:px-16 lg:py-24 rounded shadow">
        <div class="mx-auto max-w-xl ">
          <h2 class="text-2xl font-bold text-white md:text-3xl">
            Rólunk
          </h2>
          <hr class="mt-3 w-[50%] border border-1 border-gray-400">
          <p class="text-white/90 mt-6">
            Az iPhone 4 megjelenésekor kezdett el foglalkoztatni minket a szerviz szakma. Az évek során a felkészülésnek és a tanulásnak köszönhetően hatalmas tapasztalattal biztosítunk teljes körű szervizelést alaplapi problémáktól, moduláris cserén át, szoftveres karbantartásig.
          </p>
          <p class="text-white/90 mt-3">
            Jelenleg Budapesten és Szegeden tartunk fenn műhelyet. Nem csak partnereink, de magánszemélyek is régóta fordulnak hozzánk bizalommal és távoznak elégedetten!
          </p>
          <div class="mt-4 md:mt-8">
           <universal-button :transparentBackground="true" :basicButton="true" text="Bővebben" destination="/"></universal-button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 lg:grid-cols-2">
        <img
          alt="Student"
          src="../../assets/images/sections/apple_watch_section.jpg"
          class="h-40 w-full object-cover sm:h-56 lg:h-full rounded"
        />

        <img
          alt="Student"
          src="../../assets/images/sections/iphone_section.jpg"
          class="h-40 w-full object-cover sm:h-56 lg:h-full rounded"
        />
      </div>
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

<style>

</style>