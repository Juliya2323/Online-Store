<template lang="pug">
.card.text-center
  img.thumb(:src="product.image" alt="product")
  p.font-bold.text-gray-500.m-4.truncate {{ product.title }}
  nuxt-link(:to="`/products/${product.id}`") 
    p.btn.my-4 Details
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style lang="scss" scoped>
    .thumb {
        max-height: 120px;
        max-width: 70%;
        margin: 0 auto;
    }
</style>