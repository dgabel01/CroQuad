import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import logo from '../../public/logoblack.jpg';

const WhatsappButton = () => {
    // Check if navigator is available (i.e., in the browser)
    const isBrowser = typeof window !== 'undefined';
    const isIOS = isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

    const openWhatsApp = () => {
        const whatsappLink = 'whatsapp://send?phone=+385953770460';
        if (isBrowser) {
            if (isIOS) {
                window.location.href = whatsappLink;
            } else {
                window.open(whatsappLink, '_blank');
            }
        }
    };

    return (
        <>
            {isBrowser && (
                <FloatingWhatsApp 
                    avatar={logo.src}
                    onSubmit={openWhatsApp}
                    accountName='Cro Quad'
                    chatboxHeight={400}
                    phoneNumber='+385953770460'
                    chatMessage={`Hello there! 🤝 
                    How can we help?
                    Note for Apple users: please use the WhatsApp icon on the page bottom to message us, thanks!
                    `}
                />
            )}
        </>
    );
};

export default WhatsappButton;
