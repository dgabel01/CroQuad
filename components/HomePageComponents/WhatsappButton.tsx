"use client"
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../../public/logoblack.jpg'
import './styles.css'

const WhatsappButton = () => {
const chatMessage = 'Hello there! 🤝 \nHow can we help?\n'


return (
    <>
        <FloatingWhatsApp 
            avatar={logo.src}
            onSubmit={() => window.open('whatsapp://send?phone=+385957021991', '_self')}
            accountName='Cro Quad'
            chatboxHeight={400}
            phoneNumber='+385957021991'
            chatMessage={chatMessage}   
        />    
    </>
)
}

export default WhatsappButton