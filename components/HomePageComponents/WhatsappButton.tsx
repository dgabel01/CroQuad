"use client"
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../../public/logoblack.jpg'

const WhatsappButton = () => {
const chatMessage = 'Hello there! 🤝 \nHow can we help?\n';


return (
    <>
        <FloatingWhatsApp 
            avatar={logo.src}
            onSubmit={() => window.open('whatsapp://send?phone=+385953770460', '_self')}
            accountName='Cro Quad'
            chatboxHeight={350}
            phoneNumber='+385953770460'
            chatMessage={chatMessage}   
            notificationDelay={10}
            
        />    
    </>
)
}

export default WhatsappButton