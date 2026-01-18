// components/FurniturePage.tsx
import {client} from '@/sanity/client'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getPage() {
  const query = `*[_type == "page" && contentType=="journal" ][1]{
      headline,
      "description": pt::text(description),
      "imageUrl": Image.asset->url
    }`
  return client.fetch(query)
}

export default async function JournalSubscribe() {
  const data = await getPage()
  if (!data) notFound()

  return (
    <section className="bg-surface px-20 pt-20 mb-60">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 items-center gap-60">
        {/* Left content */}
        <div className="max-w-[509px]">
          <h2
            style={{
              WebkitTextStroke: '0.45px currentColor',
              textShadow: '0 0 0.7px currentColor',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
            className="font-galaxie text-black text-center  h-[100px] mb-5 text-[34px] leading-[48px]  tracking-[0em] "
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
          className="text-[16px] font-galaxie leading-[25px] text-black mb-8">{data.description}</p>

          <div
          style={{
              WebkitTextStroke: '0.45px currentColor',
              textShadow: '0 0 0.4px currentColor',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
            }}
          className=" gap-4 flex flex-col items-center">
            <button className="border font-galaxie border-[#737373]  w-[233px] h-[33px] text-[16px] text-[#737373]">
              Discover more
            </button>
            
          </div>
        </div>

        {/* Right image */}
        <div className="relative w-full h-full">
          <Image
            src={data.imageUrl}
            alt={data.headline}
            width={410}
            height={560}
            
            priority
          />
        </div>
      </div>
    </section>
  )
}