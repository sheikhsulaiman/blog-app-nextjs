import Hero from "@/components/Hero";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = ["All", "Education", "Tech", "Business"];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Separator />
      <div className="container mx-auto flex w-full items-center justify-between">
        <div className="hidden lg:flex items-center flex-grow gap-x-2">
          {categories.map((category, index) => (
            <Button key={index} variant={"outline"} size={"sm"}>
              {category}
            </Button>
          ))}
        </div>
        <form>
          <div className="relative flex items-center -space-x-6">
            <Search className="w-4 h-4 text-muted-foreground" />

            <Input
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      <ol className="grid grid-cols-12 py-10 lg:py-16 lg:gap-16">
        <div className="col-span-12 mb-16 md:col-span-12 lg:col-span-6 xl:col-span-4">
          <div className="w-full cursor-pointer">
            <Link className="space-y-3" href="/">
              <Image
                className="relative w-full aspect-[2/1] lg:aspect-[3/2] overflow-auto rounded-lg border"
                src="/screenshot.png"
                alt="image"
                height={640}
                width={960}
              />
              <div className="flex flex-col space-y-4">
                <div className="text-slate-500 flex space-x-2 text-sm">
                  <span>19 December 2023</span>
                  <span>•</span>
                  <span>6 minute read</span>
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl text-bold">Top Blog Title</h2>
                  <p className="text-xl text-muted-foreground line-clamp-3">
                    Our CEO takes a look at his favorite ships from LWX
                  </p>
                </div>
                <div className=" flex  w-max gap-2">
                  <div className="flex -space-x-3 ">
                    <Avatar>
                      <AvatarImage src="/profile-pic.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </ol>
    </main>
  );
}
