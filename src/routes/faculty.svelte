<script>
  import faculty from '../assets/faculty.json'
  import createPersonGroups from '../utils/createPersonGroups'

  const [facultyColumn1, facultyColumn2] = createPersonGroups(faculty)
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
  <div class="container flex flex-wrap justify-center w-full mx-auto lg:py-none px-4">
    <div class="flex w-full justify-center">
      <h1 class="my-12 text-3xl md:text-5xl font-semibold text-center">Faculty & Staff of 1973</h1>
    </div>
    <div class="flex justify-center w-full">
      <div class="flex max-ww-full mb-4 content-start">
        <div class="flex flex-wrap w-full m-0 p-0 justify-center">
          <picture>
            <img
              alt="Homecoming"
              class="max-w-screen-sm lg:max-w-full h-20 md:h-28 lg:h-96 
                shadow-xl-orange lg:shadow-2xl-orange 
                ml-0 md:ml-0 lg:ml-0 mb-12 md:mb-8 lg:mb-none
                transform scale-200 md:scale-150 lg:scale-100"
              src="chs_faculty_finley.jpeg" />
          </picture>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-center w-full md:w-5/12 ml-1 p-4 border-gray-300 border-2 shadow-2xl">
      <ul class="mt-2 text-lg text-gray-600 leading-tight">
        {#each facultyColumn1 as facultyMember}
          <li class="mt-2 transition duration-300 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-gray-300 transform hover:-translate-y-0 hover:scale-110">
            <a id="{ facultyMember.name.toLowerCase().replace(/\s+/g, '') }"
              href="facultymember?back=faculty&name={ facultyMember.name }&photoId={ facultyMember.cloudinaryId }&department={ facultyMember.department }&position={ facultyMember.position }&deceased={ facultyMember.deceased }&confirmed={facultyMember.confirmed}">
              { facultyMember.name }
            </a>
          </li>
        {/each}
      </ul>
      <ul class="ml-0 md:ml-6 mt-0 md:mt-2 text-lg text-gray-600 leading-tight">
        {#each facultyColumn2 as facultyMember}
          <li class="mt-2 transition duration-300 ease-in-out hover:text-orange-500 hover:font-semibold hover:bg-gray-300 transform hover:-translate-y-0 hover:scale-110">
            <a id="{ facultyMember.name.toLowerCase().replace(/\s+/g, '') }"
              href="facultymember?back=faculty&name={ facultyMember.name }&photoId={ facultyMember.cloudinaryId }&department={ facultyMember.department }&position={ facultyMember.position }&deceased={ facultyMember.deceased }&confirmed={facultyMember.confirmed}">
              { facultyMember.name }
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>