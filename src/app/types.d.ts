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
    }
}
export type BlogItems = ReadonlyArray<BlogItem>;

export type BlogQueryResult = {
    items: BlogItems;
}