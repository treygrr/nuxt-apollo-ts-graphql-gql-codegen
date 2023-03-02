// https://nuxt.com/docs/api/configuration/nuxt-config

// https://alexclark.co.nz/blog/using-apollo-and-graphql-with-nuxt-js
export default defineNuxtConfig({
  srcDir: 'src',
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss'
  ],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://swapi-graphql.netlify.app/.netlify/functions/index'
      }
    },
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
  }
})
