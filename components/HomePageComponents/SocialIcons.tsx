import { FaWhatsapp, FaFacebook, FaInstagram, FaGoogle} from 'react-icons/fa';
import { MdOutlineEmail } from "react-icons/md";
import Link from 'next/link';

const SocialIcons = () => {
  return (
    <div className='mx-8 flex flex-col gap-8 rounded-lg p-8 bg-sky-300 text-center shadow-lg'>

      <h1 className='text-white font-extrabold text-4xl mb-8 italic'>Our Socials</h1>
      <h2 className='text-white font-extrabold text-4xl mb-8'>Get in Touch!</h2>

      <div className='flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-14 md:gap-24'>
        <Link href={"whatsapp://send?phone=+385915368338"} aria-label='WhatsApp link'>
          <FaWhatsapp size={48} color='white' />
        </Link>
        <Link href={"https://www.facebook.com/profile.php?id=61559674970306"} target='_blank' aria-label='Facebook link'>
          <FaFacebook size={48} color='white' />
        </Link>
        <Link href={"https://www.instagram.com/cro_quad?igsh=MXN1MHA4aWp3ZHJwaQ=="} aria-label="Instagram link" target="_blank">
          <FaInstagram size={48} color='white' />
        </Link>
        <Link href={"https://g.co/kgs/WpScwR1"} target='_blank' aria-label='Google business link'>
          <FaGoogle size={48} color='white' />
        </Link>
        <Link href={"mailto:croquad01@gmail.com"} aria-label='Mail link'>
          <MdOutlineEmail  size={48} color='white'/>
        </Link>
      </div>

    </div>
  );
};

export default SocialIcons;
