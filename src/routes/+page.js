import classmatesStore from '../stores/classmates.js'
import classmatesPromise from '../stores/classmatesPromise.js'
import facultyStore from '../stores/faculty.js'
import facultyPromise from '../stores/facultyPromise.js'
import { PUBLIC_BE_URL } from '$env/static/public'

export async function load({ params, fetch }) {
		const classmatesURL = `${ PUBLIC_BE_URL }/classmates`
	const facultyURL = `${ PUBLIC_BE_URL }/faculty`

  const classmatesResponse = fetch(classmatesURL)
  .then(async (response) => {
    const classmatesJSON = response.json()
    classmatesPromise.addClassmatesPromise(classmatesJSON)
    classmatesJSON.then((json) => {
      return classmatesStore.addClassmates(json)
    })
  })

  const facultyResponse = fetch(facultyURL)
  .then(async (response) => {
    const facultyJSON = response.json()
    facultyPromise.addFacultyPromise(facultyJSON)
    facultyJSON.then((json) => {
      return facultyStore.addFaculty(json)
    })
  })

  return {
    classmatesResponse: classmatesResponse,
    facultyResponse: facultyResponse,
  }
}
