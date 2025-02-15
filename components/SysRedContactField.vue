<template>
  <div class="w-full">
<<<<<<< HEAD
    <h1>{{ title }}</h1>    
  
    <input
      :style="{ width: '100%', height: heigth }"
=======
    <h1>{{ title }}</h1>

    <textarea :style="{ width: '100%', height: height }" v-model="model"
>>>>>>> 7e420d408fd669f02fe365118c438a9f6e4e45e8
      class="bg-black border-b-2 border-red-500 rounded-md hover:bg-red-800 focus:outline pl-[1px] resize-none overflow-auto text-sm p-1">
    </input>
  </div>
</template>

<script setup lang="ts">
const model = defineModel()

defineProps({
  title: String,
  height: String
})
</script>
