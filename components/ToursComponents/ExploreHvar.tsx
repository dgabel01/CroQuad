import React from 'react';
import Image from 'next/image';
import hvarPicture from '../../public/hvartourpic.jpeg';

const ExploreHvar = () => {
  return (
    <>
      <div className="w-full  gap-8 flex flex-col lg:flex-row mt-24">
        <div className="lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
          <h1 className="font-extrabold text-3xl p-4 text-center lg:text-left">Explore Hvar</h1>
          <p className="p-4 text-xl text-center lg:text-left">Welcome to the island of Hvar, home to the most UNESCO heritage of any island in the world. An island with more sun than any other in all Europe, the birthplace of organized tourism in Europe in 1868.</p>
          <p className="text-xl ml-4 text-center lg:text-left">An island whose beaches and clear waters are regularly featured in top ten lists, and whose healthy UNESCO Mediterranean Diet is a symbol of its healthy lifestyle. An island fine wine story has attracted the only Master of Wine in all Croatia to make wine from its indigenous grapes.Discovering the layers of history which permeated the island with culture and heritage resembles a perpetual treasure hunt. Twenty-four centuries of urban life left a trace in stone, island monuments, and buildings, but also in all fields of art and everyday life.</p>
        </div>

        <div className="lg:w-1/2 mx-4">
          <Image
            src={hvarPicture}
            width={900}
            height={667}
            className="object-cover w-full h-full rounded-md"
            alt="hvar-image"
          />
        </div>
      </div>
    </>
  );
}

export default ExploreHvar;
