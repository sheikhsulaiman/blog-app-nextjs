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
  category: { title: string };
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
export type BlogWithBody = {
  _id: string;
  title: string;
  _updatedAt: string;
  readtime: number;
  _createdAt: string;
  mainImage: any;
  alt: string;
  category: { title: string };
  tags: [{ tagname: string }];
  relatedblogs: [{ _id: string; title: string; slug: string }];

  authors: [
    {
      _id: string;
      name: string;
      image: Image;
      jobTitle: string;
    }
  ];
  body: any;
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
export async function getLatestBlog() {
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
    }[0]`);
}

export async function getBlog(currentSlug: string) {
  return client.fetch(groq`*[_type == 'post' && slug.current == '${currentSlug}']
  {
      _id,
      title,
      "category":category->{title},
      relatedblogs[]->{_id,title,"slug":slug.current},
      _createdAt,
      _updatedAt,
      authors[]->{_id,name,image,jobTitle},
      mainImage,
      alt,
      readtime,
      body,
      tags[]->{tagname}
  }[0]`);
}
