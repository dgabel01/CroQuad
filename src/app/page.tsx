//HOME PAGE
"use client"
import React from 'react';
import './globals.css'
import Hero from "../../components/Hero";
import Tours from '../../components/Tours'
import Reviews from '../../components/Reviews';
import FrequentlyAsked from '../../components/FrequentlyAsked';


export default function Home (){ 

  return (
    <>
    <Hero/>
    <Tours/>
    <Reviews/>
    <FrequentlyAsked/>
    </>
    
  );
};
