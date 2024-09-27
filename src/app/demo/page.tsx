import { defineQuery } from "next-sanity";
import { client } from "~/sanity/client";
import BlogContent from "~/_components/blog-content/BlogContent";

const options = { next: { revalidate: 60 } };

const BLOGS_QUERY = defineQuery(`*[
  _type == "blog"
  && defined(slug.current)
]{_id, title, slug, excerpt, mainImage{asset->{url}}}`);

async function Page() {
  const blogs = await client.fetch(BLOGS_QUERY, {}, options);
  return <BlogContent blogs={blogs} />;
}

export default Page;
