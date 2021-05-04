export default function formatName(firstName, lastName, marriedLastName) {
  const formattedName = marriedLastName !== '' && marriedLastName !== undefined
    ? firstName.concat(' (',lastName,') ',marriedLastName) 
    : firstName.concat(' ',lastName)
  return formattedName
}
