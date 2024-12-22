<template>
    <div class="w-full">
      <h1>{{ title }}</h1>    
  
      <textarea
       :style="{ width: '100%', height: heigth }"
        class="bg-black border-b-2 border-red-500 rounded-md hover:bg-red-800 focus:outline pl-[1px] resize-none overflow-auto text-sm p-1"
      ></textarea>
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    heigth: {
      type: String,
      required: true,
    }
  },
  
});
</script>
