import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { BlogQueryResult } from "@/app/types";
import { createClient } from "contentful";
import type { Metadata } from 'next'
import cardPicture from '../../../public/jason-goodman-Oalh2MojUuk-unsplash.jpg'
import BlogHero from '../../../components/BlogComponents/BlogHero';

export const metadata: Metadata = {
  title: 'CroQuad Blog',
  description: 'Page where the CroQuad team adds posts about quads and experiences',
}

const client = createClient({
  space: process.env.SPACE_ID || "",
  accessToken: process.env.ACCESS_TOKEN || "",
});

const getBlogEntries = async (): Promise<BlogQueryResult> => {
  const entries = await client.getEntries({ content_type: "blog" });
  return entries as unknown as BlogQueryResult;
};

export default async function Blog() {
  const blogEntries = await getBlogEntries();

  return (
    <>
      <BlogHero/>
      <div className='flex flex-col flex-auto mt-16 gap-8 items-center justify-center'>
          <p className='font-bold text-xl mx-4 text-center mb-24'>
            Welcome to the CroQuad blog where we will be posting our thoughts, tips and tricks, aswell as customer experiences. If you&apos;re someone who relishes the adrenaline rush of exploring the Hvar island on four wheels, then you&apos;ve come to the right place. At CroQuad, we&apos;re passionate about providing you with the means to unlock exhilarating experiences and create unforgettable memories.
            Whether you&apos;re seeking tips for conquering challenging trails, recommendations for scenic routes, or simply a dose of inspiration to fuel your wanderlust, you&apos;ll find it all right here.
          </p>
      </div>

      <span className="relative flex justify-center">
        <div className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-900 to-transparent opacity-75">
        </div>
        <span className="relative z-10 bg-white px-6"></span>
      </span>

      <div className="flex items-center justify-center font-extrabold text-2xl my-24 sm:mb-36 mx-4 text-center xs:text-xl md:text-3xl">
        <h1>Check out our latest blog posts</h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-24">
          {blogEntries.items.map((singlePost) => {
            const { slug, title, date, image, author } = singlePost.fields;
            
            let imageURL :any = cardPicture;
            if(image){
              imageURL = `https:${(image as {fields:{file:{url:string}}}).fields.file.url}`;
            }
          
            return (
              <div key={slug} className="flex flex-col h-full">
                <div className="bg-white rounded-2xl overflow-hidden border-2 shadow-md flex flex-col h-full">
                  <div className="w-full h-48 relative">
                    <Image
                      src={imageURL}
                      fill
                      alt={`${title} blog post thumbnail`}
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="px-6 py-4 flex-grow">
                    <h2 className="tracking-widest text-lg title-font font-medium text-gray-400 mb-2 line-clamp-2">
                      {title}
                    </h2>
                    <p className='font-medium text-base'>
                      By: {author}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Posted on{" "}
                      {new Date(date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="px-6 pt-2 pb-4 mt-auto">
                    <Link href={`/blog/${slug}`}>
                      <span className="inline-block bg-black text-white px-3 py-1 text-base font-semibold mr-2 mb-2 cursor-pointer tracking-widest rounded-full">
                        Read More
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
};