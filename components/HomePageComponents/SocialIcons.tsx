import { FaWhatsapp, FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';
import Link from 'next/link';

const SocialIcons = () => {
  return (
    <div className='mx-8 flex flex-col gap-8 rounded-lg p-8 bg-sky-300 text-center'>

      <h1 className='text-white font-extrabold text-4xl mb-8'>Our Socials</h1>
      <h2 className='text-white font-extrabold text-4xl mb-8'>Get in Touch!</h2>

      <div className='flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-14 md:gap-24'>
        <Link href={"whatsapp://send?phone=+385957021991"} aria-label='WhatsApp link'>
          <FaWhatsapp size={36} color='white' />
        </Link>
        <Link href={""} aria-label='Facebook link'>
          <FaFacebook size={36} color='white' />
        </Link>
        <Link href={"https://www.instagram.com/cro_quad?igsh=MXN1MHA4aWp3ZHJwaQ=="} aria-label="Instagram link" target="_blank">
          <FaInstagram size={36} color='white' />
        </Link>
        <Link href={""} aria-label='Google business link'>
          <FaGoogle size={36} color='white' />
        </Link>
      </div>

    </div>
  );
};

export default SocialIcons;
