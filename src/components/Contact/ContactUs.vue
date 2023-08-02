<template>
  <h1 class="text-white text-center text-4xl mb-4 mt-12">Kérdésed van?</h1>
  <p class="text-white text-xl text-center mb-8">Keress minket bátran az alábbi elérhetőségeken</p>
  <div class="container mx-auto my-4 px-4 lg:px-20">
		<div class="w-full p-8 lg:my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded shadow-2xl bg-gray-100">
			<div class="flex">
				<h1 class="font-bold text-gray-900 uppercase lg:text-5xl md:text-4xl text-3xl">Küldj egy <br /> üzenetet</h1>
			</div>
			<div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
				<input class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Vezetéknév*" />
				<input class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text" placeholder="Keresztnév*" />
				<input class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email" placeholder="Email*" />
				<input class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="tel" placeholder="Telefonszám*" />
      </div>
      <div class="my-4">
        <textarea placeholder="Probléma leírása*" class="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
      </div>
      <div class="my-2 w-1/2 lg:w-1/4 lg:mb-0 mb-16">
        <universal-button :basicButton="true" :accentBackground="true" text="KÜLDÉS" destination="/"></universal-button>
      </div>
    </div>
    <div class="w-full lg:-mt-96 lg:w-2/6 -mt-14 px-8 py-12 ml-auto contact-us-bg bg-center bg-cover rounded">
        <div class="flex flex-col text-white">
            <h1 class="font-bold uppercase my-4 lg:text-4xl md:text-3xl text-2xl">Nézz be hozzánk</h1>
            <p class="text-gray-400">
                Előzetes egyeztetés alapján szívesen várunk az üzletünkben. Hívj minket a megadott telefonszámon, a megbeszélt időpontra hozd el a telefonodat és mi neki is látunk a szerelésnek.
            </p>

            <div class="flex my-4 w-2/3 lg:w-1/2">
                <div class="flex flex-col">
                    <i class="fas fa-map-marker-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl">Üzlet</h2>
              <p class="text-gray-400">Kövér Lajos utca 22,<br>1149 Budapest</p>
            </div>
          </div>
          <div class="flex my-4 w-2/3 lg:w-1/2">
            <div class="flex flex-col">
              <i class="fas fa-phone-alt pt-2 pr-2" />
            </div>
            <div class="flex flex-col">
              <h2 class="text-2xl">Telefonszám</h2>
              <p class="text-gray-400">Tel: xxx-xxx-xxx</p>
            </div>
          </div>
          <div class="flex my-4 w-2/3 lg:w-1/2">
            <a rel="noreferrer" class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1 cursor-pointer">
              <i class="fab fa-facebook-f text-accent" />
            </a>
            <a rel="noreferrer" class="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1 cursor-pointer">
              <i class="fab fa-instagram text-accent" />
            </a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import UniversalButton from '../utilities/UniversalButton.vue'
export default {
  components: { UniversalButton },

}
</script>

<style>

</style>