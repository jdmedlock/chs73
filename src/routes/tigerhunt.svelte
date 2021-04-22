<script>
  import { goto } from '@sapper/app'
  import { Image } from '@cloudinary/svelte'

  let params
  let back
  let classmateName
  let cloudinaryId
  let deceased

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

  if (process.browser) {
    params = new URLSearchParams(window.location.search)
    back = params.get('back')
    name = params.get('name')
    cloudinaryId = params.get('photoId')
    deceased = params.get('deceased')
  }

  const handleBack = async () => {
    await goto(back)
  }
</script>

<style>
</style>

<section class="flex flex-wrap place-content-center w-full">
  <div class="flex flex-wrap place-content-center ml-0 md:ml-8 mt-32">
    {#if cloudinaryId !== ""}
      <Image class="text-center"
        cloud_name="{ process.env.CLOUDINARY_NAME }" 
        public_id={ cloudinaryId }
        transformation="{[
          { width: 400, height: 400, gravity: 'face', radius: 'max', crop: 'crop' },
          { width: 200, crop: 'scale' }
        ]}" />
    {/if}
    <div class="place-self-center ml-0 md:ml-8 text-3xl md:text-6xl font-semibold">
      <p class="place-self-center ml-0 md:ml-8 text-3xl md:text-6xl font-semibold">{ name }</p>
      {#if deceased === 'TRUE'}
        <p class="text-center w-full text-xl mt-4 md:text-3xl font-normal">(Deceased)</p>
      {/if}
    </div>
  </div>

  <section class="relative block py-24 pt-32 lg:pt-0 bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
            <div class="flex-auto p-5 lg:p-10">
              <h4 class="text-2xl font-semibold">We want to hear from you!</h4>
              <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                Complete this form so we can stay in touch and provide valuable 
                updates as they become available.
              </p>
              <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                We'll be reaching out in the coming months to get your input
                on the when, where and what you’d 
                like to see in your 50th High School Class Reunion.
              </p>
              <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                Please share your thoughts and questions and we'll get back 
                to you as soon as possible.
              </p>
              {#if emailResult !== ''}
                <h2 class="text-green-700 italic">{ emailResult }</h2>
              {/if}

              <form on:submit|preventDefault={ handleSubmit } 
                method="post" enctype="application/json" >
                <div class="relative w-full mb-3 mt-8">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="full-name">
                    Full Name (required)
                  </label>
                  <input name="name" bind:value={ classmateName } 
                    type="text" required aria-required="true"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                    bg-white rounded text-sm shadow focus:outline-none focus:ring
                    w-full"
                    placeholder="First Last"
                    style="transition: all 0.15s ease 0s;"
                    on:input={ validateName } />
                </div>
                {#if !isNameValid}
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
                  <input name="from" bind:value={ classmateEmail } 
                    type="text" required aria-required="true"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                    bg-white rounded text-sm shadow focus:outline-none focus:ring
                    w-full"
                    placeholder="jdoe@domain.com"
                    style="transition: all 0.15s ease 0s;"
                    on:input={ validateEmail } />
                </div>
                {#if !isEmailValid}
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

  <div class="flex flex-wrap place-content-center w-full ml-0 md:ml-8 mt-20">
    <div class="flex place-content-center text-center w-full mt-6">
      <button on:click={ handleBack }
        class="bg-orange-500 text-white active:bg-gray-700 text-sm
        font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg
        outline-none focus:outline-none mr-1 mb-1"
        style="transition: all 0.15s ease 0s;">
        Back
      </button>
      <button on:click={ handleBack }
        class="bg-orange-500 text-white active:bg-gray-700 text-sm
        font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg
        outline-none focus:outline-none pt-3 mb-1"
        style="transition: all 0.15s ease 0s;">
        <div class="flex flex-wrap place-self-center w-full m-0">
          <img src="chs_tiger_36.png" alt="CHS Tiger"/>
          <div class="ml-2 self-center">
            Tiger Hunt
          </div>
        </div>
      </button>
    </div>
  </div>
</section>
