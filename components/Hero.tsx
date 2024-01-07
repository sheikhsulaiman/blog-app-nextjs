import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Blog } from "@/sanity/sanity-utils";
import { urlForImage } from "@/sanity/lib/image";

const Hero = ({ item }: { item: Blog }) => {
  return (
    <div className="overflow-hidden py-12 lg:py-20">
      <div className="container mx-auto px-8 sm:px-16 xl:px-20">
        <div className="mx-auto">
          <div className="w-full cursor-pointer">
            <Link
              className="grid gap-8 lg:grid-cols-2 lg:gap-16"
              href={`/${item.slug}`}
            >
              <Image
                className="relative w-full aspect-[2/1] lg:aspect-[3/2] overflow-auto rounded-lg border"
                src={urlForImage(item.mainImage)}
                alt={item.alt}
                height={640}
                width={960}
              />
              <div className="flex flex-col space-y-4">
                <div className="text-slate-500 flex space-x-2 text-sm">
                  <span>
                    {Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(new Date(item._createdAt))}
                  </span>
                  <span>•</span>
                  <span>{item.readtime} minute read</span>
                </div>
                <div className="space-y-3">
                  <h2 className="text-3xl text-bold">{item.title}</h2>
                  <p className="text-xl text-muted-foreground line-clamp-3">
                    {item.subtitle}
                  </p>
                </div>

                {item.authors.map((author) => (
                  <div key={author._id} className=" flex  w-max gap-2">
                    <div className="flex -space-x-3 ">
                      <Avatar className="z-10">
                        <AvatarImage src={urlForImage(author.image)} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-foreground font-semibold m-0 text-sm">
                        {author.name}
                      </span>
                      <span className="text-muted-foreground m-0 text-xs">
                        {author.jobTitle}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
