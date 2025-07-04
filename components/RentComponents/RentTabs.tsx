"use client";
import Image from "next/image";
import quadImage from "../../public/rentaquadvehicle.webp";
import quadImage2 from "../../public/IMG_6837.webp";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import RentDetails from "./RentDetails";
import RentPrices from "./RentPrices";

const RentTabs = () => {
  const data = [
    {
      number: "1)",
      label: "Details",
      value: "details",
      desc: <RentDetails />,
    },
    {
      number: "2)",
      label: "Prices",
      value: "prices",
      desc: <RentPrices />,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-16 items-center justify-center px-4">
        <h1 className="text-3xl text-center font-extrabold mt-16 mb-12">
          Our rent vehicles
        </h1>

        {/* Vehicle Section */}
        <div className="flex flex-col md:flex-row gap-24 justify-center items-start w-full max-w-6xl">
          {/* LINHAI */}
          <div className="flex flex-col w-full">
            <h2 className="text-2xl font-bold mb-4">LINHAI ATV 420 PROMAX EFI, T3B</h2>
            <Image
              src={quadImage}
              alt="linhai-pro-max-420"
              layout="responsive"
              className="rounded-xl"
            />
          </div>

          {/* SEGWAY */}
          <div className="flex flex-col w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">SEGWAY 500</h2>
            <Image
              src={quadImage2}
              alt="croquad-atv"
              layout="responsive"
              className="rounded-xl"
            />
          </div>
        </div>

        <h1 className="text-3xl text-center font-extrabold mt-16 mb-12">
          Browse the ATV renting details and prices
        </h1>
      </div>

      {/* Tabs */}
      <Tabs value="details" id="custom-animation">
        <TabsHeader placeholder={""} className="bg-sky-300 p-1">
          {data.map(({ number, label, value }) => (
            <Tab
              key={value}
              value={value}
              placeholder={""}
              className="text-xl font-semibold"
            >
              {number} {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          placeholder={""}
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel
              key={value}
              value={value}
              className="flex flex-col sm:flex-row gap-16 items-center justify-center mt-16"
            >
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>

      <div className="mb-48" />
    </>
  );
};

export default RentTabs;
