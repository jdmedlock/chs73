<script>
  import classmatesStore from '../../stores/classmates.js'
  import classmatesPromise from '../../stores/classmatesPromise.js'
  import createNameIndex from '../../utils/createNameIndex'
  import createPersonGroups from '../../utils/createPersonGroups'
  import LetterIndex from '$lib/LetterIndex.svelte'

  let deceased = []
  let classmateColumn1 = []
  let classmateColumn2 = []
  let letterIndex = []

  const getDeceasedClassmates = () => {
    deceased = $classmatesStore.filter((classmate) => classmate.deceased === 'TRUE')
    const [firstClassmateColumn, secondClassmateColumn] = createPersonGroups(deceased)
    classmateColumn1 = firstClassmateColumn
    classmateColumn2 = secondClassmateColumn
    letterIndex = createNameIndex(classmateColumn1.concat(classmateColumn2))
    return ''
  }
  
</script>

<style>
</style>

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
  <div class="container w-full mx-auto lg:py-none px-4">
    <h1 class="my-12 text-3xl md:text-5xl font-semibold text-center">In Memoriam</h1>
    <div class="flex flex-wrap content-center">
      <div class="flex flex-wrap w-full md:w-6/12 mb-4 content-start">
        <div class="flex w-full m-0 p-0 justify-center">
          <img
            alt="Light behind cemetary tree"
            class="max-w-screen-sm lg:max-w-full h-20 md:h-28 lg:h-48 
              ml-0 md:ml-6 lg:ml-0 mb-8 lg:mb-none
              transform scale-x-250 md:scale-x-150 lg:scale-x-250
              shadow-xl-orange lg:shadow-2xl-orange"
            src="chs_lorimer_cemetary.jpeg" />
        </div>
        <div class="text-center">
          <p class="text-lg leading-normal text-gray-600">
            Reading the names on this list as you begin that morning cup of
            coffee changes your day. Every name brings back a memory....a class,
            a date, a conversation.
          </p>
          <div class="text-2xl font-extrabold text-gray-400 leading-snug">~</div>
          <p class="text-lg leading-normal text-gray-600">
            It was a life long ago, but yesterday. We were perched on the rim
            of the world, ready to jump in and make our mark. Hopefully every
            member of this list got to experience life's thrills.
          </p>
          <div class="text-2xl font-extrabold text-gray-400 leading-snug">~</div>
          <p class="text-lg leading-normal text-gray-600">
            A child, an accomplishment, holding hands at the close of the day.
            ...a pat on the back when they needed it most and friends in the 
            final moments.
          </p>
          <div class="text-2xl font-extrabold text-gray-400 leading-snug">~</div>
          <p class="text-lg leading-normal text-gray-600">
            They were all an important part of our lives...our dreams. Hopefully
            those of us that remain will represent those who are gone with
            loving pride and honor these memories that make us smile and laugh.
            and remember that time....
          </p>
          <p class="mt-8 text-sm leading-normal text-gray-600">
            An internet search of what to say here about our classmates who 
            have gone before us turned up this note. Attributions to its 
            author, Bob Condron
          </p>
        </div>
      </div>

      <div class="flex flex-col justify-center w-full md:w-5/12 
        ml-1 md:ml-12 lg:ml-20 px-4 border-gray-300 border-2 shadow-2xl">
        <div class="flex flex-wrap place-content-center w-full">
          <p><em>Click</em> on a name to see more.</p>
        </div>
        {#await $classmatesPromise then value}
          {getDeceasedClassmates()}
          <LetterIndex pageName="memoriam" letterIndex={ letterIndex } />
          <div class="flex w-full justify-center">
            <ul class="mt-2 text-lg text-gray-600 leading-relaxed">
              {#each classmateColumn1 as classmate}
                <li class="transition duration-300 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-gray-300 transform hover:-translate-y-0 hover:scale-110">
                  <a href="classmate?back=memoriam&name={ classmate.name }&photoId={ classmate.cloudinaryId }&deceased={ classmate.deceased }&confirmed={ classmate.confirmed }">
                    { classmate.name }
                  </a>
                </li>          
              {/each}
            </ul>
            <ul class="ml-0 md:ml-6 mt-0 md:mt-2 text-lg text-gray-600 leading-relaxed">
              {#each classmateColumn2 as classmate}
                <li class="transition duration-300 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-gray-300 transform hover:-translate-y-0 hover:scale-110">
                  <a href="classmate?back=memoriam&name={ classmate.name }&photoId={ classmate.cloudinaryId }&deceased={ classmate.deceased }&confirmed={ classmate.confirmed }">
                    { classmate.name }
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        {/await}
      </div>
    </div>
  </div>
</section>