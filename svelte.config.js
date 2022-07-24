import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'

const config = {
  preprocess: preprocess({ postcss: true }),
  kit: {
    adapter: adapter()
  }
}

export default config