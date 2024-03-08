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
      <Tabs value="html">
        <TabsHeader placeholder={""}>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value} placeholder={""}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody placeholder={""}>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }