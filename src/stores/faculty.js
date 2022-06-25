import { writable } from 'svelte/store'

const faculty = writable([])

const facultyStore = {
  // subscribe to the cart store
  subscribe: faculty.subscribe,
  // Add a new array of faculty JSON objects
  addFaculty(newFaculty) {
    faculty.update(() => {
      console.log('facultyStore: ', newFaculty)
      return newFaculty
    })
  }
}

// export the custom store
export default facultyStore