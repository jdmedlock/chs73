import formatName from './formatName'

export default function createPersonGroups(persons) {
  if (persons === undefined) return ([[],[]])

  const photoPlaceholder = 'chs_photo_placeholder_otiogp.png'

  const personsGrouping1Lth = Math.floor(persons.length / 2)
  let personsGrouping1 = []
  for (let i = 0; i < personsGrouping1Lth; i++) {
    personsGrouping1.push({
      firstName: persons[i].firstName,
      lastName: persons[i].lastName,
      name: formatName(persons[i].firstName, persons[i].lastName, persons[i].marriedLastName),
      cloudinaryId: persons[i].cloudinaryId === '' ? photoPlaceholder : persons[i].cloudinaryId,
      deceased: persons[i].deceased,
      confirmed: persons[i].confirmed,
      department: persons[i].department ? persons[i].department : '',
      position: persons[i].position ? persons[i].position : '',
    })
  }

  let personsGrouping2 = []
  for (let i = personsGrouping1Lth; i < persons.length; i++) {
    personsGrouping2.push({ 
      firstName: persons[i].firstName,
      lastName: persons[i].lastName,
      name: formatName(persons[i].firstName, persons[i].lastName, persons[i].marriedLastName),
      cloudinaryId: persons[i].cloudinaryId === '' ? photoPlaceholder : persons[i].cloudinaryId,
      deceased: persons[i].deceased,
      confirmed: persons[i].confirmed,
      department: persons[i].department ? persons[i].department : '',
      position: persons[i].position ? persons[i].position : '',
    })
  }

  return [ personsGrouping1, personsGrouping2 ]

}