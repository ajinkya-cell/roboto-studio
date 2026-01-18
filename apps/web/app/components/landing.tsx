// components/landing.tsx
import { client } from "@/sanity/client";
import { notFound } from "next/navigation";
import Link from "next/link";

async function getPage() {
  const query = `*[_type == "page" && slug.current == "home-page"][0]{
    "imageUrl": Image.asset->url
  }`;

  return client.fetch(query, {}, {
    next: { revalidate: 60 }, // ✅ same fix as others
  });
}

export default async function Landing() {
  const data = await getPage();
  if (!data) notFound();

  return (
    <div>
      {/* IMAGE */}
      <main className="w-full px-0 md:px-10">
        {data.imageUrl && (
          <img
            src={data.imageUrl}
            alt="Home page image"
            className="
              w-full
              h-[45vh]
              sm:h-[55vh]
              md:h-auto
              object-cover
            "
          />
        )}
      </main>

      {/* CATEGORY NAV */}
      <div
        style={{
          WebkitTextStroke: "0.35px currentColor",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
        className="
          text-[#9C9C9D]
          pt-6
          md:pt-[29px]
          font-galaxie
          text-[14px]
          sm:text-[15px]
          md:text-[16px]
          leading-[22px]
          sm:leading-[24px]
          md:leading-[25px]
          text-center
          flex
          flex-wrap
          justify-center
        "
      >
        <Link href="/#fireplaces" className="px-2 hover:text-black transition">
          Fireplaces
        </Link>
        <span className="hidden sm:inline">|</span>

        <Link href="/#lighting" className="px-2 hover:text-black transition">
          Lighting
        </Link>
        <span className="hidden sm:inline">|</span>

        <Link href="/#furniture" className="px-2 hover:text-black transition">
          Furniture
        </Link>
        <span className="hidden sm:inline">|</span>

        <Link href="/#journal" className="px-2 hover:text-black transition">
          Journal
        </Link>
      </div>
    </div>
  );
}
