import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function Icon({ id, openId }: { id: number; openId: number | null }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${openId === id ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What are the requirements to rent a quad?",
    answer:
    "Person must be at least 18 years old, with a valid driver's licence."
  },
  {
    id: 2,
    question: "Are reservations required, and how can I book a quad rental?",
    answer:
    "Reservations are required, you can book the ride through our social media platforms, or through our email or phone numbers. Check the contact us page for more information."
  },
  {
    id: 3,
    question: "What is included in the rental fee?",
    answer:
    "The fee includes a guide, helmet, mask and gloves for the best quad experience."
  },
  {
    id: 4,
    question: "Can I take the quad off-site or only ride in designated areas?",
    answer:
    "For on-site tour specifics, consult your quad guide."
  },
  {
    id:5,
    question:"Do you offer pick up to the quad starting spot?",
    answer:"Yes, we offer free pick up for our guests."
  },
];

export default function FrequentlyAsked() {
  const [openId, setOpenId] = useState<number | null>(1); 

  const handleOpen = (value: number) => {
    if (openId === value) {
      setOpenId(null);
    } else {
      setOpenId(value);
    }
  };

  return (
    <>
      <h1 className="text-3xl text-center font-bold my-16" id="faq">Frequently Asked Questions</h1>
      {faqData.map((faq) => (
        <Accordion animate={CUSTOM_ANIMATION} className="bg-stone-100 mb-5 rounded-lg border border-blue-gray-100 px-4" placeholder="" key={faq.id} open={openId === faq.id} icon={<Icon id={faq.id} openId={openId} />}>
          <AccordionHeader className={`border-b-0 transition-colors ${
            openId === faq.id ? "text-blue-700  hover:!text-blue-700" : ""
          }`} placeholder="" onClick={() => handleOpen(faq.id)}>{faq.question}
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-extrabold">
            <p className="text-lg font-extrabold">
              {faq.answer}
            </p>
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
