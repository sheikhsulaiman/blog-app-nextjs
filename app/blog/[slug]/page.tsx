import { getBlog } from "@/sanity/sanity-utils";
import Image from "next/image";
import React, { Suspense } from "react";
import Loading from "./loading";
import { CalendarClockIcon, CalendarIcon } from "lucide-react";
import { PortableText } from "@portabletext/react";

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
  const data: Blog = await getBlog(params.slug);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" gap-2 max-w-5xl w-full items-center justify-between  text-sm lg:flex flex-wrap">
        <Suspense fallback={<Loading />}>
          <Image
            alt={params.slug}
            src={data.imageUrl as string}
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
        <p>{data.smallDescription}</p>
        <div className=" mt-16 prose prose-stone dark:prose-invert">
          <PortableText value={data.content} />
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
