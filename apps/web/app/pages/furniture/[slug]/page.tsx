import { client } from "@/sanity/client";
import Image from "next/image";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getFurniture(slug: string) {
  const query = `*[_type == "furniture" && slug.current == $slug][0]{
    title,
    category,
    type,
    "imageUrl": Image.asset->url,
    "description": pt::text(description),
    price,
    availability
  }`;

  return client.fetch(
    query,
    { slug },
    {
      next: { revalidate: 60 },
    }
  );
}

export default async function FurnitureDetailPage({ params }: PageProps) {
  // 🔥 THIS IS THE FIX
  const { slug } = await params;

  if (!slug) notFound();

  const data = await getFurniture(slug);

  if (!data) notFound();

  return (
    <section className="bg-surface px-4 sm:px-8 md:px-20 pt-12 md:pt-20 pb-20">
      <div className="mx-auto max-w-6xl grid grid-cols-1 h-screen md:grid-cols-2 gap-12 items-start">

        {/* IMAGE */}
        <div className="relative w-full flex justify-center">
          <Image
            src={data.imageUrl}
            alt={data.title}
            width={700}
            height={900}
            className="w-full max-w-[480px] h-auto object-contain"
            priority
          />
        </div>

        {/* DETAILS */}
        <div className="max-w-[520px] mx-auto md:mx-0">

          <p className="uppercase text-[13px] tracking-widest text-gray-500 mb-2">
            {data.category} · {data.type}
          </p>

          <h1
            style={{
              WebkitTextStroke: "0.45px currentColor",
              textShadow: "0 0 0.7px currentColor",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
            className="font-galaxie text-black text-[28px] sm:text-[32px] md:text-[36px] leading-[38px] sm:leading-[44px] md:leading-[48px] mb-6"
          >
            {data.title}
          </h1>

          {data.price && (
            <p className="text-[18px] font-medium text-black mb-4">
              £{data.price.toLocaleString()}
            </p>
          )}

          {data.availability && (
            <p
              className={`text-[14px] mb-6 ${
                data.availability === "sold"
                  ? "text-red-600"
                  : "text-green-700"
              }`}
            >
              {data.availability === "in_stock" && "In stock"}
              {data.availability === "made_to_order" && "Made to order"}
              {data.availability === "sold" && "Sold"}
            </p>
          )}

          {data.description && (
            <p className="text-[15px] leading-[24px] text-gray-700 mb-8">
              {data.description}
            </p>
          )}

          <button
            className="
              border border-[#737373]
              w-[240px] h-[38px]
              font-galaxie text-[16px] text-[#737373]
              transition-colors duration-300 ease-in-out
              hover:text-black hover:border-black
            "
          >
            Enquire about this piece
          </button>

        </div>
      </div>
    </section>
  );
}
