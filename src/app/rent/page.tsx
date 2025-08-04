import React from 'react';
import RentHero from '../../../components/RentComponents/RentHero';
import RentTabs from '../../../components/RentComponents/RentTabs';
import SocialIcons from '../../../components/HomePageComponents/SocialIcons';
import MyGallery from '../../../components/HomePageComponents/MyGallery';
import { aboutimages } from '../../../components/AboutComponents/aboutimages';
const Rent = () => {
 

  return (
    <>
      <RentHero />
      <RentTabs/>
      <SocialIcons/>
      <MyGallery images={aboutimages} title='Browse our gallery'/>
    </>
  );
};

export default Rent;
