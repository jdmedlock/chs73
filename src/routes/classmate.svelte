<script context="module">
	export async function preload(page, session) {
		return { 
      params: {
        back: page.query.back,
        firstName: page.query.firstName,
        classmateName: page.query.name,
        cloudinaryId: page.query.photoId,
        deceased: page.query.deceased,
        confirmed: page.query.confirmed,
      }
    }
  }
</script>

<script>
  import { goto } from '@sapper/app'
  import { Image } from '@cloudinary/svelte'

  export let params
  let { back, firstName, classmateName, cloudinaryId, deceased, confirmed } = params

  console.log(`classmate - back: ${ back } firstName: ${ firstName } name: ${ classmateName } cloudinaryId: ${ cloudinaryId } deceased: ${ deceased } confirmed: ${ confirmed }`)

  let backPage = back === "classmate" ? "classmates" : back

  const handleTigerHunt = async () => {
    await goto(`updatecontact?back=classmate&name=${ classmateName }&photoId=${ cloudinaryId }&deceased=${ deceased }&confirmed=${ confirmed }&type=classmate`)
  }

</script>

<style>
</style>

<section class="flex flex-wrap place-content-center w-full">
  <div class="flex flex-wrap place-content-center ml-0 md:ml-8 mt-20">
    {#if cloudinaryId !== ""}
      <Image class="text-center"
        cloud_name="{ process.env.CLOUDINARY_NAME }" 
        public_id={ cloudinaryId }
        transformation="{[
          { width: 400, height: 400, gravity: 'face', radius: 'max', crop: 'crop' },
          { width: 200, crop: 'scale' }
        ]}" />
    {/if}
    <div class="flex flex-col w-full
      text-3xl md:text-6xl font-semibold">
      <p class="text-center font-semibold w-full
        mt-2 text-2xl md:text-4xl">
        { classmateName }
      </p>
      {#if deceased === 'TRUE'}
        <p class="text-center w-full text-xl mt-0 md:text-2xl font-normal">(Deceased)</p>
      {/if}
    </div>
  </div>
  <div class="flex flex-wrap place-content-center w-full 
    ml-0 md:ml-8 mt-1 md:mt-2">
    <div class="flex place-content-center text-center w-full">
      <a href="/{ backPage }/#{ classmateName.toLowerCase().replace(/\s+/g, '') }"
        class="flex bg-orange-500 text-white active:bg-gray-700 
        font-bold uppercase rounded shadow hover:shadow-lg
        outline-none focus:outline-none
        h-12 m-1 px-3 md:px-6 py-1 md:py-2 text-sm md:text-base
        transition duration-300 ease-in-out 
      hover:text-gray-800 hover:font-semibold transform hover:-translate-y-0 hover:scale-110">
        <div class="flex place-self-center">
          Back
        </div>
      </a>
      {#if confirmed === 'FALSE'}
        <div class="flex flex-col ml-2">
          <div on:click={ handleTigerHunt }
            class="bg-orange-500 text-white active:bg-gray-700 
            font-bold uppercase rounded shadow hover:shadow-lg
            outline-none focus:outline-none 
            h-12 m-1 px-3 md:px-6 py-1 md:py-2 text-sm md:text-base
            transition duration-300 ease-in-out 
            hover:text-gray-800 hover:font-semibold transform hover:-translate-y-0 hover:scale-110">
            <div class="flex flex-wrap place-self-center w-full m-0">
              <img src="chs_tiger_36.png" alt="CHS Tiger"/>
              <div class="ml-2 self-center">
                Tiger Hunt
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
    {#if confirmed === 'FALSE'}
      <div class="text-sm md:text-lg mt-4 ml-3 justify-self-end">
        Do you know how to contact { firstName }? Click on Tiger Hunt!
      </div>
    {/if}
  </div>
</section>
