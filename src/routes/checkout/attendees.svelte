<script>
  import { FRIDAY_EVENT } from '../../utils/constants.js'

  export let eventType
  export let isVeteran
  export let isAttendeeError
  export let isClassmateNameError
  export let isCompanionNameError
  export let calculateOrder
  export let noAttendees
  export let classmateEmail
  export let classmateFirstName
  export let classmateLastName
  export let companionFirstName
  export let companionLastName

  let showAttendees
  let showBadgeNames
  
  const handleNoAttendees = (event) => {
    noAttendees = parseInt(event.target.text)
    calculateOrder()
    showAttendees = false
    showBadgeNames = true
  }
</script>

<attendees>
  <li class="flex items-start ml-8">
    <div class="flex flex-col relative text-left">
      <div>
        <button type="button" class="flex no-wrap justify-center rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" 
          id="NoAttendeesBtn" aria-expanded="true" aria-haspopup="true" on:click={() => (showAttendees = !showAttendees)}>
          No. Attendees
          <!-- Heroicon name: mini/chevron-down -->
          <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
        {#if isAttendeeError}
          <div name="attendeeError" class="font-bold text-red-700">
            You must choose the number of attendees before selecting a payment option
          </div>
        {/if}
      </div>

      {#if showAttendees}
        <div class="relative w-8 ml-28 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="py-1" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <a href="#top" class="text-gray-700 block px-4 py-2 text-sm" 
              role="menuitem" tabindex="0" id="menu-item-0" on:click={ handleNoAttendees }>1</a>
            <a href="#top" class="text-gray-700 block px-4 py-2 text-sm" 
              role="menuitem" tabindex="0" id="menu-item-1" on:click={ handleNoAttendees }>2</a>
          </div>
        </div>
      {/if}

      {#if showBadgeNames}
        <div class="flex flex-wrap relative gap-1 w-full ml-5 mb-3 mt-1 ">
          {#if eventType === FRIDAY_EVENT || isVeteran}
            <span class="relative w-5/12 mb-3">
              <label
                class="flex-nowrap block uppercase text-gray-700 text-xs font-bold mb-2"
                for="full-name">
                Your email:
              </label>
              <input name="name" bind:value={ classmateEmail } 
                type="text" required aria-required="true"
                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                bg-white rounded text-sm shadow focus:outline-none focus:ring
                w-full"
                placeholder="Your email"
                style="transition: all 0.15s ease 0s;"
                on:input={ classmateEmail } />
            </span>
            <span class="relative w-5/12 mb-3">
            </span>
          {/if}
          <span class="relative w-5/12 mb-3">
            <label
              class="flex-nowrap block uppercase text-gray-700 text-xs font-bold mb-2"
              for="full-name">
              Your name badge:
            </label>
            <input name="name" bind:value={ classmateFirstName } 
              type="text" required aria-required="true"
              class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
              bg-white rounded text-sm shadow focus:outline-none focus:ring
              w-full"
              placeholder="Your first name"
              style="transition: all 0.15s ease 0s;"
              on:input={ classmateFirstName } />
          </span>
          <span class="relative w-5/12 mb-3">
            <label
              class="block uppercase text-gray-700 text-xs font-bold mb-2"
              for="full-name">
              &nbsp;
            </label>
            <input name="name" bind:value={ classmateLastName } 
              type="text" required aria-required="true"
              class="border-0 ml-2 px-3 py-3 placeholder-gray-400 text-gray-700
              bg-white rounded text-sm shadow focus:outline-none focus:ring
              w-full"
              placeholder="Your last name"
              style="transition: all 0.15s ease 0s;"
              on:input={ classmateLastName } />
          </span>
          {#if isClassmateNameError}
            <div name="classmateError" class="font-bold text-red-700">
              You must enter your first and last name for your name badge
            </div>
          {/if}
          {#if noAttendees > 1}
            <span class="relative w-5/12 mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                for="full-name">
                Companion name badge:
              </label>
              <input name="name" bind:value={ companionFirstName } 
                type="text" required aria-required="true"
                class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700
                bg-white rounded text-sm shadow focus:outline-none focus:ring
                w-full"
                placeholder="Companion first name"
                style="transition: all 0.15s ease 0s;"
                on:input={ companionFirstName } />
            </span>
            <span class="relative w-5/12 mb-3">
              <label
                class="block uppercase text-gray-700 text-xs font-bold mb-2"
                for="full-name">
                &nbsp;
              </label>
              <input name="name" bind:value={ companionLastName } 
                type="text" required aria-required="true"
                class="border-0 ml-1 px-3 py-3 placeholder-gray-400 text-gray-700
                bg-white rounded text-sm shadow focus:outline-none focus:ring
                w-full"
                placeholder="Companion last name"
                style="transition: all 0.15s ease 0s;"
                on:input={ companionLastName } />
            </span>
            {#if isCompanionNameError}
              <div name="companionError" class="font-bold text-red-700">
                You must enter your companions first and last name for their name badge
              </div>
            {/if}
          {/if}
        </div>
      {/if}
    </div>
  </li>
</attendees>