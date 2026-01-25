// app/furniture/page.tsx
import { client } from "@/sanity/client";
import Image from "next/image";
import Link from "next/link";

type FurnitureItem = {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  type: string;
  imageUrl: string;
  price?: number;
  availability?: string;
};

async function getAllFurniture(): Promise<FurnitureItem[]> {
  const query = `*[_type == "furniture"] | order(_createdAt desc){
    _id,
    title,
    slug,
    category,
    type,
    "imageUrl": Image.asset->url,
    price,
    availability
  }`;

  return client.fetch(query, {}, {
    next: { revalidate: 60 },
  });
}

export default async function FurnitureListingPage() {
  const items = await getAllFurniture();

  return (
    <section className="bg-surface px-4 sm:px-8 md:px-20 pt-12 md:pt-20 pb-20">
      <div className="mx-auto max-w-7xl">

        {/* PAGE TITLE */}
        <h1
          style={{
            WebkitTextStroke: "0.45px currentColor",
            textShadow: "0 0 0.7px currentColor",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          }}
          className="font-galaxie text-black text-[28px] sm:text-[32px] md:text-[40px] leading-[38px] sm:leading-[44px] md:leading-[50px] mb-10 text-center"
        >
          Furniture Collection
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {items.map((item) => (
            <Link
              key={item._id}
              href={`/pages/furniture/${item.slug.current}`}
              className="group"
            >
              <div className="cursor-pointer">

                {/* IMAGE */}
                <div className="h-[280px] flex items-center justify-center">
  <Image
    src={item.imageUrl}
    alt={item.title}
    layout="responsive"
    width={333}
    height={244}
    className="
      object-contain
      w-auto
      max-h-full
      transition-transform duration-300
      group-hover:scale-[1.02]
    "
  />
</div>
                {/* META */}
                <div className="mt-4 text-center">
                  <p className="uppercase text-[12px] tracking-widest text-gray-500 mb-1">
                    {item.category} · {item.type}
                  </p>

                  <h3 className="font-galaxie text-black text-[18px] mb-1">
                    {item.title}
                  </h3>

                  {item.price && (
                    <p className="text-[15px] text-gray-700">
                      £{item.price.toLocaleString()}
                    </p>
                  )}

                  {item.availability === "sold" && (
                    <p className="text-[13px] text-red-600 mt-1">
                      Sold
                    </p>
                  )}
                </div>

              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
