<template>
  <div>
    <div v-for="item in content" :key="item.head" class="mx-auto mb-2">
        <div class="rounded border-2 border-lightest">
            <div class="accordion-header rounded flex justify-between" @click="item.active = !item.active">
                <span class="font-semibold text-lg">{{ item.head }}</span>
                <span v-if="!item.active">&#9660;</span>
                <span v-if="item.active">&#9650;</span>
            </div>
            <Transition mode="out-in" name="slide-up">
                <div v-if="item.active">
                    <div v-if="!withSlot" class="p-4">
                        <p v-if="item.paragraph1">{{ item.paragraph1 }}</p>
                        <br>
                        <p v-if="item.paragraph2">{{ item.paragraph2 }}</p>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        content: [],
    }
}
</script>

<style>

</style>