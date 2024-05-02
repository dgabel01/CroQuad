import React, { useState } from 'react';
import { FaUsers, FaEuroSign } from 'react-icons/fa'; 
import Link from 'next/link';
import { Button } from "@material-tailwind/react";

const RentPrices = () => {
    const [selectedDuration, setSelectedDuration] = useState<string>("");
    const [selectedPrice, setSelectedPrice] = useState<number | string>("");

    const handleDurationChange = (event: { target: { value: string; }; }) => {
        const duration = event.target.value;
        setSelectedDuration(duration);
        const price = getPrice(duration);
        setSelectedPrice(price as number);
    };

    const getPrice = (duration: any) => {
        switch (duration) {
            case '3 hours':
                return 60;
            case '6 hours':
                return 85;
            case 'Whole day':
                return 110;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-16 max-w-6xl">
            <div className="flex flex-col rounded-lg shadow-lg bg-gray-100 p-6">
                <h1 className="text-2xl  text-center font-extrabold mb-8">ATV single / double riding</h1>
                <div className="flex flex-col gap-4">
                    <label htmlFor="durationSelect" className="text-xl font-semibold mx-8">Select Your Rent Duration:</label>
                    <select id="durationSelect" className="border p-2 rounded-md" value={selectedDuration || ""} onChange={handleDurationChange}>
                        <option value="">Select duration</option>
                        <option value="3 hours">3 hours</option>
                        <option value="6 hours">6 hours</option>
                        <option value="Whole day">Whole day</option>
                    </select>
                </div>
                {selectedPrice && (
                    <p className="text-3xl font-bold text-blue-600 flex items-center mb-4 mt-8">
                    <FaEuroSign size={20} className="mr-1" />{selectedPrice}<span className="text-base ml-1">/per quadbike</span>
                  </p>
                )}
                <p className="text-lg font-bold mb-4 mt-8"><FaUsers size={20} className="mr-1" />One or two persons, one quad bike</p>

                <Link href="/contact" className='m-auto mt-12'>
                    <Button placeholder={""} color="blue">Book Now</Button>
                </Link>
            </div>
        </div>
    );
}

export default RentPrices;
