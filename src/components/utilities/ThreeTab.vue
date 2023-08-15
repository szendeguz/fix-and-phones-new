<template>
  <div class="inline-flex max-w-fit rounded border border-gray-100 bg-gray-100 p-1" id="threetab">
    <button
    v-for="button in buttons" :key="button"
    @click.prevent="$emit('tabclick', button.id)"
    :class="[button.active ? 'text-accent shadow-sm bg-white' : 'text-gray-500 hover:text-gray-700']"
    class="inline-block rounded px-4 py-2 sm:text-lg text-md focus:relative"
    >
      {{ button.text }}
    </button>
</div>

</template>

<script>
export default {
    props: {
        buttons: [],
    },

}
</script>

<style>

</style>