"use client"
import React from 'react'
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
import terrainIcon from '../../public/terrainicon.png'


const AllTours = () => {
    {/*komponenta za svaku turu u desc */}

    const data = [
        
        {
            label: "Basic Tour",
            value: "basictour",
            tourintro: "Discover the thrill of exploring off-road terrain on a quad bike while soaking in the breathtaking scenery around you. Whether you're a seasoned adventurer or a first-time rider, this tour promises an unforgettable experience filled with excitement and discovery.",
            desc:
            <SingleTour 
              items={[{ 
                title: "Basic Tour",
                intro: "Discover the thrill of exploring off-road terrain on a quad bike while soaking in the breathtaking scenery around you. Whether you're a seasoned adventurer or a first-time rider, this tour promises an unforgettable experience filled with excitement and discovery.",
                steps: `
                  Briefing and Gear Up:
                  Receive a comprehensive safety briefing and gear up with all necessary equipment, including helmets and protective gear, ensuring a secure and enjoyable adventure.\n\n
                  Scenic Ride:
                  Embark on an exhilarating quad bike ride through picturesque trails, winding through forests, meadows, and villages, offering stunning panoramic views at every turn.\n\n
                  Professional Guidance:
                  Enjoy the guidance of experienced instructors who will lead you through the terrain, sharing insights about the surroundings and ensuring a smooth and enjoyable ride for all participants.\n\n
                  Exploration Stops:
                  Make stops along the route to take in the beauty of natural landmarks, snap photos, and learn about the local flora, fauna, and cultural heritage from knowledgeable guides.\n\n
                  Adrenaline Rush:
                  Feel the adrenaline surge as you navigate through challenging terrain, including hills, valleys, and muddy tracks, providing an exciting and dynamic experience for adventure enthusiasts.\n\n
                  Refreshment Break:
                  Take a break at a scenic spot to recharge with refreshing beverages and snacks, allowing you to relax and soak in the stunning surroundings before continuing your journey.\n\n
                  Return Journey:
                  Conclude the tour with a thrilling ride back to the starting point, reminiscing about the unforgettable moments shared with fellow adventurers and the beauty of Croatia's landscapes.
                `,
                tourCardsData: [
                  {
                    image: lengthIcon,
                    description: {
                      num: 40,
                      unit: 'km',
                      type: 'Length',
                    },
                  },
                  {
                    image: durationIcon,
                    description: {
                      num: 90,
                      unit: 'min',
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
                      num: 6,
                      unit: 'Max.people',
                      type: 'Tour size',
                    },
                  },
                ]
              }]} 
          />
},
        {
          label: "Tura 2",
          value: "tura2",
          desc:"Detalji ture 2",
        },

        {
            label: "Tura 3",
            value: "tura3",
            desc: `Detalji ture 3`,
          },
      ];

      
    return (
      <>
      <h1 id="tour-details" className="text-3xl text-center font-bold mt-36 mb-12 mx-2">Start Your Quad Journey Here:  Our Tour Selection</h1>
      <Tabs value="basictour" id="custom-animation2">
        <TabsHeader placeholder={""}>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} placeholder={""} className="text-lg text-nowrap font-semibold">
              {label}
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
    )
}

export default AllTours;