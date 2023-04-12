"use client";
import React, { useEffect, useState } from "react";

const Loading = () => {
  const [load, setLoad] = useState(true);
  setTimeout(() => setLoad(false), 4000);

  return (
    <div
      className={
        load
          ? "bg-sky-400 w-full top-0 left-0 h-screen fixed  flex items-center justify-center flex-col transition-all opacity-100 z-20"
          : "bg-sky-400 w-full top-0 left-0 h-screen fixed flex items-center justify-center flex-col  transition-all opacity-0 duration-1000 -z-50"
      }
    >
      <div>
        <svg
          className={load ? "load" : "hidden"}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
        </svg>
      </div>
      <div className={load ? "font-bold text-2xl text-white" : "hidden"}>
        <p>Danipinon Blog</p>
      </div>
    </div>
  );
};

export default Loading;
