"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui";

interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: { asset: { url: string } };
}

interface BlogContentProps {
  blogs: Blog[];
}

const BlogContent: React.FC<BlogContentProps> = ({ blogs }) => {
  return (
    <div className="container mx-auto space-y-24 px-4 pb-64 pt-32">
      {blogs.map((blog: Blog, index: number) => (
        <section
          key={blog._id}
          className={`flex flex-col items-center gap-8 md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {blog.title}
            </h2>
            <p className="text-gray-200 dark:text-gray-400">{blog.excerpt}</p>
            <Button>Learn More</Button>
          </div>
          <div className="flex-1">
            <Image
              src={blog.mainImage.asset.url}
              alt={blog.title}
              width={500}
              height={500}
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default BlogContent;
