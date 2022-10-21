import { writable } from 'svelte/store'

const facultyPromise = writable([])

const facultyPromiseStore = {
  // subscribe to the cart store
  subscribe: facultyPromise.subscribe,
  // Add a new array of faculty JSON objects
  addFacultyPromise(newFacultyPromise) {
    facultyPromise.update(() => {
      return newFacultyPromise
    })
  }
}

// export the custom store
export default facultyPromiseStore