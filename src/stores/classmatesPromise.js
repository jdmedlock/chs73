import { writable } from 'svelte/store'

const classmatesPromise = writable([])

const classmatesPromiseStore = {
  // subscribe to the cart store
  subscribe: classmatesPromise.subscribe,
  // Add a new array of classmate JSON objects
  addClassmatesPromise(newClassmatesPromise) {
    classmatesPromise.update(() => {
      return newClassmatesPromise
    })
  }
}

// export the custom store
export default classmatesPromiseStore