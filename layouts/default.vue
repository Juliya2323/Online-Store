<template lang="pug">
div
  header.shadow-sm.bg-white
    nav.container.mx-auto.p-4.flex.justify-between
      nuxt-link.font-bold(to='/') 
        img.logo(src='../public/icons/logo.svg')
      ul.flex.gap-4
        li
          nuxt-link(to='/') Main
        li
          nuxt-link(to='/currencies') Currencies
        li
          nuxt-link.btn(to='/products') Products
  .container.mx-auto.p-4
    slot
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

.logo {
  width: 35px;
  height: 35px;
}
</style>


