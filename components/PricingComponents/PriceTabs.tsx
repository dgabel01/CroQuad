"use client"
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import TourPricesCard from "./TourPricesCard";

   
  export default function PriceTabs() {
    {/*komponenta za svaku turu u desc */}
    const data = [
      {
        label: "Panorama Tour",
        value: "panoramatour",
        desc: (
            <>
              <TourPricesCard items={[{title:"CroQuad Panorama Tour", riders:"ATV single / double riding", price:"120", personsperquad:"One or two persons, one quad bike"}]} />
            </>
        )
      },
      {
        label: "Ager Tour",
        value: "agertour",
        desc: (
          <>
            <TourPricesCard items={[{title:"CroQuad Ager Tour", riders:"ATV single / double riding", price:"60", personsperquad:"One or two persons, one quad bike"}]} />
          </>
      )
      },
      {
        label: "Sunset Tour",
        value: "sunsettour",
        desc: (
          <>
            <TourPricesCard items={[{title:"CroQuad Sunset Tour", riders:"ATV single / double riding", price:"110", personsperquad:"One or two persons, one quad bike"}]} />
          </>
      )
      },
    ];
   
    return (
     <>
       <h1 id ="prices-header" className="text-3xl text-center font-extrabold mt-16 mb-12 mx-2">Browse through our tour prices</h1>
      <Tabs value="panoramatour" id="custom-animation">
        <TabsHeader placeholder={""}>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} placeholder={""} className="text-lg font-semibold">
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
    );
  }