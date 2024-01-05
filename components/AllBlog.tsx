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
import { getBlogs } from "@/sanity/sanity-utils";
import Card from "./Card";

const categories = ["all", "education", "tech", "business"];

export interface Blog {
  _id: string;
  currentSlug: string;
  imageUrl: string;
  title: string;
  smallDescription: string;
}

const AllBlog = ({ blogs }: { blogs: Blog[] }) => {
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
      <ol className="container mx-auto grid grid-cols-12 py-10 lg:py-16 lg:gap-16">
        {blogs.map((blog) => (
          <Card blog={blog} />
        ))}
      </ol>
    </div>
  );
};

export default AllBlog;
