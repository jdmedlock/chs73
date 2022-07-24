import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const config = {
  preprocess: preprocess({ postcss: true }),
  kit: {
    adapter: adapter({
      prerender: true
    })
  }
}

export default config