<script>
  import { SATURDAY_EVENT } from '../../utils/constants.js'

  export let eventType
  export let isAttendeeError
  export let isClassmateNameError
  export let isEmailError
  export let noAttendees
  export let classmateEmail
  export let classmateFirstName
  export let classmateLastName

  noAttendees = 1
  let showBadgeNames = false
  let pressed = []

  function handleKeydown(e) {
		pressed = [e.key, ...pressed]
    console.log(`pressed: ${pressed}`)
    console.log(`noAttendees: ${noAttendees}`)
	}

</script>

<attendees>
  <li class="flex items-start mt-4">
    <div class="flex-shrink-0">
      <!-- Heroicon name: outline/check -->
      <svg class="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <div class="ml-3 text-base text-gray-700">Who will be attending?</div>
  </li>
  
  <li class="flex items-start ml-8">
    <div class="relative flex flex-col text-left">
      <div>
        <div class="flex items-start w-full ml-5">
          <span class="w-1/2 mb-3">
            <label
              class="block mt-4 mb-2 text-xs font-bold text-gray-700 uppercase flex-nowrap"
              for="classmate-email">
              No attendees:
            </label>
            <input name="classmate-emails" bind:value={ noAttendees } 
              type="text" required aria-required="true"
              class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
              placeholder="No. of attendees"
              style="transition: all 0.15s ease 0s;"
              min="1" max="10"
              on:capture={ noAttendees } 
              on:keydown={ handleKeydown }
            />
          </span>
          {#if isAttendeeError}
            <span name="noAttendeeError" class="flex self-center ml-4 font-bold text-red-700">
              You must enter the number of attendees in your party 
            </span>
          {/if}
        </div>
      </div>

      <div class="flex items-start w-full ml-5">
        <span class="w-1/2 mb-3">
          <label
            class="block mt-4 mb-2 text-xs font-bold text-gray-700 uppercase flex-nowrap"
            for="classmate-email">
            Your email:
          </label>
          <input name="classmate-emails" bind:value={ classmateEmail } 
            type="text" required aria-required="true"
            class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
            placeholder="Your email"
            style="transition: all 0.15s ease 0s;"
            on:capture={ classmateEmail } />
        </span>
        {#if isEmailError}
          <span name="emailError" class="flex self-center ml-4 font-bold text-red-700">
            You must enter your email address
          </span>
        {/if}
      </div>
      <div class="flex flex-wrap w-full gap-1 mt-1 ml-5">
        <div class="grid grid-cols-1 md:grid-cols-2 w-full items-center">
          <div class="w-5/6">
            <label
              class="w-full block mt-1 text-xs font-bold text-gray-700 uppercase"
              for="classmate-firstname">
              You:
            </label>
            <input name="classmate-firstname" bind:value={ classmateFirstName } 
              type="text" required aria-required="true"
              class="w-full px-3 py-3 mt-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
              placeholder="Your first name"
              style="transition: all 0.15s ease 0s;"
              on:capture={ classmateFirstName } />
          </div>
          <div class="w-5/6 mt-0 md:mt-6 lg:mt-2">
            <label
              class="block text-sm font-bold text-gray-700 uppercase"
              for="classmate-lastname">
              &nbsp;
            </label>
            <input name="classmate-lastname" bind:value={ classmateLastName } 
              type="text" required aria-required="true"
              class="w-full px-3 py-3 lg:ml-0 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
              placeholder="Your last name"
              style="transition: all 0.15s ease 0s;"
              on:capture={ classmateLastName } />
          </div>
        </div>
        {#if isClassmateNameError}
          <div name="classmateError" class="font-bold text-red-700">
            You must enter your first and last name for your name badge
          </div>
        {/if}

      </div>
    </div>
  </li>
</attendees>