<template>
  <section
  class="relative bg-cover bg-center bg-no-repeat bg-gradient-to-r from-background to-light"
>
  <div
    class="relative mx-auto max-w-screen-xl px-4 sm:py-16 py-12 sm:px-6 lg:flex lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center sm:text-left">
      <h1 class="text-3xl font-extrabold sm:text-5x uppercase">
        {{ this.headline }}
      </h1>
      <hr class="mt-3 w-[100%] border-2 border-accent">
    </div>
  </div>
</section>
</template>

<script>
export default {
    props: {
        headline: String,
    }
}
</script>

<style>

</style>