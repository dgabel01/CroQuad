//HOME PAGE
"use client"
import React from 'react';
import './globals.css'
import Hero from "../../components/HomePageComponents/Hero";
import Tours from '../../components/HomePageComponents/Tours'
import Reviews from '../../components/HomePageComponents/Reviews';
import FrequentlyAsked from '../../components/HomePageComponents/FrequentlyAsked';
import Map from '../../components/HomePageComponents/Map';
import Head from 'next/head'



export default function Home (){ 

  return (
    <>
    <Head>
      <link rel="icon" href="../app/favicon.ico" />
    </Head>

    <Hero/>
    <Tours/>
    <Reviews/>
    <FrequentlyAsked/>
    <Map/>
    </>
    
  );
};
