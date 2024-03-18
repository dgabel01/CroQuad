import { Document } from '@contentful/rich-text-types';

export type BlogItem = {
    fields: {
        title: string;
        slug: string;
        date: Date;
        content: Document;
        image:{
            fields:{
                file:{
                    url:string;
                }
            }
        }; 
        author:string;
        //video
        //code
    }
}
export type BlogItems = ReadonlyArray<BlogItem>;

export type BlogQueryResult = {
    items: BlogItems;
}