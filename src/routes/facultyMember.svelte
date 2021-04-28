<script context="module">
	export async function preload(page, session) {
		return { 
      params: {
        back: page.query.back,
        name: page.query.name,
        cloudinaryId: page.query.photoId,
        department: page.query.department,
        position: page.query.position,
        deceased: page.query.deceased,
        confirmed: page.query.confirmed,
      }
    }
  }
</script>

<script>
  import { goto } from '@sapper/app';
  import { Image } from '@cloudinary/svelte'
  import TigerHuntInfoModal from '../components/TigerHuntInfoModal.svelte'

  export let params
  let { back, name, cloudinaryId, department, position, deceased, confirmed } = params
  console.log(`faculty - back: ${ back } name: ${ name } cloudinaryId: ${ cloudinaryId } deceased: ${ deceased } confirmed: ${ confirmed }`)
  
  const handleBack = async () => {
    await goto(back)
  }

  const handleTigerHunt = async () => {
    await goto(`tigerhunt?back=classmates&name=${ name }&photoId=${ cloudinaryId }&deceased=${ deceased }&confirmed=${ confirmed }`)
  }

  let showModal = false
  const toggleModal = () => {
    showModal = !showModal;
  }
</script>

<style>
</style>

<section class="flex flex-wrap place-content-center w-full">
  <div class="flex flex-wrap place-content-center ml-0 md:ml-8 mt-32">
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
        { name }
      </p>
      <p class="text-center font-semibold w-full
      mt-2 text-xl md:text-2xl">
      { department } - { position }
      </p>
      {#if deceased === 'TRUE'}
        <p class="text-center w-full text-xl mt-4 md:text-3xl font-normal">(Deceased)</p>
      {/if}
    </div>

    <div class="flex flex-wrap place-content-center w-full 
    ml-0 md:ml-8 mt-1 md:mt-2">
    <div class="flex place-content-center text-center w-full">
      <button on:click={ handleBack }
        class="bg-orange-500 text-white active:bg-gray-700 
        font-bold uppercase rounded shadow hover:shadow-lg
        outline-none focus:outline-none mr-2
        mb-1 px-3 md:px-6 py-1 md:py-2 text-sm md:text-base"
        style="transition: all 0.15s ease 0s;">
        Back
      </button>
      {#if confirmed === 'FALSE'}
        <div class="flex flex-col">
          <button on:click={ handleTigerHunt }
            class="bg-orange-500 text-white active:bg-gray-700 
            font-bold uppercase rounded shadow hover:shadow-lg
            outline-none focus:outline-none 
            mb-1 px-3 md:px-6 py-1 md:py-2 text-sm md:text-base"
            style="transition: all 0.15s ease 0s;">
            <div class="flex flex-wrap place-self-center w-full m-0">
              <img src="chs_tiger_36.png" alt="CHS Tiger"/>
              <div class="ml-2 self-center">
                Tiger Hunt
              </div>
            </div>
          </button>
        </div>
      {/if}
    </div>
    {#if confirmed === 'FALSE'}
      <div class="text-sm md:text-lg ml-3 justify-self-end" on:click={ toggleModal }>
        What's this?
      </div>
      {#if showModal}
        <TigerHuntInfoModal action={ toggleModal }/>
      {/if}
    {/if}
  </div>
</section>
