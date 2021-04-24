<script context="module">
	export async function preload(page, session) {
		return { 
      params: {
        back: page.query.back,
        classmateName: page.query.name,
        cloudinaryId: page.query.photoId,
        deceased: page.query.deceased,
      }
    }
  }
</script>

<script>
  import { goto } from '@sapper/app'
  import { Image } from '@cloudinary/svelte'

  export let params
  let { back, classmateName, cloudinaryId, deceased } = params
  console.log(`back: ${ back } classmateName: ${ classmateName } cloudinaryId: ${ cloudinaryId } deceased: ${ deceased }`)

  let posterName = ''
  let posterEmail = ''

  let classmateEmail = ''
  let isClassmateDeceased
  let classmateStreet = ''
  let classmateCity = ''
  let classmateState = ''
  let classmateZipcode = ''
  let classmatePhone = ''
  let classmateInfo = ''
  let classmateResult = ''

  let isClassmateEmailValid = true
  let isPosterEmailValid = true
  let isPosterNameValid = true
  let isClassmateNameValid
  let isClassmateStateValid = true
  let isClassmateZipcodeValid = true

  let emailResult = ''

  const validateEmail = () => {
    const result = emailValidator(emailFrom)
    isEmailValid = result === true ? true : false
    return
  }

  const validateName = () => {
    const result = nameValidator(emailName)
    isNameValid = result === true ? true : false
    return
  }

  const validateState = () => {
    const result = stateValidator(emailState)
    isStateValid = result === true ? true : false
    return
  }

  const validateZipcode = () => {
    const result = zipcodeValidator(emailZipcode)
    isZipcodeValid = result === true ? true : false
    return
  }

  const handleSubmit = () => {

  }

  const handleBack = async () => {
    await goto(`classmate?back=classmates&name=${ classmateName }&photoId=${ cloudinaryId }&deceased=${ deceased }`)
  }
</script>

<style>
</style>

<section class="flex flex-wrap place-content-center w-full pt-24 pb-24">
  <section class="relative block bg-gray-900 pt-24">
    <div class="container w-full px-4">
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative flex flex-col min-w-0 break-words mb-6 
            shadow-lg rounded-lg bg-gray-300">
            <div class="flex-auto p-5 lg:p-10">
              <h4 class="text-2xl font-semibold">Do you know how to contact { classmateName }?</h4>
              <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                Complete this form if you know more about this classmate to
                help us keep everyone updated about our upcoming reunion!
              </p>

              {#if emailResult !== ''}
                <h2 class="text-green-700 italic">{ emailResult }</h2>
              {/if}

              <form on:submit|preventDefault={ handleSubmit } 
                method="post" enctype="application/json" >
                <div  class="relative w-full mt-8">
                  <h2>
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
                      on:input={ validateName } />
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
                      on:input={ validateEmail } />
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
                  <h2>
                    About { classmateName }
                  </h2>

                  <div class="relative w-full mt-1 mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mt-2 mb-2"
                      for="email">
                      Email
                    </label>
                    <input name="from" bind:value={ classmateEmail } 
                      type="text" required aria-required="true"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                      bg-white rounded text-sm shadow focus:outline-none focus:ring
                      w-full"
                      placeholder="jdoe@domain.com"
                      style="transition: all 0.15s ease 0s;"
                      on:input={ validateEmail } />
                  </div>
                  {#if !isClassmateEmailValid}
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
                    <input name="from" bind:value={ classmateStreet }
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
                      <input name="from" bind:value={ classmateCity }
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
                      <input name="from" bind:value={ classmateState }
                        type="text"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                        bg-white rounded text-sm shadow focus:outline-none focus:ring
                        w-full"
                        placeholder="XX"
                        style="transition: all 0.15s ease 0s;"
                        on:input={ validateState } />
                    </span>
                    <span class="relative w-20 ml-0 md:ml-4 mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="phone">
                        Zipcode
                      </label>
                      <input name="from" bind:value={ classmateZipcode }
                        type="text"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                        bg-white rounded text-sm shadow focus:outline-none focus:ring
                        w-full"
                        placeholder="00000"
                        style="transition: all 0.15s ease 0s;"
                        on:input={ validateZipcode }  />
                    </span>
                  </div>
                  {#if !isClassmateStateValid}
                    <div class="flex justify-end">
                      <div class="place-self-end text-red-500">
                        Please enter a valid 2-character state
                      </div>
                    </div>
                  {/if}
                  {#if !isClassmateZipcodeValid}
                    <div class="flex justify-end">
                      <div class="place-self-end text-red-500">
                        Please enter a valid 5-digit zipcode
                      </div>
                    </div>
                  {/if}

                  <div class="relative w-36 mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="phone">
                      Phone
                    </label>
                    <input name="from" bind:value={ classmatePhone }
                      type="tel"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                      bg-white rounded text-sm shadow focus:outline-none focus:ring
                      w-full"
                      placeholder="(999) 999-9999"
                      style="transition: all 0.15s ease 0s;" />
                  </div>

                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                      for="message">
                      Message (required)
                    </label>
                    <textarea name="message" bind:value={ classmateInfo }
                      rows="4" cols="80" required aria-required="true"
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
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="flex flex-wrap place-content-center w-full ml-0 md:ml-8 mt-8">
    <div class="flex place-content-center text-center w-full mt-6">
      <button on:click={ handleBack }
        class="bg-orange-500 text-white active:bg-gray-700 text-sm
        font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg
        outline-none focus:outline-none mr-1 mb-1"
        style="transition: all 0.15s ease 0s;">
        Back
      </button>
    </div>
  </div>
</section>
