<template lang="pug">
div.currencies
   h1.currencies_title Exchange Rates
   ul.currencies_list
      li.currencies_list_item(v-for="flag in flags")
         img.currencies_list_item_img(:src="flag")
   h4(v-if="useCurrencyStore.currencyValue") 1 USD =  {{ useCurrencyStore.currencyValue }} {{ curr }}
   form.currencies_form.submit.prevent
      select(v-model="curr")
         option MXN
         option AED
         option EUR
         option JPY
         option GBP
         option LTL
      button.btn(type="submit" @click.prevent="useCurrencyStore.chooseCurrency(curr)") Choose Currency
</template>

<script setup>
import { currencyStore } from '../store/currencies.js'

import imgLink1 from "../public/icons/flags/mexico.svg";
import imgLink2 from "../public/icons/flags/uae.svg";
import imgLink3 from "../public/icons/flags/eu.svg";
import imgLink4 from "../public/icons/flags/japan.svg";
import imgLink5 from "../public/icons/flags/uk.svg";
import imgLink6 from "../public/icons/flags/lithuania.svg";

const useCurrencyStore = currencyStore()

const flags = reactive([
   imgLink1, 
   imgLink2,
   imgLink3,
   imgLink4,
   imgLink5,
   imgLink6
])
const curr = ref('')

</script>

<style scoped lang="scss">
.currencies {

   height: 40vh;
   width: 50%;
   background-color: #fff;
   border-radius: 20px;
   margin: auto;
   margin-top: 60px;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 30px;
   gap: 40px;

   &_title {
      font-size: 36px;
      font-weight: 500;
      line-height: 110%;
   }

   &_list {
      
      display: flex;
      gap: 20px;

      &_item {

         &_img {
            width: 40px;
            height: 40px;
         }
      }
   }

   select {
      background-color: #F9FAFB;
   }

   &_form {
      display: flex;
      flex-direction: column;
      gap: 20px;
   }
}
</style>
