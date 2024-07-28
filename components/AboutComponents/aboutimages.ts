import { Image } from "react-grid-gallery";
import logoImage from '../../public/logoblack.jpg'
import imageOne from '../../public/abouthero.jpeg'
import imageTwo from '../../public/pricehero.jpeg'
import imageThree from '../../public/tourshero.jpeg'
import imageFour from '../../public/image1.jpeg'
import imageFive from '../../public/image2.jpeg'
import imageSix from '../../public/image3.jpeg'
import imageSeven from '../../public/image4.jpeg'
import imageEight from '../../public/IMG_4185.webp'
import imageNine from '../../public/IMG_4198.webp'
import imageTen from '../../public/IMG_6835.webp'
import imageEleven from '../../public/IMG_6837.webp'
import imageTwelve from '../../public/IMG_7000.webp'
import imageThirteen from '../../public/IMG_9344 .webp'
import imageFourteen from '../../public/IMG_6945.webp'
import imageFifteen from '../../public/2024-05-07.jpg'


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
      { value: "Team", title: "Team" }, 

    ]

  },
  {
    src: imageTwo.src,
    original:imageTwo.src,
    width:1200,
    height:800,
    tags:[
      { value: "Quads", title: "Quads" }, 

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
  {
    src: imageEight.src,
    original:imageEight.src,
    width:1200,
    height:800,
    tags:[
    ]

  },
  

  {
    src: imageNine.src,
    original:imageNine.src,
    width:1200,
    height:800,
    tags:[
    ]

  },
  
  {
    src: imageTen.src,
    original:imageTen.src,
    width:1200,
    height:800,
    tags:[
    ]

  },
  {
    src: imageEleven.src,
    original:imageEleven.src,
    width:1200,
    height:800,
    tags:[
    ]

  },
  {
    src: imageTwelve.src,
    original:imageTwelve.src,
    width:1200,
    height:800,
    tags:[
    ]

  },
  {
    src: imageThirteen.src,
    original:imageThirteen.src,
    width:1200,
    height:800,
    tags:[
    ]

  },
  {
    src: imageFourteen.src,
    original:imageFourteen.src,
    width:1200,
    height:800,
    tags:[
      {value:"Scenery", title:"Scenery"}
    ]

  },
  {
    src: imageFifteen.src,
    original:imageFifteen.src,
    width:1200,
    height:800,
    tags:[
      { value: "Office", title: "Office" }, 

    ]

  },
];