"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Combobox } from "@/components/combo-box";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Card from "./Card";
import { Blog } from "@/sanity/sanity-utils";

const AllBlog = ({
  blogs,
  categories,
}: {
  blogs: Blog[];
  categories: string[];
}) => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const selectedCategory = categories.includes(
    searchParams.get("category") as string
  )
    ? searchParams.get("category")
    : categories[0];

  return (
    <div className="w-full">
      <div className="container mt-6 mx-auto flex w-full items-center justify-between">
        <div className="lg:hidden">
          <Combobox categories={categories} />
        </div>
        <div className="hidden lg:flex items-center flex-grow gap-x-2">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={selectedCategory === category ? "default" : "outline"}
              size={"sm"}
              className="capitalize "
              onClick={() => {
                router.replace(
                  category === "all" ? "/" : `/?category=${category}`,
                  { scroll: false }
                );
              }}
            >
              {category}
            </Button>
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
      {blogs.length === 0 && (
        <div className="container mx-auto w-full h-40 flex items-center justify-center border rounded-md my-6 bg-slate-100">
          <p className="font-semibold text-slate-700">No blogs found!</p>
        </div>
      )}
      {blogs.length > 0 && (
        <ol className="container mx-auto grid grid-cols-12 py-10 lg:py-16 lg:gap-16">
          {blogs.map((blog) => (
            <Card blog={blog} key={blog._id} />
          ))}
        </ol>
      )}
    </div>
  );
};

export default AllBlog;
