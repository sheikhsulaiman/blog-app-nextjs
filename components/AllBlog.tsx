"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { Combobox } from "@/components/combo-box";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";

const categories = ["all", "education", "tech", "business"];

const AllBlog = () => {
  const searchParams = useSearchParams();
  const selectedCategory = categories.includes(
    searchParams.get("category") as string
  )
    ? searchParams.get("category")
    : categories[0];
  return (
    <div>
      <div className="container mt-6 mx-auto flex w-full items-center justify-between">
        <div className="lg:hidden">
          <Combobox categories={categories} />
        </div>
        <div className="hidden lg:flex items-center flex-grow gap-x-2">
          {categories.map((category, index) => (
            <Link href={`/?category=${category}`}>
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "outline"}
                size={"sm"}
                className="capitalize "
              >
                {category}
              </Button>
            </Link>
          ))}
        </div>
        <form>
          <div className="relative flex items-center -space-x-6">
            <Search className="w-4 h-4 text-muted-foreground" />

            <Input
              className="peer/input block box-border w-full rounded-md shadow-sm transition-all text-foreground focus-visible:shadow-md outline-none focus:ring-current focus:ring-2 focus-visible:border-foreground-muted focus-visible:ring-background-control placeholder-foreground-muted bg-foreground/[.026] border border-control text-sm leading-4 px-3 py-2 pl-10"
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
    </div>
  );
};

export default AllBlog;
