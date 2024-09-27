import { defineQuery } from "next-sanity";
import { client } from "~/sanity/client";
import DroneContent from "~/_components/main-content/DroneContent";

const options = { next: { revalidate: 60 } };

const BLOGS_QUERY = defineQuery(`*[
  _type == "blog"
  && defined(slug.current)
]{_id, title, slug, mainImage{asset->{url}}}`);

async function Page() {
  const blogs = await client.fetch(BLOGS_QUERY, {}, options);
  return <DroneContent blogs={blogs} />;
}

export default Page;
