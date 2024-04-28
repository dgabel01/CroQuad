import React from 'react'

const ContactForm = () => {
  return (
    <>
    <h1 className='text-3xl text-center font-extrabold mt-10 sm:mt-32 mb-16'>Fill out the form to reach Us</h1>
    <form action="https://formsubmit.co/croquad01@gmail.com" method="POST" className='m-auto my-10 sm:my-36 flex flex-col items-center justify-center gap-8 sm:gap-16'>
      <input type="text" name="name" required className='border-2 w-full sm:w-96 p-2 rounded-lg' placeholder='Name'/>
      <input type="email" name="email" required className='border-2 w-full sm:w-96 p-2 rounded-lg' placeholder='Email'/>
      <textarea name="message" id="message" cols={2} rows={8} className='border-2 w-full sm:w-96 rounded-lg p-2' placeholder='Message'></textarea>
      <button type="submit" className='rounded-lg bg-blue-400 p-2 w-36 text-white hover:bg-blue-600'>Send</button>
    </form>
    
    </>
  )
}

export default ContactForm;
