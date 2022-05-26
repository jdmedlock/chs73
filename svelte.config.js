const preprocess = require('svelte-preprocess')

const config = {
  preprocess: preprocess({ postcss: true })
}

export default config