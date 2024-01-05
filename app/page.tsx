import Hero from "@/components/Hero";

import { Separator } from "@/components/ui/separator";

import AllBlog from "@/components/AllBlog";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Separator />
      <AllBlog />
    </main>
  );
}
