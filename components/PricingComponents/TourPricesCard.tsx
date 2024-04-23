import React from 'react';
import Link from 'next/link';
import { Button } from "@material-tailwind/react";
import { FaUsers, FaEuroSign } from 'react-icons/fa'; 

interface Items {
  title: string;
  riders: string;
  price: string;
  personsperquad: string;
}

interface TourPricesCardProps {
  items: Items[];
}

const TourPricesCard = ({ items }: TourPricesCardProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-16  max-w-6xl">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col rounded-lg shadow-lg bg-zinc-50 p-6">
          <h1 className="text-2xl font-extrabold mb-4">{item.title}</h1>
          <p className="text-gray-600 text-xl font-bold mb-2">{item.riders}</p>
          <p className="text-3xl font-bold text-blue-600 flex items-center mb-4">
            <FaEuroSign size={20} className="mr-1" />{item.price}<span className="text-base ml-1">/per person</span>
          </p>
          <p className="text-lg font-bold mb-4"><FaUsers size={20} className="mr-1" />{item.personsperquad}</p>
          <div className="flex justify-between gap-8 w-fit">
            <Link href="/contact">
              <Button placeholder={""} color="blue">Book Now</Button>
            </Link>
            <Link href="/tours/#tour-details">
              <Button placeholder={""} color="blue">Tour Details</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourPricesCard;
