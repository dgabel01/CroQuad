//HOME PAGE
"use client"
import React from 'react';
import './globals.css'
import Hero from "../../components/HomePageComponents/Hero";
import Tours from '../../components/HomePageComponents/Tours'
import Reviews from '../../components/HomePageComponents/Reviews';
import FrequentlyAsked from '../../components/HomePageComponents/FrequentlyAsked';
import Map from '../../components/HomePageComponents/Map';
import { Helmet } from 'react-helmet-async'; 



export default function Home (){ 

  return (
    <>
     <Helmet>
        <link rel="icon" href="/src/app/favicon.ico" /> 
      </Helmet>
      
    <Hero/>
    <Tours/>
    <Reviews/>
    <FrequentlyAsked/>
    <Map/>
    </>
    
  );
};
