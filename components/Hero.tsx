import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <div className="overflow-hidden py-12 lg:py-20">
      <div className="container mx-auto px-8 sm:px-16 xl:px-20">
        <div className="mx-auto">
          <div className="w-full cursor-pointer">
            <Link className="grid gap-8 lg:grid-cols-2 lg:gap-16" href="/">
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
                    <Avatar className="z-10">
                      <AvatarImage src="/profile-pic.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-foreground font-semibold m-0 text-sm">
                      Sheikh Sulaiman
                    </span>
                    <span className="text-muted-foreground m-0 text-xs">
                      CEO and Co-Founder
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
