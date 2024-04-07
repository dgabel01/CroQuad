"use client"
import { useState,useRef, useEffect } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import { Counter, Fullscreen,Thumbnails, Zoom, Download} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import {CustomImage} from '../AboutComponents/aboutimages'
import "yet-another-react-lightbox/plugins/thumbnails.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface MyGalleryProps {
  images: CustomImage[];
  title:string;
}

const MyGallery: React.FC<MyGalleryProps> = ({ images, title}) => {
  useEffect(()=>{
    AOS.init();
  },[]);

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
      <h1 className="my-24 mx-4 text-3xl text-center font-bold">{title}</h1>
      <div data-aos="fade-down" data-aos-duration="2000">
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
        />
       <Lightbox
          plugins={[Thumbnails, Fullscreen, Zoom, Counter,Download]} 
          fullscreen={{ ref: fullscreenRef }}
          slides={slides}
          open={index >= 0}
          counter={{ container: { style: { top: "unset", bottom: 0 } } }}
          index={index}
          close={() => setIndex(-1)}
          zoom={{
            scrollToZoom: true,
            maxZoomPixelRatio: 5,
        }}
        />

      </div>
    </>
  );
};

export default MyGallery;
