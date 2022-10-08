<script>
  import classmatesStore from '../stores/classmates.js'
  import classmatesPromiseStore from '../stores/classmatesPromise.js'
  import createNameIndex from '../utils/createNameIndex'
  import createPersonGroups from '../utils/createPersonGroups'
  import BackToTop from '../components/BackToTop.svelte'
  import LetterIndex from '../components/LetterIndex.svelte'

  let letterIndex
  let showGreeting = false
  let classmateColumn1
  let classmateColumn2

  // Retrieve the list of classmates and build the last name index
  if ($classmatesStore.length > 0) {
    const classmateColumns = createPersonGroups($classmatesStore)
    classmateColumn1 = classmateColumns[0]
    classmateColumn2 = classmateColumns[1]
    letterIndex = createNameIndex(classmateColumn1.concat(classmateColumn2))
  } else {
    console.log(`Error retrieving classmates`)
    throw new Error(`No classmates`)
  }

</script>

<style>
</style>

{#await $classmatesPromiseStore then value}

  <section class="relative py-12 lg:py-20">
    <div class="bottom-auto top-0 left-0 right-0 w-full absolute
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

    <div class="container flex flex-wrap justify-center w-full lg:7/12 mx-auto 
      lg:py-none px-4">
      <div class="flex w-full justify-center">
        <h1 class="my-12 text-3xl md:text-5xl font-semibold text-center">
          Class of 1973
        </h1>
      </div>

      <div class="flex justify-center w-full">
        <div class="flex max-w-full mb-4 content-start">
          <div class="flex flex-wrap w-full m-0 p-0 justify-center">
            <img
              alt="Homecoming"
              class="max-w-screen-sm lg:max-w-full h-20 md:h-28 lg:h-96 shadow-2xl 
                ml-0 md:ml-0 lg:ml-0 mb-8 lg:mb-none
                transform scale-200 md:scale-150 lg:scale-100
                border-0 shadow-xl-orange lg:shadow-2xl-orange"
              src="chs_homecoming_float.jpeg" />
          </div>
        </div>
      </div>

      <div class="flex flex-col w-full mt-4 md:mt-0 mb-2 text-xl md:text-xl text-gray-500">
        <div class="flex flex-col flex-wrap w-3/4 justify-center m-auto">

          <div on:click={ () => showGreeting = !showGreeting }>
            <div class="text-xl md:text-3xl font-bold md:font-extrabold underline 
              italic text-center">
              3 Valuable Life Lessons Learned from a 50 Year Class Reunion
            </div>
            <div class="text-xl md:text-2xl text-center mb-4">
              <div>by Ken Hill - Motivational Speaker</div>
              <!--
              <a href="https://www.kendavis.com/relationships-2/3-valuable-life-lessons-learned-from-a-50-year-class-reunion/">
                by Ken Hill - Motivational Speaker
              </a>
              -->
              (Click to display/hide)
            </div>
          </div>

          {#if showGreeting}
            <div class="mt-2">
              <p>
                Last month I attended my 50 year class reunion. Cotton High School. 
                Class of 1946. It was a highlight of my year. I came away with 
                some valuable insights I wish I had learned long ago.
              </p>
            </div>

            <ol class="list-decimal mt-4">
              <li class="text-xl md:text-2xl font-bold">Time is not on our side.</li>
              <p class="mt-2 ml-0.5">
                Time doesn’t take sides. Time can be an enemy or a friend. It’s what 
                we make it. It is a window of opportunity. We are each given an 
                unknown allotment of time to be optimized or wasted and every second 
                of every day the allotment diminishes. This shouldn’t be depressing, 
                it should be a motivating truth that drives us to cherish and 
                maximize every moment.
              </p>
              <p class="mt-2 ml-0.5">
                Several of my classmates were not with us because they had run 
                out of time. All of us who were there knew time had changed us.  
                We were grateful to use this day to renew friendships and remember 
                the gift of time together we had been given 50 years before.
              </p>

              <li class="text-xl md:text-2xl font-bold mt-4">We shouldn’t allow time to erase past relationships.</li>
              <p class="mt-2 ml-0.5">
                You might ask, “Why should anyone try to keep in touch with 
                classmates from 50 years ago?” Because we were friends. Because 
                every one of our classmates are children of God. Time doesn’t 
                change that.
              </p>
              <p class="mt-2 ml-0.5">
                I spent 12 years with my classmates. Getting my diploma was not 
                an excuse for not keeping aware of what is happening in their 
                lives. Every relationship we have is a gift to be cherished and 
                with today’s technology there is no excuse for not staying 
                informed. I’m not suggesting that we have to constantly 
                communicate with everyone we meet, but I regret not staying 
                connected.
              </p>
              <p class="mt-2 ml-0.5">
                Had I kept in touch, I could have known of the personal loss some 
                of them suffered. I could have prayed for my friends as they 
                faced challenges and cheered their victories. I can’t do it over 
                but I am committed to keeping track of these wonderful people.
              </p>
              <p class="mt-2 ml-0.5">
                I know that the busyness of our own personal lives and careers 
                makes it hard to keep up with old friends. But I came away from 
                this reunion wondering…
              </p>
              <div class="flex m-4 justify-center">
                <p class="text-3xl font-bold italic">
                  “If we are too busy to nourish old relationships, perhaps we are 
                  too busy.”
                </p>
              </div>

              <li class="text-xl md:text-2xl font-bold">Time destroys the artificial social structure 
                of High School. Thank God!</li>
              <p class="mt-2 ml-0.5">
                High School was filled with intricate strata of cliques;  jocks, 
                geeks, brains, cowboys, farmers, goody two shoes, quiet people, 
                rowdy people, trouble makers, bookworms, the in crowd.
              </p>
              <p class="mt-2 ml-0.5">
                <em>All of that nonsense dissolves with time.</em> The people at 
                a 50 year reunion aren’t trying to impress anyone. We reveled in 
                memories of youth and gloried in sharing the blessing and 
                difficulties time has brought our way.
              </p>
              <p class="mt-2 ml-0.5">
                I had more fun reconnecting and reminiscing with my old friends 
                than I’ve have had in a long time. I want to thank Linda, Buddy, 
                Gary, Patty, Kent, Curtis, Duane and Richard for taking time to 
                come. You made my 50 year reunion a remarkable, memorable day. 
                You reminded me of the relentless march of time and the importance 
                of relationships. See you next year!
              </p>
            </ol>
          {/if}

        </div>

      </div>

      <div class="md:flex-row justify-center w-full lg:w-1/2 ml-1 py-2 
        border-gray-300 border-2 shadow-2xl mt-4">
        <div class="flex flex-wrap place-content-center w-full">
          <p><em>Click</em> on a name to see more.</p>
        </div>

        <LetterIndex pageName="classmates" letterIndex={ letterIndex } />

        <div class="flex w-full justify-center">
          <ul class="ml-2 text-lg text-gray-600 leading-tight">
            {#each classmateColumn1 || [] as classmate}
              <li class="mt-2 transition duration-300 ease-in-out 
                hover:text-orange-500 hover:font-semibold hover:bg-gray-300 
                transform hover:-translate-y-0 hover:scale-110">
                <a id="{ classmate.lastName.toLowerCase().replace(/\s+/g, '') }"
                  href="classmate?back=classmates&firstName={ classmate.firstName }&lastName={ classmate.lastName }&name={ classmate.name }&photoId={ classmate.cloudinaryId }&deceased={ classmate.deceased }&confirmed={ classmate.confirmed }&">
                  { classmate.name }
                </a>
              </li>
            {/each}
          </ul>

          <ul class="ml-0 md:ml-6 text-lg text-gray-600 leading-tight">
            {#each classmateColumn2 || [] as classmate}
              <li class="mt-2 transition duration-300 ease-in-out 
              hover:text-orange-500 hover:font-semibold hover:bg-gray-300 
                transform hover:-translate-y-0 hover:scale-110">
                <a id="{ classmate.lastName.toLowerCase().replace(/\s+/g, '') }"
                  class="" 
                  href="classmate?back=classmates&firstName={ classmate.firstName }&lastName={ classmate.lastName }&name={ classmate.name }&photoId={ classmate.cloudinaryId }&deceased={ classmate.deceased }&confirmed={ classmate.confirmed }">
                  { classmate.name }
                </a>
              </li>
            {/each}
          </ul>

          <BackToTop back="classmates"/>
        </div>
      </div>
    </div>

  </section>
{/await}