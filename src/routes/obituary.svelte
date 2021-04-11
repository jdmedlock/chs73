<script>
  import { goto } from '@sapper/app';
  import { Image } from '@cloudinary/svelte'

  const params = new URLSearchParams(window.location.search);
  const name = params.get('name')
  const cloudinaryId = params.get('photoId')
  const deceased = params.get('deceased')

  const handleBack = async () => {
    await goto('/memoriam')
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
    <div class="place-self-center ml-0 md:ml-8 text-3xl md:text-6xl font-semibold">
      <p class="place-self-center ml-0 md:ml-8 text-3xl md:text-6xl font-semibold">{ name }</p>
      {#if deceased === 'TRUE'}
        <p class="text-center w-full text-xl mt-4 md:text-3xl font-normal">(Deceased)</p>
      {/if}
    </div>
  </div>
  <div class="flex flex-wrap items-center content-center w-full ml-0 md:ml-8 mt-20">
    <div class="text-center w-full mt-6">
      <button on:click={ handleBack }
        class="bg-orange-500 text-white active:bg-gray-700 text-sm
        font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg
        outline-none focus:outline-none mr-1 mb-1"
        style="transition: all 0.15s ease 0s;">
        Back
      </button>
    </div>
  </div>
</section>
