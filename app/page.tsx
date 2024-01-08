import Hero from "@/components/Hero";

import { Separator } from "@/components/ui/separator";

import AllBlog from "@/components/AllBlog";
import {
  getBlogs,
  Blog,
  getCategories,
  getLatestBlog,
} from "@/sanity/sanity-utils";

export const revalidate = 0;

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const selectedCategory: string | string[] | undefined = searchParams.category;
  const blogs: Blog[] = await getBlogs(selectedCategory);
  const categoriesObject: [{ title: string }] = await getCategories();
  const categories: string[] = categoriesObject.map((obj) => obj.title);
  const categoriesWithAll: string[] = ["all", ...categories];
  const latestBlog: Blog = await getLatestBlog();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero item={latestBlog} />
      <Separator />
      <AllBlog blogs={blogs} categories={categoriesWithAll} />
    </main>
  );
}
