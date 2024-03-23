"use client"
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../../public/logoblack.jpg'

const WhatsappButton = () => {
return (
    <>
        <FloatingWhatsApp 
            avatar={logo.src}
            onSubmit={() => window.open('whatsapp://send?phone=+385953770460', '_self')}
            accountName='Cro Quad'
            chatboxHeight={350}
            phoneNumber='+385953770460'
            chatMessage='Hello there! 🤝 
            How can we help?
            Note for Apple users: please use the WhatsApp icon on the page bottom to message us, thanks!
            '
        />    
    </>
)
}

export default WhatsappButton