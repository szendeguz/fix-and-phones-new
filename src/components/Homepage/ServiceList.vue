<template>
  <section class="text-white">
  <div
    class="mx-auto max-w-screen-xl px-4 py-12 sm:py-16 sm:px-6 lg:py-24 lg:px-8"
  >
    <div class="mx-auto max-w-lg text-center">
      <h2 class="text-3xl font-bold sm:text-4xl">Speciális javításaink</h2>

      <p class="mt-4 text-gray-300">
        Széleskörű szervizelési munkákat vállalunk, különböző eszközökre
      </p>
    </div>

    <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <router-link
        class="block rounded-xl border sm:border-light p-8 shadow-xl cursor-pointer transition sm:shadow-transparent border-accent/10 shadow-accent/10 hover:border-accent/10 hover:shadow-accent/10"
        to="/iphone-kijelzo-javitas"
      >
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      fill="currentColor" 
      class="h-11 w-11 text-accent"
      >
        <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/>
      </svg> 
        <h2 class="mt-4 text-xl font-bold text-white">iPhone kijelző javítás</h2>

        <p class="mt-1 text-sm text-gray-300">
          Kijelző javítás és kijelző csere Apple okostelefonokra a régebbi szériáktól a legújabbakaig.
          Kattints ide, hogy megtekintsd árlistánkat.
        </p>
    </router-link>

      <router-link
        class="block rounded-xl border sm:border-light p-8 shadow-xl transition sm:shadow-transparent border-accent/10 shadow-accent/10 hover:border-accent/10 hover:shadow-accent/10"
        to="/iphone-alaplap-javitas"
      >
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor" 
      class="h-8 w-8 text-accent"
      viewBox="0 0 16 16"> 
        <path d="M11.5 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm2 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5Zm-10 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6Zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6ZM5 3a1 1 0 0 0-1 1h-.5a.5.5 0 0 0 0 1H4v1h-.5a.5.5 0 0 0 0 1H4a1 1 0 0 0 1 1v.5a.5.5 0 0 0 1 0V8h1v.5a.5.5 0 0 0 1 0V8a1 1 0 0 0 1-1h.5a.5.5 0 0 0 0-1H9V5h.5a.5.5 0 0 0 0-1H9a1 1 0 0 0-1-1v-.5a.5.5 0 0 0-1 0V3H6v-.5a.5.5 0 0 0-1 0V3Zm0 1h3v3H5V4Zm6.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2Z"/> 
        <path d="M1 2a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 9H1V8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6H1V5H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 2H1Zm1 11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11Z"/> 
      </svg> 
        <h2 class="mt-4 text-xl font-bold text-white">Alaplapi hibák</h2>

        <p class="mt-1 text-sm text-gray-300">
          Biztos hallottad már, hogy "alaplap hiba miatt nem javítható a készülék". Legtöbb esetben tévednek!
        </p>
    </router-link>

    <router-link
    class="block rounded-xl border sm:border-light p-8 shadow-xl transition sm:shadow-transparent border-accent/10 shadow-accent/10 hover:border-accent/10 hover:shadow-accent/10"
    to="/iphone-hatlap-csere"
    >
        <svg
          class="h-10 w-10 text-accent"
          stroke="currentColor"
          fill="none"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" aria-labelledby="iphoneIconTitle">
            <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18,3 L18,21 C18,21.5522847 17.5522847,22 17,22 L7,22 C6.44771525,22 6,21.5522847 6,21 L6,3 C6,2.44771525 6.44771525,2 7,2 L17,2 C17.5522847,2 18,2.44771525 18,3 Z"
            />
        </svg>
        <h2 class="mt-4 text-xl font-bold text-white">iPhone hátlap csere</h2>

        <p class="mt-1 text-sm text-gray-300">
          Az iPhone 8 szériával visszatért a készülékekre az üveg hátlap, mely megsérülhet. Nehéz, időigényes munkával viszont cserélhető!
        </p>
    </router-link>

    <router-link
        class="block rounded-xl border sm:border-light p-8 shadow-xl cursor-pointer transition sm:shadow-transparent border-accent/10 shadow-accent/10 hover:border-accent/10 hover:shadow-accent/10"
        to="/iphone-akkumulator-csere"
      >
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 256 256"
      class="h-10 w-10 text-accent"
      >
        <rect width="256" height="256" fill="none"/>
          <line x1="96" y1="8" x2="160" y2="8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" class="h-10 w-10 text-accent" stroke="currentColor"/>
        <rect x="56" y="40" width="144" height="184" rx="16" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" class="text-accent" stroke="currentColor"/>
        <polyline points="128 172 144 132 112 132 128 92" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" class="h-10 w-10 text-accent" stroke="currentColor"/>
      </svg>

        <h2 class="mt-4 text-xl font-bold text-white">iPhone akkumulátor csere</h2>

        <p class="mt-1 text-sm text-gray-300">
          Meghibásodott akkumulátorodat kicseréljük nem csak okostelefonodban, hanem tabletedben vagy okosórádban is.
          Kattints, hogy megtekintsd árlistánkat.
        </p>
    </router-link>

      <router-link
        class="block rounded-xl border sm:border-light p-8 shadow-xl transition sm:shadow-transparent border-accent/10 shadow-accent/10 hover:border-accent/10 hover:shadow-accent/10"
        to="/applewatch-kijelzo-csere"
      >
        <svg 
        class="h-10 w-10 text-accent"
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" >
            <path 
            fill-rule="evenodd" 
            clip-rule="evenodd" 
            d="M16.4975 5.02988C16.4973 5.07798 16.4959 5.12581 16.4934 5.17335C17.662 5.58332 18.5 6.69628 18.5 8.00496V9.00493H19.5V13.0049H18.5V16.005C18.5 17.3129 17.663 18.4254 16.4953 18.8359C16.4984 18.8919 16.5 18.9482 16.5 19.005C16.5 20.6618 15.1569 22.005 13.5 22.005H9.5C7.84315 22.005 6.5 20.6618 6.5 19.005C6.5 18.9482 6.50158 18.8919 6.50468 18.8359C5.33705 18.4254 4.5 17.3129 4.5 16.005V8.00496C4.5 6.69767 5.33618 5.58568 6.50286 5.17465C6.49907 5.11032 6.4973 5.04546 6.49763 4.98011C6.50587 3.32328 7.85569 1.98683 9.51252 1.99508L13.5125 2.01499C15.1693 2.02324 16.5058 3.37305 16.4975 5.02988ZM8.49764 5.00496H14.4975C14.4922 4.45954 14.0498 4.01769 13.5025 4.01496L9.50257 3.99505C8.95029 3.99231 8.50035 4.43779 8.4976 4.99006L8.49764 5.00496ZM15.7049 7.02596L11.4846 7.00496H7.5C6.94772 7.00496 6.5 7.45267 6.5 8.00496V16.005C6.5 16.5568 6.94696 17.0042 7.4986 17.005H15.5014C16.053 17.0042 16.5 16.5568 16.5 16.005V8.00496C16.5 7.52289 16.1589 7.12049 15.7049 7.02596ZM8.5 19.005C8.5 19.5572 8.94772 20.005 9.5 20.005H13.5C14.0523 20.005 14.5 19.5572 14.5 19.005H8.5Z" 
            fill="currentColor" 
            /> 
        </svg>

        <h2 class="mt-4 text-xl font-bold text-white">Apple Watch</h2>

        <p class="mt-1 text-sm text-gray-300">
          Kijelző és akkumulátor csere a legújabb Apple Watch készülékekre is.
          Nézd meg az árlistát itt.
        </p>
    </router-link>

    <router-link
    class="block rounded-xl border sm:border-light p-8 shadow-xl transition sm:shadow-transparent border-accent/10 shadow-accent/10 hover:border-accent/10 hover:shadow-accent/10"
    to="/"
    >
        <svg
        class="h-10 w-10 text-accent"
        stroke="currentColor"
        fill="none"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512"> 
            <path fill="var(--ci-primary-color, currentColor)" 
            d="M440,16H80A24.028,24.028,0,0,0,56,40V472a24.028,24.028,0,0,0,24,24H440a24.028,24.028,0,0,0,24-24V40A24.028,24.028,0,0,0,440,16Zm-8,448H88V368H432Zm0-128H88V48H432Z" 
            class="ci-primary"
            />
            <rect 
            width="32" 
            height="32" 
            x="232" 
            y="400" 
            fill="var(--ci-primary-color, currentColor)" class="ci-primary"
            />
        </svg>

        <h2 class="mt-4 text-xl font-bold text-white">iPad</h2>

        <p class="mt-1 text-sm text-gray-300">
          Kijelző és akkumulátor csere megfizethető áron iPad termékekre is.
          Válaszd ki a készüléked és az igénylet javítást, hogy megtekintsd az árlistánkat.
        </p>
    </router-link>
    </div>
    <div class="mt-12 text-center">
        <universal-button :basicButton="true" :accentBackground="true" text="Készülék kiválasztása" destination="/keszulekek"></universal-button>
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