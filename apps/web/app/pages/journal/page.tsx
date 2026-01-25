import { client } from "@/sanity/client";
import Image from "next/image";
import Link from "next/link";

type JournalItem = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category?: string;
  author?: string;
  publishedAt: string;
  imageUrl: string;
};

async function getAllJournal(): Promise<JournalItem[]> {
  const query = `*[_type == "journal"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    category,
    author,
    publishedAt,
    "imageUrl": Image.asset->url
  }`;

  return client.fetch(query, {}, {
    next: { revalidate: 60 },
  });
}

export default async function JournalListingPage() {
  const posts = await getAllJournal();

  return (
    <section className="bg-surface px-4 sm:px-8 md:px-20 pt-12 md:pt-20 pb-20">
      <div className="mx-auto max-w-7xl">

        {/* TITLE */}
        <h1
          style={{
            WebkitTextStroke: "0.45px currentColor",
            textShadow: "0 0 0.7px currentColor",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          }}
          className="
            font-galaxie text-black
            text-[28px] sm:text-[32px] md:text-[40px]
            leading-[38px] sm:leading-[44px] md:leading-[50px]
            mb-12 text-center
          "
        >
          Journal
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/pages/journal/${post.slug.current}`}
              className="group"
            >
              <article className="cursor-pointer">

                {/* IMAGE */}
                <div className="h-[280px] flex items-center justify-center mb-6">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
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
                <div className="text-center">

                  <p className="uppercase text-[12px] tracking-widest text-gray-500 mb-2">
                    {post.category || "Journal"}
                  </p>

                  <h3 className="font-galaxie text-black text-[18px] mb-3 leading-[26px]">
                    {post.title}
                  </h3>

                  <p className="text-[14px] text-gray-600 leading-[22px] mb-4">
                    {post.excerpt}
                  </p>

                  <p className="text-[13px] text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    {post.author && ` · By ${post.author}`}
                  </p>

                </div>

              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
