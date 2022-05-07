import Airtable from 'airtable'

// Retrieve the number of Applications for the matching starting & ending 
// date range
const getClassmatesJSON = async () => {
  return new Promise(async (resolve, reject) => {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE)

    base('Classmates').select({ 
      view: 'Classmates' 
    })
    .firstPage((err, records) => {
      if (err) { 
        console.error(err) 
        reject(err) 
      }

      // Return the number of Applications submitted in this date range
      if (records !== null && records !== undefined) {
        console.log(`records.length: `, records.length)
        resolve(records)
      }
      resolve(0)
    })
  })
}

export { getClassmatesJSON }