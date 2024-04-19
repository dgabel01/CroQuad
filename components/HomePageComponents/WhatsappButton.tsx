"use client"
import React, { useState } from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../../public/logoblack.jpg'
import './styles.css'

const WhatsappButton = () => {
const [message, setMessage] = useState(false);
const chatMessage = 'Hello there! 🤝 \nHow can we help?\n'

setTimeout(()=>{
    setMessage(true);
},15000)

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
        {message && <div className="fixed bottom-1 right-3">
            <p className='font-extrabold text-sm'>Message Us</p>
        </div>}
    </>
)
}

export default WhatsappButton