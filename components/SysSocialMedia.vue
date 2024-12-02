<template>
        <a :href="link" target="_blank" class="bg-white rounded-full">
            <img :src="icon" alt="" class="w-11">
        </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

