import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-60 m-1 mx-auto">
          <Image
            src={urlFor(value).url()}
            className="object-contain"
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({children}:any) => (
        <ul className="ml-10 py-5 list-disc space-y-1">{children}</ul>
    ),
    number: ({children}:any) => (
        <ul className="mt-lg list-decimal">{children}</ul>
    ),
  },
  block:{
    h1: ({children}:any) =>(
        <h1 className="text-5xl py-2 font-bold">{children}</h1>
    ),
    h2: ({children}:any) =>(
        <h1 className="text-4xl py-2 font-bold">{children}</h1>
    ),
    h3: ({children}:any) =>(
        <h1 className="text-3xl py-2 font-bold">{children}</h1>
    ),
    h4: ({children}:any) =>(
        <h1 className="text-2xl py-2 font-bold">{children}</h1>
    ),
    blockquote: ({children}:any) =>(
        <blockquote className="border-l-[#0060ff] border-l-4 pl-5 py-5 my-5">{children}</blockquote>
    ),
  },
  marks:{
    link: ({children,value}:any) =>{
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
        return(
            <Link href={value.href} rel={rel} className="underline decoration-4 decoration-[#0060ff] hover:decoration-black">{children}</Link>
        )
    }
  }
};
