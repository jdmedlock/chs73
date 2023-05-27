<script>
  import { client } from '../utils/graphql.js'
  import { emailValidator, nameValidator, stateValidator, zipcodeValidator } from '../utils/validators.js'

  let emailName = ''
  let emailFrom = ''
  let emailStreet = ''
  let emailCity = ''
  let emailState = ''
  let emailZipcode = ''
  let emailPhone = ''
  let emailMessage = ''
  let emailVolunteer = false
  let emailResult = ''

  let isEmailValid = true
  let isNameValid = true
  let isStateValid = true
  let isZipcodeValid = true

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

  const handleSubmit = async () => {
    if (!isNameValid || !isEmailValid || !isStateValid || !isZipcodeValid) {
      return
    }

    emailZipcode = parseInt(emailZipcode)

    return client(fetch)
      .request({
        query: `
          mutation sendMessage(
            $emailFrom: String!
            $emailName: String!
            $emailStreet: String
            $emailCity: String
            $emailState: String
            $emailZipcode: Int
            $emailPhone: String
            $emailMessage: String!
            $emailVolunteer: Boolean
          ) {
            sendMessage (
              fromEmail: $emailFrom
              fullName: $emailName
              street: $emailStreet
              city: $emailCity
              state: $emailState
              zipcode: $emailZipcode
              phone: $emailPhone
              message: $emailMessage
              volunteer: $emailVolunteer
            ) {
              result {
                message
                code
              }
            }
          }        
        `,
        variables: {
          emailFrom,
          emailName,
          emailStreet,
          emailCity,
          emailState,
          emailZipcode,
          emailPhone,
          emailMessage,
          emailVolunteer,
        }
      })
      .then(response => {
        console.log('response: ', response)

        emailFrom = ''
        emailName = ''
        emailMessage = ''
        emailStreet = ''
        emailCity = ''
        emailState = ''
        emailZipcode = ''
        emailPhone = ''
        emailVolunteer = false
        emailResult = response.sendMessage.result.code === "OK" 
          ? "Your message was successfully sent!"
          : "An error occurred sending your message. Please try later"
        isEmailValid = true
        isNameValid = true
        isStateValid = true
        isZipcodeValid = true
        
        return {
          response
        }
      });
  }
</script>

<!-- svelte-ignore a11y-media-has-caption -->

<!-- Based on https://www.creative-tim.com/learning-lab/tailwind-starter-kit/landing -->
<main>
  <section
    class="relative flex items-center content-center justify-center pt-32 lg:pt-24 pb-28"
    style="min-height: 60vh;">
    <div
      class="absolute top-0 w-full h-full bg-center bg-cover"
      style="background-image: url('chs_graduation2.webp');"
    />
    <div class="container relative mx-auto">
      <div class="flex flex-wrap justify-items-center">
        <div class="items-center w-full px-4 ml-auto mr-auto text-center lg:w-11/12">
          <div class="bg-sepia-800 bg-opacity-40 pr-none">
            <div class="flex flex-row justify-center w-full h-full pt-4">
              <div class="pt-4 place-self-center lg:pt-0">
                <img class="invisible w-16 h-12 lg:w-36 lg:h-28 md:visible" 
                  src="chs_tiger.png" alt="CHS Tiger"/>
              </div>
              <h1 id="title" class="pt-6 text-3xl font-semibold text-orange-500 lg:text-6xl">
                Cape Central High - Class of 1973
              </h1>
              <div class="pt-4 place-self-center lg:pt-0">
                <img class="invisible w-16 h-12 lg:w-36 lg:h-28 md:visible" 
                  src="chs_tiger.png" alt="CHS Tiger"/>
              </div>
            </div>
            <div class="flex flex-col m-auto rounded">
              <div class="m-">
                <h2 class="text-xl font-semibold text-white lg:text-4xl">
                  Your story started here!
                </h2>
                <!--
                <p class="mt-10 text-lg text-white lg:text-3xl">
                  These were your formative years. This is the crucible where you
                  developed your identity, your independence, and your drive. It
                  was where you established lifelong friendships, as well as 
                  personal and professional interests.
                </p>
                -->
                <p class="pt-8 pb-4 text-3xl font-bold text-orange-300">
                  It was the start of your journey...but, certainly not the end!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div
      class="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
      style="height: 70px;">
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0">
        <polygon
          class="text-gray-900 fill-current"
          points="2560 0 2560 100 0 100" />
      </svg>
    </div>
  </section>
  
  <section class="pb-20 -mt-24 bg-gray-900">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap">

        <div class="w-full px-4 text-center pt-36 md:pt-48 md:w-4/12">
          <div class="flex flex-wrap items-center">
            <div class="w-full px-4 ml-auto mr-auto">
              <div
                class="relative flex flex-col w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-sepia-300">
                <picture>
                  <img
                    alt="Graduation"
                    src="chs_students_office.jpeg"
                    class="w-full align-middle rounded-t-lg" />
                </picture>
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 block w-full"
                    style="height: 95px; top: -94px;">
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="fill-current text-sepia-300" />
                  </svg>
                  <div class="text-xl font-bold text-black">
                    Our 50th Reunion!
                  </div>
                  <p class="mt-2 font-light text-black text-md">
                    Our 50th reunion in 2023 is closer than you think. It's 
                    time think back to our time together and to start getting
                    ready!
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

				<div class="w-full px-4 pt-8 text-center md:pt-40 md:w-4/12">
          <div class="flex flex-wrap items-center">
            <div class="w-full px-4 ml-auto mr-auto">
              <div class="relative flex flex-col w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-sepia-300">
                <picture>
                  <img
                    alt="Friends"
                    src="chs_friends.webp"
                    class="w-full align-middle rounded-t-lg" />
                  <source srcset="chs_friends.jpeg" type={`image/jpeg`} />
                </picture>
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 block w-full"
                    style="height: 95px; top: -94px;">
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="fill-current text-sepia-300" />
                  </svg>
                  <div class="text-xl font-bold text-black lg:2xl">
                    Renew old friendships
                  </div>
                  <p class="mt-2 text-lg font-light text-black lg:xl">
										It's going to be a lot of fun & it's the perfect time and 
                		a great way to reconnect with old friends & acquaintances.                  
									</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>				

        <div class="w-full px-4 pt-8 text-center lg:pt-32 md:w-4/12">
          <div class="flex flex-wrap items-center">
            <div class="w-full px-4 ml-auto mr-auto">
              <div
                class="relative flex flex-col w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-sepia-300">
                <picture>
                  <img
                    alt="Track"
                    src="chs_be_a_hero.jpeg"
                    class="w-full align-middle rounded-t-lg" />
                </picture>
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 block w-full"
                    style="height: 95px; top: -94px;">
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="fill-current text-sepia-300" />
                  </svg>
                  <h4 class="text-xl font-bold text-black">
                    Be a Hero & Volunteer
                  </h4>
                  <p class="mt-2 font-light text-black text-md">
                    Locating all of our classmates is a huge job & we’d love
                    your help.  Our goal is to invite all to participate in 
                    the when, where, what of OUR event.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="relative py-12 lg:py-20">
    <div
      class="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
      style="height: 80px;">
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
    <div class="flex items-center px-4 py-8 mx-auto lg:py-none">
      <div class="flex flex-wrap">
        <div class="flex justify-center w-full px-4 m-auto md:w-4/12">
          <img
            alt="Stay tuned"
            class="max-w-full mb-8 rounded-lg shadow-lg lg:mb-none"
            src="chs_memories.jpeg" />
        </div>
        <div class="w-full m-auto md:w-5/12">
          <div class="md:pr-12">
            <h3 class="text-3xl font-semibold">CHS '73 - 50th Reunion Events</h3>
            <p class="mt-4 text-lg leading-relaxed text-gray-600">
              We have some fun get together's planned to help you re-live 
              memories and reconnect with old friends.
            </p>
            <p class="mt-4 text-lg leading-relaxed text-gray-600">
              Take a few minutes to check them out in `events` and sign up to 
              attend one or all of them. We hope to see you there!
            </p>
            <div class="mt-4 text-lg leading-relaxed text-red-600">
              You'll need to go to each event you wish to attend and then
              <span class="text-2xl italic text-red-600 bold">'Click for More Info'</span> to register.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="relative block pb-20 bg-gray-900" id="contact">
    <div
      class="absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none"
      style="height: 80px;">
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0">
        <polygon
          class="text-gray-900 fill-current"
          points="2560 0 2560 100 0 100" />
      </svg>
    </div>
    <div class="container px-4 pt-8 mx-auto lg:pt-10 lg:pb-56">
      <div class="flex flex-wrap justify-center text-center">
        <div class="w-full px-4 lg:w-6/12">
          <h2 class="text-4xl font-semibold text-white">Get involved!</h2>
        </div>
      </div>
    </div>
  </section>

  <section class="relative block py-24 pt-32 bg-gray-900 lg:pt-0">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap justify-center -mt-48 lg:-mt-64">
        <div class="w-full px-4 lg:w-6/12">
          <div class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-gray-300 rounded-lg shadow-lg">
            <div class="flex-auto p-5 lg:p-10">
              <h4 class="text-2xl font-semibold">We want to hear from you!</h4>
              <p class="mt-1 mb-4 leading-relaxed text-gray-600">
                Complete this form so we can stay in touch and provide valuable 
                updates as they become available - especially if your contact
                info has changed.
              </p>
              <p class="mt-1 mb-4 leading-relaxed text-gray-600">
                Please share your thoughts and questions and we'll get back 
                to you as soon as possible.
              </p>
              {#if emailResult !== ''}
                <h2 class="italic text-green-700">{ emailResult }</h2>
              {/if}

              <form on:submit|preventDefault={ handleSubmit } 
                method="post" enctype="application/json" >
                <div class="relative w-full mt-8 mb-3">
                  <label
                    class="block mb-2 text-xs font-bold text-gray-700 uppercase"
                    for="full-name">
                    Full Name (required)
                  </label>
                  <input name="name" bind:value={ emailName } 
                    type="text" required aria-required="true"
                    class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
                    placeholder="First Last"
                    style="transition: all 0.15s ease 0s;"
                    on:input={ validateName } />
                </div>
                {#if !isNameValid}
                  <div class="flex justify-end">
                    <div class="text-red-500 place-self-end">
                      Please enter your first & last name
                    </div>
                  </div>
                {/if}

                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold text-gray-700 uppercase"
                    for="email">
                    Email (required)
                  </label>
                  <input name="from" bind:value={ emailFrom } 
                    type="text" required aria-required="true"
                    class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
                    placeholder="jdoe@domain.com"
                    style="transition: all 0.15s ease 0s;"
                    on:input={ validateEmail } />
                </div>
                {#if !isEmailValid}
                  <div class="flex justify-end">
                    <div class="text-red-500 place-self-end">
                      Please enter a valid email
                    </div>
                  </div>
                {/if}

                <div class="relative w-full mb-3">
                  <label
                    class="block mb-3 text-xs font-bold text-gray-700 uppercase"
                    for="street">
                    Street 
                  </label>
                  <input name="from" bind:value={ emailStreet }
                    type="text"
                    class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
                    placeholder="1111 Any St."
                    style="transition: all 0.15s ease 0s;" />
                </div>

                <div class="relative flex flex-wrap w-full mb-1">
                  <span class="w-8/12 mb-3 relaive">
                    <label
                      class="block mb-2 text-xs font-bold text-gray-700 uppercase"
                      for="city">
                      City 
                    </label>
                    <input name="from" bind:value={ emailCity }
                      type="text"
                      class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
                      placeholder="Anytown"
                      style="transition: all 0.15s ease 0s;" />
                  </span>
                  <span class="relative mb-3 ml-4 w-14">
                    <label
                      class="block mb-2 text-xs font-bold text-gray-700 uppercase"
                      for="state">
                      State 
                    </label>
                    <input name="from" bind:value={ emailState }
                      type="text"
                      class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
                      placeholder="XX"
                      style="transition: all 0.15s ease 0s;"
                      on:input={ validateState } />
                  </span>
                  <span class="relative w-20 mb-3 ml-0 md:ml-4">
                    <label
                      class="block mb-2 text-xs font-bold text-gray-700 uppercase"
                      for="phone">
                      Zipcode
                    </label>
                    <input name="from" bind:value={ emailZipcode }
                      type="text"
                      class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
                      placeholder="00000"
                      style="transition: all 0.15s ease 0s;"
                      on:input={ validateZipcode }  />
                  </span>
                </div>
                {#if !isStateValid}
                  <div class="flex justify-end">
                    <div class="text-red-500 place-self-end">
                      Please enter a valid 2-character state
                    </div>
                  </div>
                {/if}
                {#if !isZipcodeValid}
                  <div class="flex justify-end">
                    <div class="text-red-500 place-self-end">
                      Please enter a valid 5-digit zipcode
                    </div>
                  </div>
                {/if}

                <div class="relative mb-3 w-36">
                  <label
                    class="block mb-2 text-xs font-bold text-gray-700 uppercase"
                    for="phone">
                    Phone
                  </label>
                  <input name="from" bind:value={ emailPhone }
                    type="tel"
                    class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
                    placeholder="(999) 999-9999"
                    style="transition: all 0.15s ease 0s;" />
                </div>

                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold text-gray-700 uppercase"
                    for="message">
                    Message (required)
                  </label>
                  <textarea name="message" bind:value={ emailMessage }
                    rows="4" cols="80" required aria-required="true"
                    class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring" 
                    placeholder="Type a message..." />
                </div>

                <label>
                  <input type="checkbox" bind:checked={ emailVolunteer }>
                  I'd like to help with the reunion
                </label>
          
                <div class="mt-6 text-center">
                  <button type="submit"
                    class="px-6 py-3 mb-1 mr-1 text-lg font-bold text-white uppercase transition duration-300 ease-in-out transform bg-orange-500 rounded shadow outline-none active:bg-gray-700 hover:shadow-lg focus:outline-none hover:text-gray-800 hover:font-semibold hover:-translate-y-0 hover:scale-110">
                    Send Message
                  </button>
                </div>
              </form>
              <p class="mt-4 text-2xl italic font-bold leading-relaxed text-center text-red-600">
                Don't forget to register for all the events you plan to attend!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
