import React from 'react'

const ContactsInfo = () => {
  return (
    <>
    <p>Add contact form with resend email functionality when www.croquad.com is set up</p>
    <div className='flex flex-col gap-8 items-center justify-center my-16'>
        <p className='text-2xl font-bold'>Our phone numbers:</p>
        <p className='text-2xl text-blue-400 font-bold'>+385 99 123 4567</p>
        <p className='text-2xl text-blue-400 mb-4 font-bold'>+385 99 456 7890</p>
        <p className='text-2xl font-bold'>E-mail us at:</p>
        <a href='mailto:croquad@gmail.com' className='text-blue-400 text-3xl font-bold'>croquad@gmail.com</a>
        <p className='text-a text-center text-2xl ml-4 font-bold'>Or choose to book your ride below, through one of our social medias:</p>
    </div>
    </>
  )
}

export default ContactsInfo;