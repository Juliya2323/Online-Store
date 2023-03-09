<template lang="pug">
div
  .grid.grid-cols-4.gap-5
    div(v-for="product in products")
      product-card(:product="product")
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");

useHead({
  //перезаписать мета отдельно для страницы:
  meta: [{ name: "description", content: "Shop Online!" }],
});
</script>

<style scoped></style>
