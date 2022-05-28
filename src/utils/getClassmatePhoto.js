import { Cloudinary } from "@cloudinary/url-gen"
import { fill } from "@cloudinary/url-gen/actions/resize"

export default function getClassmatePhote(cloudinaryId) {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: `${ import.meta.env.VITE_CLOUDINARY_NAME }`
    }
  })

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image(`${ cloudinaryId }`)

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250))

  // Render the image in an 'img' element.
  //const imgElement = document.createElement('img')
  //document.body.appendChild(imgElement)
  //imgElement.src = myImage.toURL()

  return myImage.toURL
}