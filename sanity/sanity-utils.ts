import { groq } from "next-sanity";
import { client } from "./lib/client";
import { Image } from "sanity";

export const revalidate = 30;

// revalidate at most every 30 seconds

export type Blog = {
  _id: string;
  title: string;
  subtitle: string;
  readtime: number;
  _createdAt: string;
  mainImage: any;
  alt: string;
  categories: [{ title: string }];
  slug: string;
  authors: [
    {
      _id: string;
      name: string;
      image: Image;
      jobTitle: string;
    }
  ];
};

export async function getCategories() {
  return client.fetch(groq`*[_type == 'category']{
    title
  }`);
}

export async function getBlogs(category: string | string[] | undefined) {
  if (category !== undefined) {
    return client.fetch(groq`*[_type == 'post' && category->title == '${category}' ] | order(_createdAt desc)
  {
    _id,
    title,
    subtitle,
    readtime,
    _createdAt,
    authors[]->{_id,name,image,jobTitle},
    mainImage,
    "alt":mainImage.alt,
    category->{title},
    "slug":slug.current,
    }`);
  } else {
    return client.fetch(groq`*[_type == 'post'] | order(_createdAt desc)
  {
    _id,
    title,
    subtitle,
    readtime,
    _createdAt,
    authors[]->{_id,name,image,jobTitle},
    mainImage,
    "alt":mainImage.alt,
    category->{title},
    "slug":slug.current,
    }`);
  }
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
