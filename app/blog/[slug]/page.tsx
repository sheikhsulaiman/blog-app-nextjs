import { BlogWithBody, getBlog } from "@/sanity/sanity-utils";
import Image from "next/image";
import React, { Suspense } from "react";
import Loading from "./loading";
import { CalendarClockIcon, CalendarIcon, ChevronLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 30; // revalidate at most every 30 seconds

interface BlogPageProps {
  params: {
    slug: string;
  };
}

interface Blog {
  title: string;
  _updatedAt: string;
  _createdAt: string;
  currentSlug: string;
  imageUrl?: string;
  smallDescription: string;
  content: any;
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const data: BlogWithBody = await getBlog(params.slug);
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="container mx-auto px-6 py-4 md:py-8 xl:py-16 sm:px-16 xl:px-20">
        <div className="grid grid-cols-12 gap-4">
          <div className="hidden col-span-12 xl:block lg:col-span-2">
            <Link
              href={"/"}
              className="text-foreground-lighter font-semibold hover:text-foreground flex cursor-pointer items-center text-sm transition"
            >
              <ChevronLeft />
              Back
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-12 xl:col-span-10"></div>
        </div>
        <Suspense fallback={<Loading />}>
          <Image
            alt={data.alt}
            src={urlForImage(data.mainImage)}
            height={700}
            width={900}
            className="w-full h-auto rounded-lg"
          />
        </Suspense>

        <div className="border p-2 rounded-sm my-2 w-full">
          <h1 className="sm:text-2xl md:text-3xl font-extrabold text-center my-1">
            {data.title}
          </h1>
          <hr />
          <div className="flex flex-col gap-2 md:flex-row justify-between items-center my-1">
            <div className="flex justify-center items-center gap-x-2">
              <div className="my-auto">
                <CalendarIcon className="h-4 w-4" />
              </div>
              <p>
                {Intl.DateTimeFormat("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(data._createdAt))}
              </p>
            </div>
            <div className="flex justify-center items-center gap-x-2">
              <p>
                {Intl.DateTimeFormat("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }).format(new Date(data._createdAt))}
              </p>
              <div className="my-auto">
                <CalendarClockIcon className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-16 prose prose-stone dark:prose-invert">
          <PortableText value={data.body} />
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
