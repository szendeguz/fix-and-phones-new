<template>
  <section>
  <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div class="relative z-10 lg:py-16">
        <div class="relative h-64 sm:h-80 lg:h-full">
          <img
            alt="House"
            src="../../assets/images/sections/about_us.jpg"
            class="absolute inset-0 h-full w-full object-cover rounded"
          />
        </div>
      </div>

      <div class="relative flex items-center bg-white rounded">
        <span
          class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-white rounded"
        ></span>

        <div class="p-8 sm:p-16 lg:p-24">
          <h2 class="text-2xl font-bold sm:text-3xl text-background">
            GARANCIÁN TÚLI SZAKSZERVIZ
          </h2>
          <h2 class="text-xl font-semibold sm:text-2xl text-background mt-2">
            iPhone, iPad és Apple Watch szerviz
          </h2>
          <p class="mt-4 text-light">
            Az iPhone 4 megjelenésekor kezdett el foglalkoztatni minket a szerviz szakma. Már akkoriban is nagy igény keletkezett ezen készülékek szakszerű, igényes javítására, így első műhelyünk nyitása nem is váratott sokáig magára. 
          </p>
          <p class="mt-4 text-light">
            Moduláris csere mellett elsők között kezdtünk bele a kijelző felújítás világába, melyet több éves munkánk során tökéletesítettünk. Ekkor már több vállakozással partneri viszonyban álltunk, akik utángyártott helyett gyári kijelzőt akartak ügyfeleik készülékébe szerelni.
          </p>
          <p class="mt-4 text-light">
            Nem sokkal később, mikor elkezdtek megjelenni az első alaplapi problémák, próbáltunk minél hamarabb reagálni a problémára és megoldást nyújtani. A hosszú és kitartó munka meghozta a gyümölcsét, kimagasló javítási százalékkal dolgozva.
          </p>
          <p class="mt-4 text-light">
            Az évek során a felkészülésnek és a tanulásnak köszönhetően hatalmas tapasztalattal biztosítunk teljes körű szervizelést alaplapi problémáktól, moduláris cserén át, szoftveres karbantartásig. Sikerült országszerte kialakítani üzleti kapcsolatokat, melynek köszönhetően külső szervizként üzemelünk cégeknek, vállakozásoknak.
          </p>
          <p class="mt-4 text-light">
            Jelenleg Budapesten és Szegeden tartunk fenn műhelyet. Nem csak partnereink, de magánszemélyek is régóta fordulnak hozzánk bizalommal és távoznak elégedetten!
          </p>
          <div class="mt-8">
            <universal-button :accentBackground="true" :arrowButton="true" text="Kapcsolat" destination="/kapcsolat"></universal-button>
          </div>
        </div>
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
