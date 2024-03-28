"use client"
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../../public/logoblack.jpg'
import './styles.css'

const WhatsappButton = () => {
const chatMessage = 'Hello there! 🤝 \nHow can we help?\n The app is still in bulding process, if you are actually interested in a ride,please contact +385957021991';


return (
    <>
        <FloatingWhatsApp 
            avatar={logo.src}
            onSubmit={() => window.open('whatsapp://send?phone=+385953770460', '_self')}
            accountName='Cro Quad'
            chatboxHeight={400}
            phoneNumber='+1234567890'
            chatMessage={chatMessage}   
        />    
    </>
)
}

export default WhatsappButton