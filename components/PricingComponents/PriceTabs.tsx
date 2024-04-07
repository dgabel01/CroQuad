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
        label: "To be announced",
        value: "tura1",
        desc: (
            <>
              <TourPricesCard items={[{title:"CroQuad Basic Tour", riders:"1 person", price:"N/A", personsperquad:"One person, one quad bike"}]} />
              <TourPricesCard items={[{title:"CroQuad Basic Tour", riders:"2 persons", price:"N/A", personsperquad:"Two persons, one quad bike"}]} />
            </>
        )
      },
      {
        label: "To be announced",
        value: "tura2",
        desc: `TBA`,
      },
      {
        label: "To be announced",
        value: "tura3",
        desc: `TBA`,
      },
    ];
   
    return (
     <>
       <h1 id ="prices-header" className="text-3xl text-center font-bold mt-16 mb-12 mx-2">Browse through our tour prices</h1>
      <Tabs value="tura1" id="custom-animation">
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