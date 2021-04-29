export default function formatName(firstName, lastName, marriedLastName) {
  const formattedName = marriedLastName !== '' 
    ? firstName.concat(' (',lastName,') ',marriedLastName) 
    : firstName.concat(' ',lastName)
  return formattedName
}
