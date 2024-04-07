import { Image } from "react-grid-gallery";
import logoImage from '../../public/logoblack.jpg'
import imageOne from '../../public/abouthero.jpeg'
import imageTwo from '../../public/pricehero.jpeg'
import imageThree from '../../public/tourshero.jpeg'
import imageFour from '../../public/image1.jpeg'
import imageFive from '../../public/image2.jpeg'
import imageSix from '../../public/image3.jpeg'
import imageSeven from '../../public/image4.jpeg'


export interface CustomImage extends Image {
  original: string;
}

export const aboutimages: CustomImage[] = [
  
  {
    src: logoImage.src, // Use the src property of the imported local image
    original: logoImage.src, 
    width: 1200, 
    height: 800, 
    tags: [
      { value: "Logo", title: "Logo" }, 
    ],
    caption: "Your Logo Caption Here", 
  },

  {
    src: imageOne.src,
    original:imageOne.src,
    width:1200,
    height:800,
    tags:[
    ]

  },
  {
    src: imageTwo.src,
    original:imageTwo.src,
    width:1200,
    height:800,
    tags:[
    ]

  },
  {
    src: imageThree.src,
    original:imageThree.src,
    width:1200,
    height:800,
    tags:[
    ]

  },
  {
    src: imageFour.src,
    original:imageFour.src,
    width:1200,
    height:800,
    tags:[
    ]

  },
  {
    src: imageFive.src,
    original:imageFive.src,
    width:1200,
    height:800,
    tags:[
    ]

  },
  {
    src: imageSix.src,
    original:imageSix.src,
    width:1200,
    height:800,
    tags:[
    ]

  },
  {
    src: imageSeven.src,
    original:imageSeven.src,
    width:1200,
    height:800,
    tags:[
    ]

  },
  


  
];