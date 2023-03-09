import { defineStore } from 'pinia'

export const currencyStore = defineStore({
  id: 'currency-store',
  state: () => {
    return {
      currencyData: null,
    }
  },
  actions: {
     async chooseCurrency(currency) {
      const { data } = await useFetch(`/api/currency/${currency}`, 
      {
        async onResponseError({ request, response, options }) {
          //console.log(response);
      }});
      this.currencyData = await data.value;
   } 
  },
  getters: {
    currencyValue() {
      if (!this.currencyData) {
        return null;
      }
      const currencyKey = Object.keys(this.currencyData)[0];
      console.log(this.currencyData[currencyKey].value);
      return this.currencyData[currencyKey].value;
      
    }
  },
})