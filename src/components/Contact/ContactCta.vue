<template> 
<section class="text-white">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-lg text-center">
      <h2 class="text-2xl font-bold  md:text-3xl">
        Kérdésed van?
      </h2>
      <p class="text-gray-300 mt-4">
        Ha nem találod a készüléked a listában vagy egy hibáról szeretnél érdeklődni, vedd fel velünk a kapcsolatot!
      </p>
    </div>
    <div class="mx-auto mt-8 max-w-xl flex felx-row justify-center items-center">
        <universal-button :accentBackground="true" :basicButton="true" text="Kapcsolat" destination="/kapcsolat"/>
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
