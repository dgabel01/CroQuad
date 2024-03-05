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

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
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
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    id: 2,
    question: "Are reservations required, and how can I book a quad rental?",
    answer:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    id: 3,
    question: "What is included in the rental fee?",
    answer:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    id: 4,
    question: "Can I take the quad off-site or only ride in designated areas?",
    answer:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
];

export default function FrequentlyAsked() {
  const [open, setOpen] = useState<number>(1); 

  const handleOpen = (value: number) => setOpen((prevState) => (prevState === value ? 0 : value)); 

  return (
    <>
      <h1 className="text-3xl text-center font-bold my-16">Frequently Asked Questions</h1>
      {faqData.map((faq) => (
        <Accordion placeholder="" key={faq.id} open={open === faq.id} icon={<Icon id={faq.id} open={open} />}>
          <AccordionHeader placeholder="" onClick={() => handleOpen(faq.id)}>{faq.question}</AccordionHeader>
          <AccordionBody><p className="text-lg">{faq.answer}</p></AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
