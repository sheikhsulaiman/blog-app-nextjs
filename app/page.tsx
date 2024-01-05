import Hero from "@/components/Hero";

import { Separator } from "@/components/ui/separator";

import AllBlog from "@/components/AllBlog";
import { getBlogs } from "@/sanity/sanity-utils";

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Separator />
      <AllBlog blogs={blogs} />
    </main>
  );
}
