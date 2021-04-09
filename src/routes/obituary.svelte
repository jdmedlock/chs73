<script>
  import { Image } from '@cloudinary/svelte'

  const params = new URLSearchParams(window.location.search);
  const name = params.get('name')
</script>

<style>
</style>

<section>
  <div class="flex flex-wrap items-center content-center ml-8 mt-40">
    <Image cloud_name="{ process.env.CLOUDINARY_NAME }" 
      public_id="Barbara_Bahn_i7mmp0"
      transformation="{[
        { width: 400, height: 400, gravity: 'face', radius: 'max', crop: 'crop' },
        { width: 200, crop: 'scale' }
      ]}" />
      <p class="ml-8 text-6xl font-semibold">{ name }</p>
  </div>
</section>
