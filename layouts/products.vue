<template lang="pug">
div
  header.shadow-sm.bg-white
    nav.container.mx-auto.p-4
      nuxt-link.font-bold(to='/products') Go to products
  .container.mx-auto.p-4
    slot
  footer.container.mx-auto.p-4.flex.justify-between.border-t-2
    ul.flex.gap-4
      li
        nuxt-link(to='/') Main
      li
        nuxt-link(to='/currencies') Currencies
      li
        nuxt-link(to='/products') Products
</template>

<script setup>

</script>

<style scoped>
.router-link-exact-active {
    color: blue;
}

.router-link-active {
    color: rgb(195, 218, 20);
}
</style>