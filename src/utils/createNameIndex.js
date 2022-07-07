// Create an index that associates letters of the alphabet with 
// the first person in the list whose last name starts with that letter
export default function createNameIndex(persons) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const letterIndex = []

  for(let i = 0; i < alphabet.length; i++) {
    const letter = alphabet.charAt(i)
    const firstMatch = persons.find(person => {
      return person.lastName.charAt(0) == letter ? true : false
    })
    if (firstMatch !== undefined) {
      letterIndex.push({ 
        letter: letter, 
        name: `#${ firstMatch.lastName.toLowerCase().replace(/\s+/g, '') }`
      })
    } else {
      if (letter !== 'A') {
        letterIndex.push({ 
          letter: letter, 
          name: letterIndex[i-1].lastName 
        })
      }
    }
  }

  return letterIndex
}