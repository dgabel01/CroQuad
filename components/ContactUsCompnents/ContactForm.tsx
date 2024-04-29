//FORMSPREE
"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xzbnobnb");

  const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleSubmit(e);
    if (state.succeeded) {
      toast.success("Form sent!");
    }
  };

  return (
    <>
      <ToastContainer position='top-center'/>
      <h1 className='text-center text-2xl font-extrabold mx-4 mt-24'>Fill out the form to contact Us</h1>
      <form onSubmit={onSubmit} className="mx-auto my-10 sm:my-36 flex flex-col items-center justify-center gap-8 sm:gap-16 max-w-md">
        <label htmlFor="name" className="sr-only">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          className="border-2 w-full p-2 rounded-lg"
          placeholder="Name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="email" className="sr-only">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          className="border-2 w-full p-2 rounded-lg"
          placeholder="Email Address"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea
          id="message"
          name="message"
          className="border-2 w-full rounded-lg p-2 h-48"
          placeholder="Message"
        >
        </textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button
          type="submit"
          disabled={state.submitting}
          className="rounded-lg bg-blue-400 p-2 w-36 text-white hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactForm;
