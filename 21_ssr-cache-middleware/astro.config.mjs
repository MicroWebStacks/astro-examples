import node from '@astrojs/node'

export default defineConfig({
  output: "server",
  adapter: node({
    mode: 'middleware'
  })
});
