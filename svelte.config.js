import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'

const config = {
  preprocess: preprocess({ postcss: true }),

  kit: {
    adapter: adapter({
      edge: false,
      split: false
    })
  }
}

export default config