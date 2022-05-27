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
    class="relative pt-32 lg:pt-24 pb-28 flex content-center items-center justify-center"
    style="min-height: 60vh;">
    <div
      class="absolute top-0 w-full h-full bg-center bg-cover"
      style="background-image: url('chs_graduation.jpeg');"
    />
    <div class="container relative mx-auto">
      <div class="justify-items-center flex flex-wrap">
        <div class="items-center w-full lg:w-11/12 px-4 ml-auto mr-auto text-center">
          <div class="bg-sepia-800 bg-opacity-40 pr-none">
            <div class="flex flex-row h-full w-full justify-center pt-4">
              <div class="place-self-center pt-4 lg:pt-0">
                <img class="w-16 h-12 lg:w-36 lg:h-28 invisible md:visible" 
                  src="chs_tiger.png" alt="CHS Tiger"/>
              </div>
              <h1 class="text-orange-500 pt-6 font-semibold text-3xl lg:text-6xl">
                Cape Central High - Class of 1973
              </h1>
              <div class="place-self-center pt-4 lg:pt-0">
                <img class="w-16 h-12 lg:w-36 lg:h-28 invisible md:visible" 
                  src="chs_tiger.png" alt="CHS Tiger"/>
              </div>
            </div>
            <div class="flex flex-col rounded m-auto">
              <div class="m-">
                <h2 class="text-white font-semibold text-xl lg:text-4xl">
                  Your story started here!
                </h2>
                <!--
                <p class="mt-10 text-lg lg:text-3xl text-white">
                  These were your formative years. This is the crucible where you
                  developed your identity, your independence, and your drive. It
                  was where you established lifelong friendships, as well as 
                  personal and professional interests.
                </p>
                -->
                <p class="pt-8 pb-4 text-orange-300 text-3xl font-bold">
                  It was the start of your journey...but, certainly not the end!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div
      class="top-auto bottom-0 left-0 right-0 w-full absolute
      pointer-events-none overflow-hidden"
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
  
  <section class="pb-20 bg-gray-900 -mt-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">

        <div class="pt-36 md:pt-48 w-full md:w-4/12 px-4 text-center">
          <div class="flex flex-wrap items-center">
            <div class="w-full px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white
                w-full mb-6 shadow-lg rounded-lg bg-sepia-300">
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
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;">
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-sepia-300 fill-current" />
                  </svg>
                  <div class="text-xl font-bold text-black">
                    Our 50th Reunion!
                  </div>
                  <p class="text-md font-light mt-2 text-black">
                    Our 50th reunion in 2023 is closer than you think. It's 
                    time think back to our time together and to start getting
                    ready!
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

				<div class="pt-8 md:pt-40 w-full md:w-4/12 px-4 text-center">
          <div class="flex flex-wrap items-center">
            <div class="w-full px-4 mr-auto ml-auto">
              <div class="relative flex flex-col min-w-0 break-words bg-white
                w-full mb-6 shadow-lg rounded-lg bg-sepia-300">
                <picture>
                  <img
                    alt="Friends"
                    src="chs_friends.avif"
                    class="w-full align-middle rounded-t-lg" />
                  <source srcset="chs_friends.jpeg" type={`image/jpeg`} />
                </picture>
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;">
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-sepia-300 fill-current" />
                  </svg>
                  <div class="text-xl lg:2xl font-bold text-black">
                    Renew old friendships
                  </div>
                  <p class="text-lg lg:xl font-light mt-2 text-black">
										It's going to be a lot of fun & it's the perfect time and 
                		a great way to reconnect with old friends & acquaintances.                  
									</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>				

        <div class="pt-8 lg:pt-32 w-full md:w-4/12 px-4 text-center">
          <div class="flex flex-wrap items-center">
            <div class="w-full px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white
                w-full mb-6 shadow-lg rounded-lg bg-sepia-300">
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
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;">
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-sepia-300 fill-current" />
                  </svg>
                  <h4 class="text-xl font-bold text-black">
                    Be a Hero & Volunteer
                  </h4>
                  <p class="text-md font-light mt-2 text-black">
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
      class="bottom-auto top-0 left-0 right-0 w-full absolute
      pointer-events-none overflow-hidden -mt-20"
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
    <div class="container mx-auto py-8 lg:py-none px-4">
      <div class="flex flex-wrap">
        <div class="flex justify-center w-full md:w-4/12 m-auto px-4">
          <img
            alt="Stay tuned"
            class="max-w-full rounded-lg shadow-lg mb-8 lg:mb-none"
            src="chs_memories.jpeg" />
        </div>
        <div class="w-full md:w-5/12 m-auto px-4">
          <div class="md:pr-12">
            <h3 class="text-3xl font-semibold">CHS '73 - 50th Reunion Questionnaire</h3>
            <p class="mt-4 text-lg leading-relaxed text-gray-600">
              As we prepare for our 50th Reunion we need to know your 
              preferences to help make this event meaningful and fun for all!
            </p>
            <p class="mt-4 text-lg leading-relaxed text-gray-600">
              Take a few minutes to complete this survey to share your
              thoughts. We'll report back once the results are in.
            </p>
          </div>
          <div class="flex flex-col">
            <div id="questionnaire" class="flex flex-wrap place-self-center w-auto bg-orange-500 text-white active:bg-gray-700 text-lg
            font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg
            outline-none focus:outline-none mt-3 mb-1
            transition duration-300 ease-in-out 
            hover:text-gray-800 hover:font-semibold transform hover:-translate-y-0 hover:scale-110">
              <a class="self-center" href="https://forms.gle/Qh3JGkdBxkAscrxm6" target="_blank">Take me to the Questionnaire!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pb-20 relative block bg-gray-900" id="contact">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute
      pointer-events-none overflow-hidden -mt-20"
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
    <div class="container mx-auto px-4 pt-8 lg:pt-10 lg:pb-56">
      <div class="flex flex-wrap text-center justify-center">
        <div class="w-full lg:w-6/12 px-4">
          <h2 class="text-4xl font-semibold text-white">Get involved!</h2>
        </div>
      </div>
    </div>
  </section>

  <section class="relative block py-24 pt-32 lg:pt-0 bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
        <div class="w-full lg:w-6/12 px-4">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
            <div class="flex-auto p-5 lg:p-10">
              <h4 class="text-2xl font-semibold">We want to hear from you!</h4>
              <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                Complete this form so we can stay in touch and provide valuable 
                updates as they become available - especially if your contact
                info has changed.
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
                  <input name="name" bind:value={ emailName } 
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
                  <input name="from" bind:value={ emailFrom } 
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
                  <input name="from" bind:value={ emailStreet }
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
                    <input name="from" bind:value={ emailCity }
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
                    <input name="from" bind:value={ emailState }
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
                    <input name="from" bind:value={ emailZipcode }
                      type="text"
                      class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                      bg-white rounded text-sm shadow focus:outline-none focus:ring
                      w-full"
                      placeholder="00000"
                      style="transition: all 0.15s ease 0s;"
                      on:input={ validateZipcode }  />
                  </span>
                </div>
                {#if !isStateValid}
                  <div class="flex justify-end">
                    <div class="place-self-end text-red-500">
                      Please enter a valid 2-character state
                    </div>
                  </div>
                {/if}
                {#if !isZipcodeValid}
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
                  <input name="from" bind:value={ emailPhone }
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
                  <textarea name="message" bind:value={ emailMessage }
                    rows="4" cols="80" required aria-required="true"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                    bg-white rounded text-sm shadow focus:outline-none focus:ring
                    w-full" 
                    placeholder="Type a message..." />
                </div>

                <label>
                  <input type="checkbox" bind:checked={ emailVolunteer }>
                  I'd like to help with the reunion
                </label>
          
                <div class="text-center mt-6">
                  <button type="submit"
                    class="bg-orange-500 text-white active:bg-gray-700 text-lg
                    font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg
                    outline-none focus:outline-none mr-1 mb-1
                    transition duration-300 ease-in-out 
                    hover:text-gray-800 hover:font-semibold transform hover:-translate-y-0 hover:scale-110">
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
</main>
