import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import { BlogQueryResult } from "@/app/types";
import { createClient } from "contentful";
import type { Metadata } from 'next'
import cardPicture from '../../../public/jason-goodman-Oalh2MojUuk-unsplash.jpg'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Page where the CroQuad team posts new blog entries',
}

const client = createClient({
  space: process.env.SPACE_ID || "",
  accessToken: process.env.ACCESS_TOKEN || "",
});

const getBlogEntries = async (): Promise<BlogQueryResult> => {
  const entries = await client.getEntries({ content_type: "blog" });
  return entries as unknown as BlogQueryResult;

};

export default async function  Blog(){
  const blogEntries = await getBlogEntries();

  return (
    <>
      <div className="flex items-center justify-center font-extrabold text-3xl mt-8 text-center xs:text-xl md:text-3xl">
        <h1>Check out our latest blog posts</h1>
      </div>

      <main className="flex flex-col justify-center items-center gap-24 xs:m-auto lg:p-12">
        {blogEntries.items.map((singlePost) => {
          const { slug, title, date, image, author } = singlePost.fields;
          
          let imageURL :any = cardPicture;
          if(image){
            imageURL = `https:${(image as {fields:{file:{url:string}}}).fields.file.url}`;
          }
        
          return (
            <div
              className=" xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 m-4"
              key={slug}
            >
              <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={imageURL}
                  width={400}
                  height={300}
                  alt="card-picture"
                  className="w-full h-48 object-cover"
                />
                <div className="px-6 py-4">
                  <p className="tracking-widest text-sm title-font font-medium text-gray-400 mb-2">
                    {title}
                  </p>
                  <p>
                    By: {author}
                  </p>
                  <div className="title-font text-lg font-medium mb-2"></div>
                  <span>
                    Posted on{" "}
                    {new Date(date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <Link href={`/blog/${slug}`}>
                    <span className="inline-block bg-black text-white px-3 py-1 text-sm font-semibold mr-2 mb-5 cursor-pointer tracking-widest rounded-full hover:bg-purple-600">
                      Read More
                    </span>
                    </Link>
                </div>
              </div>
            </div>
          );
        })}
      </main>

   
    
    </>
  )
};

