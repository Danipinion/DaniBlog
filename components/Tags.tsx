"use client";
export const Tags = ({ setTags, categories, tagse }: any) => {
  const tags: any = [];
  categories.forEach((item: any) => {
    item.categories.forEach((tag: any) => {
      tags.includes(tag.title) ? "" : tags.push(tag.title);
    });
  });

  return (
    <>
      <div className="flex gap-2 items-center justify-center">
        <span
          className={
            tagse == false
              ? "inline-flex items-center justify-center rounded-full bg-sky-600 px-3 py-1 text-white  cursor-pointer"
              : "inline-flex items-center justify-center rounded-full bg-sky-100 px-3 py-1 text-sky-700  cursor-pointer"
          }
          onClick={() => setTags("")}
        >
          <p className="text-sm whitespace-nowrap">All</p>
        </span>
        {tags.map((tag: string, index: number) => (
          <span
            key={index}
            className={
              tagse == tag
                ? "inline-flex items-center justify-center rounded-full bg-sky-600 px-3 py-1 text-white  cursor-pointer"
                : "inline-flex items-center justify-center rounded-full bg-sky-100 px-3 py-1 text-sky-700  cursor-pointer"
            }
            onClick={() => setTags(tag)}
          >
            <p className="text-sm whitespace-nowrap">{tag}</p>
          </span>
        ))}
      </div>
    </>
  );
};
