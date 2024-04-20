"use client"
import React from 'react';
import SingleTour from './SingleTour';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import lengthIcon from '../../public/lenghticon.png';
import durationIcon from '../../public/clockicon.png';
import peopleIcon from '../../public/peopleicon.jpeg';
import terrainIcon from '../../public/terrainicon.png';


const AllTours = () => {

  const data = [
    {
      number:"1)",
      label: "Panorama Tour",
      value: "panoramatour",
      tourintro: "Discover the thrill of exploring off-road terrain on a quad bike while soaking in the breathtaking scenery around you. Whether you're a seasoned adventurer or a first-time rider, this tour promises an unforgettable experience filled with excitement and discovery.",
      desc: (
        <SingleTour
          items={[
            {
              title: "Panorama Tour",
              intro: "Join us on an unforgettable adventure that will take you through picturesque landscapes, beautiful viewpoints, and incredible panoramic views from the highest peak of the island of Hvar (Sv. Nikola peak). Our tour runs from 10:00 AM to 2:30 PM, with the possibility of extension until 3:00 PM, depending on the group's preference.",
              steps: `
                10:00 AM - 11:00 AM:
                Introduction to the tour with detailed explanation of quad bike handling and route plan. Departure from Stari Grad to the Lavanda viewpoint with a brief stop and guide's speech.\n\n
                11:00 AM - 12:00 PM:
                The journey continues on gravel roads to the top of St. Nicholas where guests have a longer break. Guests can use this time to climb to the top, which takes about 10 minutes. There, they can take photos and hear a detailed story about the island of Hvar and the surrounding islands.\n\n
                12:00 PM - 1:00 PM:
                The tour proceeds on gravel roads down to the village of Dol. There, lunch is organized in the traditional Dalmatian tavern "Kokot". Lunch includes: Traditional "Peka" meal (veal and lamb or octopus) , dessert and unlimited drinks of choice.\n
                1:00 PM - 2:00 PM:
                Return to Stari Grad through the Stari Grad Plain (Ager), which is under UNESCO protection.
              `,
              tourCardsData: [
                {
                  image: lengthIcon,
                  description: {
                    num: 27,
                    unit: 'km',
                    type: 'Length',
                  },
                },
                {
                  image: durationIcon,
                  description: {
                    num: 5,
                    unit: 'hours',
                    type: 'Duration',
                  },
                },
                {
                  image: terrainIcon,
                  description: {
                    unit: 'Varied',
                    type: 'Terrain',
                  },
                },
                {
                  image: peopleIcon,
                  description: {
                    num: 10,
                    unit: 'People',
                    type: 'Max.size',
                  },
                },
              ],
              note: "The tour includes a bottle of cold water, a licenced guide and paid gas for the quad. We have five quads available. Each quad can accommodate two people, which means we can accommodate a maximum of ten people. The tour will proceed with a minimum of six people.",
              food: "Lunch included",
            },
          ]}
        />
      ),
    },
    {
      number:"2)",
      label: "Ager Tour",
      value: "agertour",
      desc: (
        <SingleTour
          items={[
            {
              title: "Ager Tour",
              intro: "Enjoy the unique blend of nature and excitement as you explore the magical area of UNESCO World Heritage Site on Hvar.Explore the agricultural landscape that was set up by the ancient Greek colonists in the 4th century BC, and remains in use. The Ager tour runs between our Panorama and Sunset tours.",
              steps: `
              The quad tour through the Stari Grad Plain on Hvar lasts about 2 and a half hours and includes a snack (prosciutto and cheese) in a traditional Dalmatian konoba in the heart of the field.\n\n
              The ride takes place on 90% dirt roads through vineyards, providing an opportunity for a true adventure and exploration of the beautiful landscape of the island of Hvar."
              `,
              tourCardsData: [
                {
                  image: lengthIcon,
                  description: {
                    num: 15,
                    unit: 'km',
                    type: 'Length',
                  },
                },
                {
                  image: durationIcon,
                  description: {
                    num: 2,
                    unit: 'hours',
                    type: 'Duration',
                  },
                },
                {
                  image: terrainIcon,
                  description: {
                    unit: 'Gravel',
                    type: 'Terrain',
                  },
                },
                {
                  image: peopleIcon,
                  description: {
                    num: 10,
                    unit: 'People',
                    type: 'Max.size',
                  },
                },
              ],
              note: "The tour includes a bottle of cold water, a licenced guide and paid gas for the quad. We have five quads available. Each quad can accommodate two people, which means we can accommodate a maximum of ten people. The tour will proceed with a minimum of six people.",
              food: "Snacks included",
            },
          ]}
        />
        
      
      ),
    },
    {
      number:"3)",
      label: "Sunset Tour",
      value: "sunsettour",
      desc: (
        <SingleTour
          items={[
            {
              title: "Sunset Tour",
              intro:"Experience driving through the picturesque landscapes of the island as the sun slowly descends towards the horizon. Enjoy the magic of the colors that flood the sky.",
              steps: `
              1st hour: Introduction to the ride with detailed explanation of quad handling and route plan. Departure from Stari Grad towards the island's peak, where we witness the sunset during the ride.\n\n
              2nd hour: Upon reaching the peak, guests have a longer break. They can use this time to capture photos as the sun touches the sea surface.\n\n
              3rd hour: The journey continues downhill through dirt roads to the Stari Grad Plain. There, dinner is organized at the traditional Dalmatian tavern "Dionis". Dinner includes: mixed grill (veal and lamb) or octopus grill, vegan menu, drinks of choice.\n\n
              We return to Stari Grad in the dark, adding to the fulfillment of our adventure.
              `,
              tourCardsData: [
                {
                  image: lengthIcon,
                  description: {
                    num: 30,
                    unit: 'km',
                    type: 'Length',
                  },
                },
                {
                  image: durationIcon,
                  description: {
                    num: 4,
                    unit: 'hours',
                    type: 'Duration',
                  },
                },
                {
                  image: terrainIcon,
                  description: {
                    unit: 'Varied',
                    type: 'Terrain',
                  },
                },
                {
                  image: peopleIcon,
                  description: {
                    num: 10,
                    unit: 'People',
                    type: 'Max.size',
                  },
                },
              ],
              note: "Important - The exact departure and return times depend on the sunset. The tour includes a bottle of cold water, a licenced guide and paid gas for the quad. We have five quads available. Each quad can accommodate two people, which means we can accommodate a maximum of ten people. The tour will proceed with a minimum of six people.",
              food: "Dinner included",
            },
          ]}
        />
        
      
      ),
    },
  ];

  return (
    <>
      <h1 id="tour-details" className="text-3xl text-center font-extrabold mt-36 mb-16 mx-2">Start Your Quad Journey Here: Browse Our Tour Selection</h1>
      <Tabs value="panoramatour" id="custom-animation2">
        <TabsHeader placeholder={""}>
          {data.map(({ number,label, value }) => (
            <Tab key={value} value={value} placeholder={""} className="text-xl font-extrabold">
            {number} {label} 
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody placeholder={""} animate={{
          initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="flex flex-col sm:flex-row gap-16 items-center justify-center mt-16">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>

    </>
  );
};

export default AllTours;
