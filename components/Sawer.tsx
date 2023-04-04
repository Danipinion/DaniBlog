"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import uang from "../public/uang.gif";

export const Sawer = () => {
  const [modal, setmodal] = useState(true);
  const timing = () => {
    setmodal(false);
  };

  useEffect(() => {
    setTimeout(() => {
      timing();
    }, 5000);
  }, []);
  return (
    <div
      className={
        modal
          ? "modal opacity-0 transition-all duration-1000 -z-10"
          : "modal opacity-100 transition-all  duration-1000 z-10"
      }
    >
      <div className=" bg-white  p-14  rounded-md text-center relative flex flex-col gap-5">
        <Image src={uang} alt="sawer" className="w-40 mx-auto rounded-md" />
        <p className="w-60 mx-auto">
          Donasi Anda akan sangat membantu kami dalam menghasilkan konten yang
          lebih bermanfaat dan bermanfaat bagi banyak orang. Terima kasih
          banyak!
        </p>
        <a href="https://saweria.co/danipinion" target="_blank" className="btn">
          DONASI
        </a>
        <button
          className="text-red-400 underline block mx-auto"
          onClick={() => {
            setmodal(true);
          }}
        >
          Tidak Terimakasih
        </button>
      </div>
    </div>
  );
};
