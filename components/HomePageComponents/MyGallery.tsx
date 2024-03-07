"use client"
import { useState,useRef } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import { Fullscreen } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import {CustomImage} from '../AboutComponents/images'

interface MyGalleryProps {
  images: CustomImage[];
}

const MyGallery: React.FC<MyGalleryProps> = ({ images}) => {
  const [index, setIndex] = useState(-1);

  const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

  const fullscreenRef = useRef(null);


  const handleClick = (index: number, item: CustomImage) => setIndex(index);

  return (
    <>
      <h1 className="my-24 text-3xl text-center font-bold">Check Out Our Gallery</h1>
      <div>
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
        <Lightbox
          plugins={[Fullscreen]}
          fullscreen={{ ref: fullscreenRef }}
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </>
  );
};

export default MyGallery;
