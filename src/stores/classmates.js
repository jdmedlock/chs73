import { writable } from 'svelte/store'

const classmates = writable([])

const classmatesStore = {
  // subscribe to the cart store
  subscribe: classmates.subscribe,
  // Add a new array of classmate JSON objects
  addClassmates(newClassmates) {
    classmates.update(() => {
      return newClassmates
    })
  }
}

// export the custom store
export default classmatesStore