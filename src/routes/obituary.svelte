<script>
  import { Image } from '@cloudinary/svelte';
</script>

<style>
</style>

<section>
  <div class="ml-8 mt-40">
    <Image cloud_name="{ process.env.CLOUDINARY_NAME }" 
      public_id="Barbara_Bahn_i7mmp0"
      transformation="{[
        { width: 400, height: 400, gravity: 'face', radius: 'max', crop: 'crop' },
        { width: 200, crop: 'scale' }
      ]}" />
  </div>
</section>
