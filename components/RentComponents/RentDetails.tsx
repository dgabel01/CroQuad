import React from 'react';
import { saveAs } from 'file-saver';
import Link from 'next/link';
import { Button } from "@material-tailwind/react";


const RentDetails = () => {

    // const handleDownloadPdf = () => {
    //     // Construct the URL of the PDF file
    //     const pdfUrl = '/QASG_PLACES AND ROUTES.pdf';

    //     // Trigger download
    //     saveAs(pdfUrl, 'rent_details.pdf');
    // };

    return (
        <>
            <div className='flex flex-col gap-16'>
                <div className='flex flex-col gap-8'>
                    <div>
                        <p className='font-bold text-2xl'>*We have a total of 3 quad bikes available, with a maximum capacity of 6 people.</p>
                    </div>
                    <ul className='text-2xl font-medium'>
                        <li className='my-8 font-bold'>ATV details:</li>
                        <li>
                            - Liquid-cooled four-stroke single-cylinder engine provides ample power for hard work and spirited acceleration.
                        </li>
                        <li className='my-8'>
                            - Electrically selectable 4x4 drive delivers excellent traction on any surface. Electric front differential lock is available on rough terrain.
                        </li>
                        <li className='my-8'>
                            - Dashboard with LCD screen and blue backlighting is easy to read and provides the driver with all important information.
                        </li>
                    </ul>
                    <p className='text-2xl ml-4 font-extrabold'>*We will also provide you with the <i>CroQuad Adventure Guide</i> for an extensive overview of quad biking on Hvar, including information about beaches, restaurants, gas stations, and routes.</p>
                </div>

                <Link href={"/contact"}>
                    <div className="flex flex-col items-center justify-center">
                        <Button placeholder={""} color="blue" className='text-md'>Book Now</Button>
                    </div>
                </Link>

                {/* <div className="flex flex-col items-center justify-center">
                    <p className='font-extrabold text-2xl mb-8 mx-4 text-red-500'>Download the CroQuad Adventure Guide for an extensive overview of quad biking on Hvar, including information about beaches, restaurants, gas stations, and routes:</p>
                    <Button placeholder={""} color="blue" className='text-md' onClick={handleDownloadPdf}>Download PDF</Button>
                </div> */}
            </div>
        </>
    );
}

export default RentDetails;
