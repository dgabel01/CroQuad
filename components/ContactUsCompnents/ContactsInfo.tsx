"use client";
import FrequentlyAsked from "../HomePageComponents/FrequentlyAsked";
import { Button } from "@material-tailwind/react";
import Router from "next/navigation";
import { useRouter } from "next/navigation";

const ContactsInfo = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/prices/#prices-header")
  };

  return (
    <>
      <h1 className="font-extrabold text-3xl text-cener mx-4 text-center mt-16">
        Our preffered ways of contact:
      </h1>
      <div className="flex flex-col gap-8 items-center justify-center my-24">
        <p className="text-2xl mx-4 font-extrabold text-center">
          1) Phone number(or the WhatsApp button in the bottom right corner):
        </p>
        <a
          href="tel:+385915368338"
          className="text-3xl text-blue-400 mb-4 mx-4 font-bold underline italic"
        >
          +385 91 536 8338
        </a>
        <p className="text-2xl my-2 font-extrabold">2) E-mail us at:</p>
        <a
          href="mailto:croquad01@gmail.com"
          className="text-blue-400 text-3xl md:text-3xl mx-4 font-bold underline italic"
        >
          croquad01@gmail.com
        </a>
      </div>
      <FrequentlyAsked />
      <div className="flex items-center justify-center my-8">
        <Button
          placeholder=""
          variant="text"
          className=" gap-2 border-2 mx-4 bg-zinc-50"
          size="lg"
          onClick={handleClick}
        >
          Tour Prices&rarr;
        </Button>
      </div>
    </>
  );
};

export default ContactsInfo;
