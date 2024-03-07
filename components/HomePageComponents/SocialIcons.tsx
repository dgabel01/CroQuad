import { FaWhatsapp, FaFacebook, FaInstagram, FaGoogle } from 'react-icons/fa';
import Link from 'next/link';

const SocialIcons = () => {
  return (
    <div className='mx-4 flex flex-col gap-8 rounded-lg p-8 bg-blue-200 text-center'>

      <h1 className='text-white font-extrabold text-3xl mb-4'>Our Socials</h1>

      <div className='flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-6 md:gap-24'>
        <Link href={""}>
          <FaWhatsapp size={36} color='white' />
        </Link>
        <Link href={""}>
          <FaFacebook size={36} color='white' />
        </Link>
        <Link href={""}>
          <FaInstagram size={36} color='white' />
        </Link>
        <Link href={""}>
          <FaGoogle size={36} color='white' />
        </Link>
      </div>

    </div>
  );
};

export default SocialIcons;
