import React from 'react';
import Image from 'next/image';
import logoImage from '../../public/logored.jpg'

interface LogoProps {
  height: number;
  mixBlendMode?: string | any;
}

const Logo: React.FC<LogoProps> = ({ height, mixBlendMode }) => {
  

  const imageStyle = {
    mixBlendMode: mixBlendMode || 'normal',
  };

  return (
    <Image
      alt="logo"
      src={logoImage}
      height={height}
      className="m-0 p-0"
      style={imageStyle}
    />
  );
};

export default Logo;
