import classmatesStore from '../stores/classmates.js'
import classmatesPromise from '../stores/classmatesPromise.js'
import facultyStore from '../stores/faculty.js'
import facultyPromise from '../stores/facultyPromise.js'

export async function load({ params, fetch }) {
	const classmatesURL = `${ import.meta.env.VITE_BE_URL }/classmates`
	const facultyURL = `${ import.meta.env.VITE_BE_URL }/faculty`

  const classmatesResponse = fetch(classmatesURL)
  .then(async (response) => {
    const classmatesJSON = response.json()
    classmatesPromise.addClassmatesPromise(classmatesJSON)
    classmatesJSON.then((json) => {
      return classmatesStore.addClassmates(json)
    })
  })
  .catch((err) => {
    console.error('Error fetching classmates - ', err)
  })

  const facultyResponse = fetch(facultyURL)
  .then(async (response) => {
    const facultyJSON = response.json()
    facultyPromise.addFacultyPromise(facultyJSON)
    facultyJSON.then((json) => {
      return facultyStore.addFaculty(json)
    })
  })
  .catch((err) => {
    console.error('Error fetching faculty - ', err)
  })

  return {
    classmatesResponse: classmatesResponse,
    facultyResponse: facultyResponse,
  }
}
