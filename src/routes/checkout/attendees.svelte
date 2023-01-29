<script>
  import { SATURDAY_EVENT } from '../../utils/constants.js'

  export let eventType
  export let isSponsor
  export let handleSponsor
  export let isVeteran
  export let handleVeteran
  export let isAttendeeError
  export let isClassmateNameError
  export let isCompanionNameError
  export let isEmailError
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
    <div class="relative flex flex-col text-left">
      <div>
        <button type="button" class="flex justify-center px-3 py-1 mt-2 ml-5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm no-wrap hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" 
          id="NoAttendeesBtn" aria-expanded="true" aria-haspopup="true" on:click={() => (showAttendees = !showAttendees)}>
          No. Attendees
          <!-- Heroicon name: mini/chevron-down -->
          <svg class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
        <div class="relative z-10 w-8 mt-2 origin-top-right bg-white rounded-md shadow-lg ml-28 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="py-1" role="none">
            <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
            <a href="#top" class="block px-4 py-2 text-sm text-gray-700" 
              role="menuitem" tabindex="0" id="menu-item-0" on:click={ handleNoAttendees }>1</a>
            <a href="#top" class="block px-4 py-2 text-sm text-gray-700" 
              role="menuitem" tabindex="0" id="menu-item-1" on:click={ handleNoAttendees }>2</a>
          </div>
        </div>
      {/if}

      {#if showBadgeNames}
        <div class="flex items-start w-full ml-5">
          <span class="w-1/2 mb-3">
            <label
              class="block mt-2 mb-2 text-xs font-bold text-gray-700 uppercase flex-nowrap"
              for="full-name">
              Your email:
            </label>
            <input name="name" bind:value={ classmateEmail } 
              type="text" required aria-required="true"
              class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
              placeholder="Your email"
              style="transition: all 0.15s ease 0s;"
              on:input={ classmateEmail } />
          </span>
          {#if isEmailError}
            <span name="emailError" class="flex self-center ml-4 font-bold text-red-700">
              You must enter your email address
            </span>
          {/if}
        </div>
        <div class="relative flex flex-wrap w-full gap-1 mt-1 ml-5">
          <span class="relative w-5/12">
            <label
              class="block mt-1 text-xs font-bold text-gray-700 uppercase"
              for="full-name">
              Your name badge:
            </label>
            <input name="name" bind:value={ classmateFirstName } 
              type="text" required aria-required="true"
              class="w-full px-3 py-3 mt-2 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
              placeholder="Your first name"
              style="transition: all 0.15s ease 0s;"
              on:input={ classmateFirstName } />
          </span>
          <span class="relative w-5/12 mt-3">
            <label
              class="block text-xs font-bold text-gray-700 uppercase"
              for="full-name">
              &nbsp;
            </label>
            <input name="name" bind:value={ classmateLastName } 
              type="text" required aria-required="true"
              class="w-full px-3 py-3 ml-2 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
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
            <span class="relative w-5/12">
              <label
                class="block mt-1 text-xs font-bold text-gray-700 uppercase"
                for="full-name">
                Companion name badge:
              </label>
              <input name="name" bind:value={ companionFirstName } 
                type="text" required aria-required="true"
                class="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
                placeholder="Companion first name"
                style="transition: all 0.15s ease 0s;"
                on:input={ companionFirstName } />
            </span>
            <span class="relative w-5/12 mt-1">
              <label
                class="block text-xs font-bold text-gray-700 uppercase"
                for="full-name">
                &nbsp;
              </label>
              <input name="name" bind:value={ companionLastName } 
                type="text" required aria-required="true"
                class="w-full px-3 py-3 ml-2 text-sm text-gray-700 placeholder-gray-400 bg-white border-0 rounded shadow focus:outline-none focus:ring"
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

  {#if eventType === SATURDAY_EVENT}
    <li class="flex items-start mt-4 ml-14">
      <div class="relative flex flex-col text-left">
        <label>
          <input type="checkbox" bind:checked={ isSponsor } on:click|preventDefault={ handleSponsor }/>
          Click here if you'd like to help a classmate who might otherwise not be able to attend. You will be billed for one additional admittance.
        </label>
      </div>
    </li>

    <li class="flex items-start ml-14">
      <div class="relative flex flex-col w-full mt-2 text-left">
        <label>
          <input type="checkbox" bind:checked={ isVeteran } on:click|preventDefault={ handleVeteran }/>
          Click here if you are a Veteran. There's no admission fee for you and your companion.
        </label>
      </div>
    </li>
  {/if}
</attendees>