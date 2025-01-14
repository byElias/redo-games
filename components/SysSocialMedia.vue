<template>
  <a :href="link" target="_blank" class="bg-white rounded-full">
    <img :src="icon" alt="" class="w-11">
  </a>
</template>

<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    props: {
      link: {
        type: String as () => string,
        required: true,
      },
      icon: {
        type: String as () => string,
        required: true,
      },
    },
  });
</script>

