"use client"
import React, { useState } from 'react';
import { FaUsers, FaEuroSign } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from "@material-tailwind/react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
const RentPrices = () => {
    const [selectedDuration, setSelectedDuration] = useState<string>("3 hours");
    const [selectedPrice, setSelectedPrice] = useState<number | string>("");

    const handleTabChange = (duration: string) => {
        setSelectedDuration(duration);
        const price = getPrice(duration);
        setSelectedPrice(price as number);
    };

    const getPrice = (duration: string) => {
        switch (duration) {
            case '3 hours':
                return 60;
            case '6 hours':
                return 85;
            case 'One day':
                return 110;
            default:
                return null;
        }
    };

    const data = [
        { label: '3 hours' },
        { label: '6 hours' },
        { label: 'One day' }
    ];

    return (
        <div className="flex flex-wrap items-center justify-center gap-16 max-w-6xl">
            <div className="flex flex-col rounded-lg shadow-lg bg-gray-100 p-6">
                <h1 className="text-2xl text-center font-extrabold mb-8">ATV single / double riding</h1>
                <div className="flex flex-col gap-4">
                    <Tabs value={selectedDuration} id="durationTabs" onChange={handleTabChange}>
                        <TabsHeader placeholder={""} className="bg-sky-400 p-1">
                            {data.map(({ label }) => (
                                <Tab key={label} value={label} placeholder={""} className="text-xl font-semibold">
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody placeholder={""} animate={{
                            initial: { y: 250 },
                            mount: { y: 0 },
                            unmount: { y: 250 },
                        }}>
                            {data.map(({ label }) => (
                                <TabPanel key={label} value={label} className="flex flex-col sm:flex-row gap-16 items-center justify-center mt-16">
                                    <p className="text-4xl font-bold text-blue-600 flex items-center">
                                        <FaEuroSign size={20} className="mr-1" />{getPrice(label)}<span className="text-xl ml-1">/per quadbike</span>
                                    </p>
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
                {selectedPrice && (
                    <p className="text-4xl font-bold text-blue-600 flex items-center mb-4 mt-8">
                        <FaEuroSign size={20} className="mr-1" />{selectedPrice}<span className="text-base ml-1">/per quadbike</span>
                    </p>
                )}
                <p className="text-xl font-bold mb-4 mt-8"><FaUsers size={20} className="mr-1" />One or two persons, one quad bike</p>

                <Link href="/contact" className='m-auto mt-12'>
                    <Button placeholder={""} color="blue">Book Now</Button>
                </Link>
            </div>
        </div>
    );
}

export default RentPrices;
