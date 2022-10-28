import { Cloudinary } from "@cloudinary/url-gen"
import { thumbnail } from "@cloudinary/url-gen/actions/resize"
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners"
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity"
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn"
import { PUBLIC_CLOUDINARY_NAME } from '$env/static/public'

export default function getCloudinaryPhoto(cloudinaryId) {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: `${ PUBLIC_CLOUDINARY_NAME }`
    }
  })

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image(`${ cloudinaryId }`)

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  //myImage.resize(fill().width(400).height(400))
  myImage
  .resize(thumbnail().width(400).height(400).gravity(focusOn(FocusOn.face())))  // Crop the image, focusing on the face.
  .roundCorners(byRadius(200))

  // Render the image in an 'img' element.
  return myImage.toURL()
}