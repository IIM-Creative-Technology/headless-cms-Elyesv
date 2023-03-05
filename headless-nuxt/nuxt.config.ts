// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/strapi', 'nuxt-icon'],
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1337',
        prefix: '/api',
        version: 'v4',
    },
    css: [
        '~/assets/scss/main.scss',
        '~/assets/css/normalize.css'
    ],
    
})
