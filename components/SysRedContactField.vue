<template>
  <div class="w-full">
    <h1>{{ title }}</h1>

    <textarea :style="{ width: '100%', height: height }" v-model="model"
      class="bg-black border-b-2 border-red-500 rounded-md hover:bg-red-800 focus:outline pl-[1px] resize-none overflow-auto text-sm p-1">
    </textarea>
  </div>
</template>

<script setup lang="ts">
const model = defineModel()

defineProps({
  title: String,
  height: String
})
</script>
