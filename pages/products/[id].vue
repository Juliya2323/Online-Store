<template lang="pug">
div
  Head
    Title Online Store | {{ product.title }}
    Meta(name='description' :content="product.description")
  product-details(:product="product")
</template>

<script setup>

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id;
const { data: product } = await useFetch(uri, {key: id});

if(!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
    fatal: true
  })
}

definePageMeta({
  layout: 'products'
})
</script>

<style scoped>

</style>