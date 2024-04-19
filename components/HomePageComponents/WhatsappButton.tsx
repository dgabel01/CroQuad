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
            onSubmit={() => window.open('whatsapp://send?phone=+385915368338', '_self')}
            accountName='Cro Quad'
            chatboxHeight={400}
            phoneNumber='+385915368338'
            chatMessage={chatMessage}   
            notificationDelay={15}
            style={{marginBottom:"120px"}}
        />    
        <div className="fixed bottom-1 right-3">
            <p className='font-extrabold text-sm'>Message Us</p>
        </div>
    </>
)
}

export default WhatsappButton