export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
  },

  compatibilityDate: '2025-03-25',
});