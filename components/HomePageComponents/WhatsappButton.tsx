"use client"
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../../public/logoblack.jpg'

const WhatsappButton = () => {
return (
    <>
        <FloatingWhatsApp 
            avatar={logo.src}
            accountName='Cro Quad'
            phoneNumber='+385 95 702 1991'
        />    
    </>
)
}

export default WhatsappButton