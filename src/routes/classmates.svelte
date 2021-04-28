<script>
  import classmates from '../assets/classmates.json'

  const photoPlaceholder = 'chs_photo_placeholder_otiogp.png'

  const formatName = (firstName, lastName, marriedLastName) => {
    const formattedName = marriedLastName !== '' 
      ? firstName.concat(' (',lastName,') ',marriedLastName) 
      : firstName.concat(' ',lastName)
    return formattedName
  }

  const classmateColumn1Lth = Math.floor(classmates.length / 2)
  let classmateColumn1 = []
  for (let i = 0; i < classmateColumn1Lth; i++) {
    classmateColumn1.push({ 
      name: formatName(classmates[i].firstName, classmates[i].lastName, classmates[i].marriedLastName),
      cloudinaryId: classmates[i].cloudinaryId === '' ? photoPlaceholder : classmates[i].cloudinaryId,
      deceased: classmates[i].deceased,
      confirmed: classmates[i].confirmed,
    })
  }

  const classmateColumn2Lth = classmates.length - classmateColumn1Lth
  let classmateColumn2 = []
  for (let i = classmateColumn1Lth; i < classmates.length; i++) {
    classmateColumn2.push({ 
      name: formatName(classmates[i].firstName, classmates[i].lastName, classmates[i].marriedLastName),
      cloudinaryId: classmates[i].cloudinaryId === '' ? photoPlaceholder : classmates[i].cloudinaryId,
      deceased: classmates[i].deceased,
      confirmed: classmates[i].confirmed,
    })
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
  <div class="container flex flex-wrap justify-center w-full mx-auto lg:py-none px-4">
    <div class="flex w-full justify-center">
      <h1 class="my-12 text-3xl md:text-5xl font-semibold text-center">Class of 1973</h1>
    </div>
    <div class="flex justify-center w-full">
      <div class="flex max-ww-full mb-4 content-start">
        <div class="flex flex-wrap w-full m-0 p-0 justify-center">
          <img
            alt="Homecoming"
            class="max-w-screen-sm lg:max-w-full h-20 md:h-28 lg:h-96 shadow-lg 
              ml-0 md:ml-0 lg:ml-0 mb-8 lg:mb-none
              transform scale-200 md:scale-150 lg:scale-100"
            src="chs_homecoming_float.jpeg" />
        </div>
      </div>
    </div>
    <div class="flex justify-center w-full md:w-5/12 ml-1 p-4 border-gray-300 border-2 shadow-2xl">
      <ul class="mt-2 text-lg text-gray-600 leading-tight">
        {#each classmateColumn1 as classmate}
          <li class="mt-2"><a href="classmate?back=classmates&name={ classmate.name }&photoId={ classmate.cloudinaryId }&deceased={ classmate.deceased }&confirmed={ classmate.confirmed }&">{ classmate.name }</a></li>
        {/each}
      </ul>
      <ul class="ml-2 mt-2 text-lg text-gray-600 leading-tight">
        {#each classmateColumn2 as classmate}
          <li class="mt-2"><a href="classmate?back=classmates&name={ classmate.name }&photoId={ classmate.cloudinaryId }&deceased={ classmate.deceased }&confirmed={ classmate.confirmed }">{ classmate.name }</a></li>
        {/each}
      </ul>
    </div>
  </div>
</section>