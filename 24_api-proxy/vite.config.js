export default {
    server: {
      port:6000,
        proxy: {
          '/api': 'http://localhost:4000'
        }
      }
}