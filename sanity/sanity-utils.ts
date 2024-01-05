import { createClient, groq } from "next-sanity";
import { client } from "./lib/client";

export const revalidate = 30; // revalidate at most every 30 seconds

export async function getBlogs() {
  return client.fetch(groq`*[_type == 'blog'] | order(_createdAt asc) 
  {
    _id,
      "currentSlug":slug.current,
      "imageUrl": titleImage.asset->url,
      title,
      smallDescription,
  }`);
}

export async function getBlog(currentSlug: string) {
  return client.fetch(groq`*[_type == 'blog' && slug.current == '${currentSlug}']{
          title,
          _updatedAt,
          _createdAt,
          "currentSlug":slug.current,
          "imageUrl": titleImage.asset->url,
          smallDescription,
          content,
      } [0]`);
}
