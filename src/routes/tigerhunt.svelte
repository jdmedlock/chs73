<script>
  import { goto } from '$app/navigation'
  import classmatesStore from '../stores/classmates.js'
  import createNameIndex from '../utils/createNameIndex'
  import createPersonGroups from '../utils/createPersonGroups'
  import BackToTop from '../components/BackToTop.svelte'
  import LetterIndex from '../components/LetterIndex.svelte'

  const unconfirmedClassmates = $classmatesStore.filter(classmate => classmate.confirmed === "FALSE")

  const [classmateColumn1, classmateColumn2] = createPersonGroups(unconfirmedClassmates)
  const letterIndex = createNameIndex(classmateColumn1.concat(classmateColumn2))

  console.log('tigerhunt.svelte - classmateColumn1: ', classmateColumn1)

  const handleTigerHunt = async (classmate) => {
    await goto(`updatecontact?back=tigerhunt&lastName=${ classmate.name }&photoId=${ classmate.cloudinaryId }&deceased=${ classmate.deceased }&confirmed=${ classmate.confirmed }&type=classmate`)
  }
</script>

<style>
</style>

<section id="top" class="relative py-12 lg:py-20">
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

  <div class="container flex flex-wrap justify-center w-full  lg:7/12 mx-auto lg:py-none px-4">

    <div class="flex flex-col w-full justify-center text-center">
      <h1 class="my-12 text-3xl md:text-5xl font-semibold">Tiger Hunt!</h1>   
    </div>

    <div class="flex justify-center w-full">
      <div class="flex flex-col max-ww-full mb-4 content-start">
        <div class="flex flex-wrap w-full m-4 p-0 justify-center">
          <picture>
            <img
              alt="TigerHunt"
              class="max-w-screen-sm lg:max-w-full h-20 md:h-28 lg:h-96 shadow-2xl
                ml-0 md:ml-0 lg:ml-0 mb-8 lg:mb-none
                transform scale-200 md:scale-150 lg:scale-100
                shadow-xl-orange lg:shadow-2xl-orange"
              src="chs_tigerhunt.jpeg" />
          </picture>
        </div>
        
        <div class="flex flex-col w-full md:w-2/3 place-self-center text-center text-xl md:text-3xl text-gray-500">
          <p class="">
            Tiger Hunt lets you help locate Classmates by providing up-to-date contact 
            information for people you are in contact with. Help us spread the
            word about our 50th reunion.
          </p>
        </div>
      </div>
    </div>

    <div class="md:flex-row justify-center w-full lg:w-1/2 ml-1 p-4 border-gray-300 border-2 shadow-2xl">
      <div class="flex flex-wrap place-content-center w-full">
        <p><em>Click</em> on a name to see more.</p>
      </div>

      <LetterIndex pageName="tigerhunt" letterIndex={ letterIndex } />

      <div class="flex w-full justify-center">
        <ul class="mt-2 text-md md:text-xl text-gray-600 leading-tight">
          {#each classmateColumn1 as classmate}
            <li id="{ classmate.lastName.toLowerCase().replace(/\s+/g, '') }"
              class="mt-2 transition duration-300 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-gray-300 transform hover:-translate-y-0 hover:scale-110"
              on:click={() => handleTigerHunt(classmate) }>{ classmate.name }</li>
          {/each}
        </ul>
        <ul class="ml-0 md:ml-6 mt-0 md:mt-2 text-lg md:text-xl text-gray-600 
          leading-tight">
          {#each classmateColumn2 as classmate}
            <li id="{ classmate.lastName.toLowerCase().replace(/\s+/g, '') }"
              class="mt-2 transition duration-300 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-gray-300 transform hover:-translate-y-0 hover:scale-110"
              on:click={() => handleTigerHunt(classmate) }>{ classmate.name }</li>
          {/each}
        </ul>

        <BackToTop back="tigerhunt"/>
      </div>
    </div>
  </div>
</section>