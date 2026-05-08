import { BlogItem } from "@/app/types";
import { documentToReactComponents, Options, RenderText} from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import type { Metadata } from 'next'
import cardPicture from "../../../../public/jason-goodman-Oalh2MojUuk-unsplash.jpg"
import Image from "next/image";

export const metadata: Metadata = {
        title: 'Blog',
        description: 'Single blog item page',
}

const options: Options = {
  preserveWhitespace: true,
};

const renderText: RenderText = (text: string) => {
  // If preserveWhitespace option is enabled, render the text without trimming whitespace
  if (options && options.preserveWhitespace) {
    return text;
  }
  // Otherwise, render the text with whitespace trimmed
  return text.trim();
};

// Create client only when credentials are available
const createContentfulClient = () => {
  if (!process.env.SPACE_ID || !process.env.ACCESS_TOKEN) {
    return null;
  }
  return createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });
};
  
  type BlogPageProps = {
    params: {
      slug: string;
    };
  };
  
  export async function generateStaticParams() {
    const client = createContentfulClient();
    if (!client) {
      return [];
    }

    try {
      const queryOptions = {
        content_type: "blog",
        select: "fields.slug",
      };
    
      const articles = await client.getEntries(queryOptions);
      return articles.items.map((article) => ({
        slug: article.fields.slug,
      }));
    } catch (error) {
      console.warn("Failed to generate static params for blog posts:", error);
      return [];
    }
  }
  
  const fetchBlogPost = async (slug: string): Promise<BlogItem | null> => {
    const client = createContentfulClient();
    if (!client) {
      return null;
    }

    try {
      const queryOptions = {
        content_type: "blog",
        "fields.slug[match]": slug,
      };
      const queryResult = await client.getEntries(queryOptions);
      return queryResult.items[0] as unknown as BlogItem;
    } catch (error) {
      console.warn("Failed to fetch blog post:", error);
      return null;
    }
  };


  export default async function BlogPage(props: BlogPageProps) {
    const { params } = props;
    const { slug } = params;
    const article = await fetchBlogPost(slug);
    
    // Handle case when article is not found
    if (!article) {
      return (
        <main className="min-h-screen p-24 flex justify-center mt-24">
          <div className="max-w-2xl text-center flex flex-col items-center justify-center">
            <h1 className="font-extrabold text-3xl mx-8 mb-8">Blog Post Not Found</h1>
            <p className="text-xl text-slate-400">The blog post you&apos;re looking for is not available.</p>
          </div>
        </main>
      );
    }

    const { title, date, content, image, author} = article.fields;
  
      
    let imageURL :any = cardPicture;
    if (image && image.fields && image.fields.file && image.fields.file.url) {
      imageURL = `https:${image.fields.file.url}`;
    }
    
  
    return (
      <main className="min-h-screen p-24 flex justify-center mt-24">
        <div className="max-w-2xl text-center flex flex-col items-center justify-center">
          <Image
            src={imageURL}
            width={550}
            height={400}
            alt="post-picture"
            className="rounded-md mb-8"
          />
          <h1 className="font-extrabold text-3xl mx-8 mb-8">{title}</h1>
          <p>By: {author}</p>
          <p className="mb-6 text-slate-400 ">
            Posted on{" "}
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <hr className="w-5/6 h-1 mx-auto my-8 bg-gray-800 file:border-0 rounded md:my-10 dark:bg-gray-700"/>
          <div className="leading-loose mx-8 text-xl mt-4 text-start whitespace-pre-line">
            {documentToReactComponents(content, { ...options, renderText })}
          </div>
        </div>
      </main>
    );
  }
  
  