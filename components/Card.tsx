import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/sanity/sanity-utils";
import { urlForImage } from "@/sanity/lib/image";

const Card = ({ blog }: { blog: Blog }) => {
  return (
    <div className="col-span-12  mb-16 md:col-span-12 lg:col-span-6 xl:col-span-4">
      <div className="w-full cursor-pointer hover:scale-105 transition">
        <Link className="space-y-3 " href={`/blog/${blog.slug}`}>
          <Image
            className="relative w-full aspect-[2/1] lg:aspect-[3/2] overflow-auto rounded-lg border"
            src={urlForImage(blog.mainImage)}
            alt="image"
            height={640}
            width={960}
          />
          <div className="flex flex-col space-y-4">
            <div className="space-y-3">
              <h2 className="text-xl text-bold">{blog.title}</h2>
              <p className=" text-muted-foreground line-clamp-3">
                {blog.subtitle}
              </p>
            </div>
            <div className="text-slate-500 flex space-x-2 text-sm">
              <span>
                {Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(blog._createdAt))}
              </span>
              <span>•</span>
              <span>{blog.readtime} minute read</span>
            </div>
            <div className=" flex  w-max gap-2">
              <div className="flex -space-x-3 ">
                {blog.authors.map((author) => (
                  <Avatar>
                    <AvatarImage src={urlForImage(author.image)} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
