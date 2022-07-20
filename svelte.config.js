import adapter from '@sveltejs/adapter-netlify'
import preprocess from 'svelte-preprocess'

const config = {
  preprocess: preprocess({ postcss: true }),
  kit: {
    adapter: adapter({
      // if true, will create a Netlify Edge Function rather
      // than using standard Node-based functions
      edge: false,

      // if true, will split your app into multiple functions
      // instead of creating a single one for the entire app.
      // if `edge` is true, this option cannot be used
      split: false
    })
  }
}

export default config