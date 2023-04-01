import { previewData } from "next/headers";
import groq from "groq";
import { client } from "@/lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt,desc)
`;

export const revalidate = 30;


export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#0060ff]">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList data={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  
  return <BlogList posts={posts} />;
}
