<template>
  <section>
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <header class="text-center">
      <h2 class="text-xl font-bold text-white sm:text-3xl">
        Készülékeink
      </h2>

      <p class="max-w-md mx-auto mt-4 text-gray-500">
        Válaszd ki, hogy melyik Apple termékeddel van a hiba. Telefon, tablet vagy okosóra?
      </p>
    </header>

    <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
      <li>
        <a href="#" class="relative block group">
          <img
            src="../../assets/images/sections/iphone_dev_section.jpg"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square rounded group-hover:opacity-60"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 class="text-xl font-medium text-white">iPhone</h3>

            <span
              class="mt-1.5 inline-block bg-background rounded px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Megtekintés
            </span>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="relative block group">
          <img
            src="../../assets/images/sections/apple_watch_dev_section.jpg"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square rounded group-hover:opacity-60"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 class="text-xl font-medium text-white">Apple Watch</h3>

            <span
              class="mt-1.5 inline-block bg-background rounded px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Megtekintés
            </span>
          </div>
        </a>
      </li>

      <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" class="relative block group">
          <img
            src="../../assets/images/sections/ipad_dev_section.jpg"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square rounded group-hover:opacity-60"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 class="text-xl font-medium text-white">iPad</h3>

            <span
              class="mt-1.5 inline-block bg-background rounded px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Megtekintés
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>

</template>

<script>
export default {

}
</script>

<style>

</style>