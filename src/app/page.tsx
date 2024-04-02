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
      <link rel="icon" type='image/png' sizes='96x96' href="favicon.ico" />
      <link rel="icon" type='image/x-icon' sizes='192x192' href="/public/android-chrome-192x192.png" />
      <link rel="icon" type='image/x-icon' sizes='512x512' href="/public/android-chrome-512x512.png" />
      <link rel="icon" type='image/x-icon' href="/public/apple-touch-icon.png" />
    </Head>

    <Hero/>
    <Tours/>
    <Reviews/>
    <FrequentlyAsked/>
    <Map/>
    </>
    
  );
};
