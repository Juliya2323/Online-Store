export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    app: {
        head: {
            title: 'Online Store',
            meta: [
                {name: 'description', content: 'Everyting you need!'}
            ], 
            link: [
                { rel: 'stylesheet', href: "https://fonts.googleapis.com/icon?family=Material+Icons" },
                { rel:"icon", href:"/public/icons/logo.svg", type:"/logo.svg" }
            ]
        }
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY
    },
    
})