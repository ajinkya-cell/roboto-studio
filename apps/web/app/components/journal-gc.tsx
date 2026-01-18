// components/FurniturePage.tsx
import { client } from '@/sanity/client'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getPage() {
  const query = `*[_type == "page" && contentType=="journal" ][0]{
      headline,
      "description": pt::text(description),
      "imageUrl": Image.asset->url
    }`
  return client.fetch(query)
}

export default async function JournalGrand() {
  const data = await getPage()
  if (!data) notFound()

  return (
    <section id="journal" className="bg-surface px-4 sm:px-8 md:px-20 pt-12 md:pt-20 pb-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left content */}
        <div className="max-w-[509px] mx-auto">
          <p
            style={{
              WebkitTextStroke: '0.45px currentColor',
              textShadow: '0 0 0.4px currentColor',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
            className="uppercase text-black text-center font-galaxie tracking-wide text-[14px] sm:text-[16px] mb-6"
          >
            Journal
          </p>

          <h2
            style={{
              WebkitTextStroke: '0.45px currentColor',
              textShadow: '0 0 0.7px currentColor',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
            className="
              font-galaxie text-black
              text-center
              mb-5
              text-[26px] sm:text-[30px] md:text-[34px]
              leading-[36px] sm:leading-[42px] md:leading-[48px]
            "
          >
            {data.headline}
          </h2>

          <p
            style={{
              WebkitTextStroke: '0.45px currentColor',
              textShadow: '0 0 0.4px currentColor',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
            className="
              text-[15px] sm:text-[16px]
              font-galaxie
              leading-[23px] sm:leading-[25px]
              text-black
              mb-8
              text-center md:text-left
            "
          >
            {data.description}
          </p>

          <div
            style={{
              WebkitTextStroke: '0.45px currentColor',
              textShadow: '0 0 0.4px currentColor',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
            className="flex flex-col items-center gap-4"
          >
            <button className="border font-galaxie border-[#737373] w-[233px] h-[33px] text-[16px] text-[#737373]">
              Discover more
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative w-full flex justify-center">
          <Image
            src={data.imageUrl}
            alt={data.headline}
            width={583}
            height={731}
            className="w-[260px] sm:w-[360px] md:w-[583px] h-auto"
            priority
          />
        </div>

      </div>
    </section>
  )
}
