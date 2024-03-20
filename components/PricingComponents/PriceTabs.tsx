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
        label: "Basic Tour",
        value: "basictour",
        desc: (
            <>
              <TourPricesCard items={[{title:"CroQuad Basic Tour", riders:"1 person", price:"120", personsperquad:"One person, one quad bike"}]} />
              <TourPricesCard items={[{title:"CroQuad Basic Tour", riders:"2 persons", price:"80", personsperquad:"Two persons, one quad bike"}]} />
            </>
        )
      },
      {
        label: "Tura 2",
        value: "tura2",
        desc: `Kartice cijena za turu 2`,
      },
      {
        label: "Tura 3",
        value: "tura3",
        desc: `Kartice cijena za turu 3`,
      },
    ];
   
    return (
     <>
       <h1 id ="prices-header" className="text-3xl text-center font-bold mt-16 mb-12 mx-2">Browse through our tour prices</h1>
      <Tabs value="basictour" id="custom-animation">
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