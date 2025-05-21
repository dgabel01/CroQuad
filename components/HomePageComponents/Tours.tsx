import React from "react";
import imageOne from "../../public/image3.jpeg";
import imageTwo from "../../public/image2.jpeg";
import imageThree from "../../public/IMG_6945.webp";
import imageFour from "../../public/IMG_6835.webp";
import imageFive from "../../public/image1.jpeg";
import imageSix from "../../public/image4.jpeg";
import lengthIcon from "../../public/lenghticon.png";
import durationIcon from "../../public/clockicon.png";
import peopleIcon from "../../public/peopleicon.jpeg";
import terrainIcon from "../../public/terrainicon.png";
import Tour from "./Tour";
import Link from "next/link";
import { Button } from "@material-tailwind/react";

export const tourData = [
  {
    title: "CroQuad Panorama Tour",
    images: [imageOne, imageTwo],
    description:
      "Explore the breathtaking landscapes on our panoramic quad bike tour. Our tour runs from 10:00 AM to 2:30 PM, with the possibility of extension until 3:00 PM, depending on the group's preference. During the tour, you'll visit the Lavanda viewpoint, the top of St. Nicholas, the village of Dol, and enjoy lunch at the traditional Dalmatian tavern 'Kokot'.",
    tourCardsData: [
      {
        image: lengthIcon,
        description: {
          num: 27,
          unit: "km",
          type: "Length",
        },
      },
      {
        image: durationIcon,
        description: {
          num: 4.5,
          unit: "hours",
          type: "Duration",
        },
      },
      {
        image: terrainIcon,
        description: {
          unit: "Varied",
          type: "Terrain",
        },
      },
      {
        image: peopleIcon,
        description: {
          num: 10,
          unit: "People",
          type: "Max. size",
        },
      },
    ],
  },

  {
    title: "CroQuad Ager Tour",
    images: [imageThree, imageFour],
    description:
      " The quad tour through the Stari Grad Plain on Hvar lasts about 2 and a half hours and includes a snack (prosciutto and cheese) in a traditional Dalmatian konoba in the heart of the field.              The ride takes place on 90% dirt roads through vineyards, providing an opportunity for a true adventure and exploration of the beautiful landscape of the island of Hvar.",
    tourCardsData: [
      {
        image: lengthIcon,
        description: {
          num: 15,
          unit: "km",
          type: "Length",
        },
      },
      {
        image: durationIcon,
        description: {
          num: 2.5,
          unit: "hours",
          type: "Duration",
        },
      },
      {
        image: terrainIcon,
        description: {
          unit: "Gravel",
          type: "Terrain",
        },
      },
      {
        image: peopleIcon,
        description: {
          num: 10,
          unit: "People",
          type: "Max.size",
        },
      },
    ],
  },

  {
    title: "CroQuad Sunset Tour",
    images: [imageFive, imageSix],
    description:
      "The quad tour begins with an introduction to handling and route plans, departing from Stari Grad towards the island's peak to witness the sunset. At the peak, guests enjoy a longer break for photo opportunities as the sun sets over the sea. Continuing downhill, the journey leads to the Stari Grad Plain for dinner at the traditional Dalmatian tavern Dionis, offering a variety of dishes and drinks. The adventure concludes with a return to Stari Grad under the cover of darkness, adding to the sense of fulfillment.",
    tourCardsData: [
      {
        image: lengthIcon,
        description: {
          num: 30,
          unit: "km",
          type: "Length",
        },
      },
      {
        image: durationIcon,
        description: {
          num: 3,
          unit: "hours",
          type: "Duration",
        },
      },
      {
        image: terrainIcon,
        description: {
          unit: "Varied",
          type: "Terrain",
        },
      },
      {
        image: peopleIcon,
        description: {
          num: 10,
          unit: "People",
          type: "Max. size",
        },
      },
    ],
  },
];

const Tours = () => {
  return (
    <>
      <h1 className="mt-36 mb-24 text-center text-3xl font-extrabold italic">
        Our Guided Quad Rides
      </h1>
      {tourData.map((tour, index) => (
        <Tour
          key={index}
          title={tour.title}
          description={tour.description}
          images={tour.images}
          tourCardsData={tour.tourCardsData}
        />
      ))}
      <div className="flex flex-col gap-16 mb-36">
        <p className="font-bold text-3xl text-center mx-4 italic">
          Don&apos;t feel like taking the guided tour?
        </p>
        <Link
          href={"/rent"}
          className="text-2xl text-center text-blue-700 font-semibold mx-6"
        >
          <Button
            variant="outlined"
            className="rounded-full text-sm hover:bg-stone-100"
            placeholder={""}
            color="black"
          >
            Explore our renting options &rarr;
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Tours;
