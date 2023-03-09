<template lang="pug">
.card
  .grid.grid-cols-2.gap-10
    .p-7
      img.mx-auto.my-7(:src="product.image" alt="product")
    .p-7
      h2.text-4xl.my-7 {{ product.tite }}
      p.text-xl.my-7(v-if='usd') Price: {{ product.price }} $
      p.text-xl.my-7(v-if='eur') Price: {{ eur }} €
      button.btn.currency(@click="toEur(product.price)" v-if="usd") Show price in €
      button.btn.currency(@click="toUsd()" v-if="eur") Show price in $
      h3.font-bold.border-b-2.mb-4.pb-2 Description: 
      p.mb-7 {{ product.description }}
</template>

<script setup>
const eur = ref(null)
const usd = ref(true)
const isActive = useState('isActive', (isActive) => true)

const { product } = defineProps(['product'])
const { data } = await useFetch("/api/currency/EUR");
const val = data.value['EUR'].value

function toEur(price) {
    eur.value = (price*val).toFixed(2);
    usd.value = false;
}

function toUsd() {
  eur.value = null;
  usd.value = true;
}

</script>

<style lang="scss" scoped>
 img {
    max-width: 400px;
 }

 .currency {
  margin-bottom: 40px;
 }
</style>