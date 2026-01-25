import { client } from "@/sanity/client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getJournalPost(slug: string) {
  const query = `*[_type == "journal" && slug.current == $slug][0]{
    title,
    excerpt,
    category,
    author,
    publishedAt,
    "imageUrl": Image.asset->url,
    content
  }`;

  return client.fetch(
    query,
    { slug },
    {
      next: { revalidate: 60 },
    }
  );
}

export default async function JournalDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!slug) notFound();

  const post = await getJournalPost(slug);
  if (!post) notFound();

  return (
    <article className="bg-surface px-4 sm:px-8 md:px-20 pt-12 md:pt-20 pb-24">
      <div className="mx-auto max-w-3xl">

        {/* CATEGORY */}
        {post.category && (
          <p className="uppercase text-[12px] tracking-widest text-gray-500 mb-3 text-center">
            {post.category}
          </p>
        )}

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
            text-[30px] sm:text-[34px] md:text-[40px]
            leading-[40px] sm:leading-[46px] md:leading-[52px]
            mb-6 text-center
          "
        >
          {post.title}
        </h1>

        {/* META */}
        <p className="text-center text-[14px] text-gray-500 mb-10">
          {new Date(post.publishedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          {post.author && ` · By ${post.author}`}
        </p>

        {/* HERO IMAGE */}
        <div className="relative w-full flex justify-center mb-12">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={800}
            height={500}
            className="w-full max-w-[720px] h-auto object-contain"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-[28px]">

          <PortableText
            value={post.content}
            components={{
              block: {
                h2: ({ children }) => (
                  <h2 className="font-galaxie text-black mt-12 mb-4 text-[26px]">
                    {children}
                  </h2>
                ),
                normal: ({ children }) => (
                  <p className="mb-6 text-[16px] leading-[28px]">
                    {children}
                  </p>
                ),
              },
            }}
          />

        </div>

      </div>
    </article>
  );
}
