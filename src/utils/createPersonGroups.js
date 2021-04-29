import formatName from './formatName'

export default function createPersonGroups(persons) {

  const photoPlaceholder = 'chs_photo_placeholder_otiogp.png'

  const personsGrouping1Lth = Math.floor(persons.length / 2)
  let personsGrouping1 = []
  for (let i = 0; i < personsGrouping1Lth; i++) {
    personsGrouping1.push({ 
      name: formatName(persons[i].firstName, persons[i].lastName, persons[i].marriedLastName),
      cloudinaryId: persons[i].cloudinaryId === '' ? photoPlaceholder : persons[i].cloudinaryId,
      deceased: persons[i].deceased,
      confirmed: persons[i].confirmed,
    })
  }

  let personsGrouping2 = []
  for (let i = personsGrouping1Lth; i < persons.length; i++) {
    personsGrouping2.push({ 
      name: formatName(persons[i].firstName, persons[i].lastName, persons[i].marriedLastName),
      cloudinaryId: persons[i].cloudinaryId === '' ? photoPlaceholder : persons[i].cloudinaryId,
      deceased: persons[i].deceased,
      confirmed: persons[i].confirmed,
    })
  }

  return { personsGrouping1, personsGrouping2 }

}