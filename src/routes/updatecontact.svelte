<script context="module">
	export async function preload(page, session) {
		return { 
      params: {
        back: page.query.back,
        name: page.query.name,
        cloudinaryId: page.query.photoId,
        deceased: page.query.deceased,
        confirmed: page.query.confirmed,
        type: page.query.type,
      }
    }
  }
</script>

<script>
  import { goto } from '@sapper/app'
  import { client } from '../utils/graphql.js'
  import { emailValidator, nameValidator, stateValidator, zipcodeValidator } from '../utils/validators.js'

  export let params
  let { back, name, cloudinaryId, deceased, confirmed, type } = params
  console.log(`updatecontact - back: ${ back } name: ${ name } cloudinaryId: ${ cloudinaryId } deceased: ${ deceased } type: ${ type }`)

  let posterName = ''
  let posterEmail = ''

  let contactEmail = ''
  let isContactDeceased = deceased === 'TRUE' ? true : false
  let contactStreet = ''
  let contactCity = ''
  let contactState = ''
  let contactZipcode = ''
  let contactPhone = ''
  let contactInfo = ''

  let isPosterEmailValid = true
  let isPosterNameValid = true
  let isContactEmailValid = true
  let isContactStateValid = true
  let isContactZipcodeValid = true

  let tigerhuntResult = ''

  const validatePosterEmail = () => {
    const result = emailValidator(posterEmail)
    isPosterEmailValid = result === true ? true : false
    return
  }

  const validateClassmateEmail = () => {
    const result = emailValidator(contactEmail)
    isContactEmailValid = result === true ? true : false
    return
  }

  const validatePosterName = () => {
    const result = nameValidator(posterName)
    isPosterNameValid = result === true ? true : false
    return
  }

  const validateClassmateState = () => {
    const result = stateValidator(contactState)
    isContactStateValid = result === true ? true : false
    return
  }

  const validateClassmateZipcode = () => {
    const result = zipcodeValidator(contactZipcode)
    isContactZipcodeValid = result === true ? true : false
    return
  }

  const handleSubmit = () => {
    if (!isPosterNameValid || !isPosterEmailValid || 
        !isContactEmailValid || !isContactStateValid || 
        !isContactZipcodeValid) {
      return
    }

    contactZipcode = parseInt(contactZipcode)
    
/*
    console.log(`Poster name: ${ posterName } email: ${ posterEmail }`)
    console.log(`Classmate name: ${ name } email: ${ contactEmail }`)
    console.log(`...Street: ${ contactStreet }`)
    console.log(`...City: ${ contactCity} State: ${ contactState } Zip: ${ contactZipcode }`)
    console.log(`...Phone: ${ contactPhone } Deceased: ${ isContactDeceased }`)
    console.log(`...Info: ${ contactInfo }`)
*/

    return client(fetch)
      .request({
        query: `
          mutation sendTigerHunt(
            $posterEmail: String!
            $posterName: String!
            $name: String!
            $contactEmail: String
            $contactStreet: String
            $contactCity: String
            $contactState: String
            $contactZipcode: Int
            $contactPhone: String
            $contactInfo: String
            $isContactDeceased: Boolean
            $type: String
          ) {
            sendTigerHunt (
              fromEmail: $posterEmail
              fromName: $posterName
              contactName: $name
              contactEmail: $contactEmail
              contactStreet: $contactStreet
              contactCity: $contactCity
              contactState: $contactState
              contactZipcode: $contactZipcode
              contactPhone: $contactPhone
              isContactDeceased: $isContactDeceased
              contactInfo: $contactInfo
              contactType: $type
            ) {
              result {
                message
                code
              }
            }
          }        
        `,
        variables: {
          posterName,
          posterEmail,
          name,
          contactEmail,
          contactStreet,
          contactCity,
          contactState,
          contactZipcode,
          contactPhone,
          isContactDeceased,
          contactInfo,
          type
        }
      })
      .then(response => {
        console.log('response: ', response)

        posterEmail = ''
        posterName = ''
        contactInfo = ''
        contactStreet = ''
        contactCity = ''
        contactState = ''
        contactZipcode = ''
        contactPhone = ''
        isContactDeceased = deceased === 'TRUE' ? true : false
        tigerhuntResult = response.sendTigerHunt.result.code === "OK" 
          ? "Your message was successfully sent!"
          : "An error occurred sending your message. Please try later"
        isPosterEmailValid = true
        isPosterNameValid = true
        isContactEmailValid = true
        isContactStateValid = true
        isContactZipcodeValid = true
        
        return {
          response
        }
      });
  }

  const handleBack = async () => {
    await goto(`${ back }?back=${ back }&name=${ name }&photoId=${ cloudinaryId }&deceased=${ deceased }&confirmed=${ confirmed }`)
  }
</script>

<style>
</style>

<section class="flex flex-wrap place-content-center w-full pt-12 pb-0">
  <div class="relative block bg-gray-900 pt-24 pb-20 w-full">
    <div class="container w-full justify-center m-auto px-4">

      <div class="flex flex-wrap justify-center">
        <div class="lg:w-6/12 px-4">
          <div class="relative flex flex-col min-w-0 break-words mb-6 
            shadow-lg rounded-lg bg-gray-300">
            <div class="flex-auto m-auto p-5 lg:p-10">
              <h4 class="text-2xl font-semibold">Do you know how to contact { name }?</h4>
              <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                Complete this form if you know more about this individual to
                help us keep everyone updated about our upcoming reunion!
              </p>

              {#if tigerhuntResult !== ''}
                <h2 class="text-green-700 italic">{ tigerhuntResult }</h2>
              {/if}

              <form on:submit|preventDefault={ handleSubmit } 
                method="post" enctype="application/json" >
                <div class="relative w-full mt-8">
                  <h2 class="text-white bg-gray-900 text-center">
                    About You
                  </h2>
                  <div class="relative w-full mb-3 mt-1">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="full-name">
                      Full Name (required)
                    </label>
                    <input name="name" bind:value={ posterName } 
                      type="text" required aria-required="true"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                      bg-white rounded text-sm shadow focus:outline-none focus:ring
                      w-full"
                      placeholder="First Last"
                      style="transition: all 0.15s ease 0s;"
                      on:input={ validatePosterName } />
                  </div>
                  {#if !isPosterNameValid}
                    <div class="flex justify-end">
                      <div class="place-self-end text-red-500">
                        Please enter your first & last name
                      </div>
                    </div>
                  {/if}

                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="email">
                      Email (required)
                    </label>
                    <input name="from" bind:value={ posterEmail } 
                      type="text" required aria-required="true"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                      bg-white rounded text-sm shadow focus:outline-none focus:ring
                      w-full"
                      placeholder="jdoe@domain.com"
                      style="transition: all 0.15s ease 0s;"
                      on:input={ validatePosterEmail } />
                  </div>
                  {#if !isPosterEmailValid}
                    <div class="flex justify-end">
                      <div class="place-self-end text-red-500">
                        Please enter a valid email
                      </div>
                    </div>
                  {/if}
                </div>

                <div class="relative w-full mb-3 mt-8">
                  <h2 class="text-white bg-gray-900 text-center">
                    About { name }
                  </h2>

                  <div class="relative w-full mt-1 mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mt-2 mb-2"
                      for="email">
                      Email
                    </label>
                    <input name="from" bind:value={ contactEmail } type="text"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                      bg-white rounded text-sm shadow focus:outline-none focus:ring
                      w-full"
                      placeholder="jdoe@domain.com"
                      style="transition: all 0.15s ease 0s;"
                      on:input={ validateClassmateEmail } />
                  </div>
                  {#if !isContactEmailValid}
                    <div class="flex justify-end">
                      <div class="place-self-end text-red-500">
                        Please enter a valid email
                      </div>
                    </div>
                  {/if}

                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-3"
                      for="street">
                      Street 
                    </label>
                    <input name="from" bind:value={ contactStreet }
                      type="text"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                      bg-white rounded text-sm shadow focus:outline-none focus:ring
                      w-full"
                      placeholder="1111 Any St."
                      style="transition: all 0.15s ease 0s;" />
                  </div>

                  <div class="flex flex-wrap relative w-full mb-1">
                    <span class="relaive w-8/12 mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="city">
                        City 
                      </label>
                      <input name="from" bind:value={ contactCity }
                        type="text"
                        class="w-full border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                        bg-white rounded text-sm shadow focus:outline-none focus:ring"
                        placeholder="Anytown"
                        style="transition: all 0.15s ease 0s;" />
                    </span>
                    <span class="relative w-14 ml-4 mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="state">
                        State 
                      </label>
                      <input name="from" bind:value={ contactState }
                        type="text"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                        bg-white rounded text-sm shadow focus:outline-none focus:ring
                        w-full"
                        placeholder="XX"
                        style="transition: all 0.15s ease 0s;"
                        on:input={ validateClassmateState } />
                    </span>
                    <span class="relative w-20 ml-0 md:ml-4 mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="phone">
                        Zipcode
                      </label>
                      <input name="from" bind:value={ contactZipcode }
                        type="text"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                        bg-white rounded text-sm shadow focus:outline-none focus:ring
                        w-full"
                        placeholder="00000"
                        style="transition: all 0.15s ease 0s;"
                        on:input={ validateClassmateZipcode }  />
                    </span>
                  </div>
                  {#if !isContactStateValid}
                    <div class="flex justify-end">
                      <div class="place-self-end text-red-500">
                        Please enter a valid 2-character state
                      </div>
                    </div>
                  {/if}
                  {#if !isContactZipcodeValid}
                    <div class="flex justify-end">
                      <div class="place-self-end text-red-500">
                        Please enter a valid 5-digit zipcode
                      </div>
                    </div>
                  {/if}

                  <div class="flex flex-wrap relative w-full mb-1">
                    <span class="relative w-36 mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="phone">
                        Phone
                      </label>
                      <input name="from" bind:value={ contactPhone }
                        type="tel"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                        bg-white rounded text-sm shadow focus:outline-none focus:ring
                        w-full"
                        placeholder="(999) 999-9999"
                        style="transition: all 0.15s ease 0s;" />
                    </span>
                    <span class="flex flex-col w-20 ml-6">
                      <label for="deceased">
                        Deceased
                      </label>
                      <input class="self-center w-full h-6 mt-2"
                        name="deceased" type="checkbox" 
                        bind:checked={ isContactDeceased }/>
                    </span> 
                  </div>        

                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message">
                      Info about this classmate
                    </label>
                    <textarea name="message" bind:value={ contactInfo }
                      rows="4" cols="80" aria-required="false"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                      bg-white rounded text-sm shadow focus:outline-none focus:ring
                      w-full" 
                      placeholder="Type a message..." />
                  </div>
                </div>
          
                <div class="text-center mt-6">
                  <button type="submit"
                    class="bg-orange-500 text-white active:bg-gray-700 text-sm
                    font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg
                    outline-none focus:outline-none mr-1 mb-1"
                    style="transition: all 0.15s ease 0s;">
                    Submit Info
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="bottom-auto top-0 left-0 right-0 w-full relative
    pointer-events-none overflow-hidden -mt-20"
    >
    <svg
      class="absolute bottom-0 overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0">
      <polygon
        class="text-white fill-current"
        points="2560 0 2560 100 0 100" />
    </svg>
  </div>

</section>

<section class="flex flex-wrap place-content-center w-full h-48 ml-0 md:ml-8 -mt-8">
  <div class="flex place-content-center text-center w-full -mt-2">
    <button on:click={ handleBack }
      class="bg-orange-500 text-white active:bg-gray-700 text-sm
      font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg
      outline-none focus:outline-none mr-1 mb-1"
      style="transition: all 0.15s ease 0s;">
      Back
    </button>
  </div>
</section>
