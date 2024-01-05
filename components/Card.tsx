import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";
import Image from "next/image";
import { Blog } from "./AllBlog";

const Card = ({ blog }: { blog: Blog }) => {
  return (
    <div className="col-span-12 mb-16 md:col-span-12 lg:col-span-6 xl:col-span-4">
      <div className="w-full cursor-pointer">
        <Link className="space-y-3" href={`/${blog.currentSlug}`}>
          <Image
            className="relative w-full aspect-[2/1] lg:aspect-[3/2] overflow-auto rounded-lg border"
            src={blog.imageUrl}
            alt="image"
            height={640}
            width={960}
          />
          <div className="flex flex-col space-y-4">
            <div className="space-y-3">
              <h2 className="text-xl text-bold">{blog.title}</h2>
              <p className=" text-muted-foreground line-clamp-3">
                {blog.smallDescription}
              </p>
            </div>
            <div className="text-slate-500 flex space-x-2 text-sm">
              <span>19 December 2023</span>
              <span>•</span>
              <span>6 minute read</span>
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
  );
};

export default Card;
