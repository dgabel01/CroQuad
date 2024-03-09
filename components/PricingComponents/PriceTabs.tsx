"use client"
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
   
  export default function PriceTabs() {
    const data = [
      {
        label: "Tura 1",
        value: "tura1",
        desc: `Kartice cijena za turu 1`,
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
     <h1 className="text-3xl text-center font-bold mt-16 mb-8">Browse through our tour prices</h1>
      <Tabs value="tura1" id="custom-animation">
        <TabsHeader placeholder={""}>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} placeholder={""}>
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
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
     </>
    );
  }