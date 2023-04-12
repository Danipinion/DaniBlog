"use client";
import ClientSideRoute from "./ClientSideRoute";
import { useState } from "react";
import { Tags } from "./Tags";
import Loading from "./Loading";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState("");

  return (
    <div className="p-5 sm:px-0">
      <Loading />
      <div className="relative shadow block  w-full mb-2 rounded-md">
        <input
          type="text"
          placeholder="search"
          className="w-full h-10 rounded-md border-gray-200 pl-2 shadow-sm sm:text-md"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <span className="absolute inset-y-0 right-0  w-10">
          <button className="rounded-full bg-sky-600 p-5 h-10  text-red hover:bg-sky-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="fill-white -mt-2"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <h1 className="opacity-0">h1</h1>
          </button>
        </span>
      </div>
      <Tags setTags={setTags} categories={posts} tagse={tags} />
      <div className="w-full flex justify-center flex-wrap py-5">
        {posts
          .filter(
            (post) =>
              post.title
                .toLocaleUpperCase()
                .includes(search.toLocaleUpperCase()) &&
              post.categories[0].title
                .toLowerCase()
                .includes(tags.toLowerCase())
          )
          .map((post) => (
            <ClientSideRoute
              key={post._id}
              route={`/post/${post.slug.current}`}
            >
              <div className="rounded-xl p-0.5 m-2 shadow-xl transition border-2 border-sky-300 w-[400px] h-[150px] max-w-xs lg:max-w-md overflow-hidden">
                <div className="rounded-[10px] bg-white p-4 !pt-5 sm:p-6">
                  <p className="block text-xs text-gray-500">
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <div>
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      {post.title}
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {post.categories.map((category, index) => (
                      <span
                        key={index}
                        className="whitespace-nowrap rounded-full bg-sky-100 px-2.5 py-0.5 text-xs text-sky-600"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ClientSideRoute>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
