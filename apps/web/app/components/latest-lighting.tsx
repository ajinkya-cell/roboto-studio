// components/OurLatestChimneys.tsx
import {client} from "@/sanity/client"
import Image from 'next/image'

async function getLatestFeatured() {
  const query = `*[_type == "lighting" && featured == true] |  order(title asc){
      title,
      type,
      price,
      "imageUrl": Image.asset->url
    }`
  return client.fetch(query, {}, {
    next: { revalidate: 60 }, // ⬅️ THIS LINE FIXES IT
  })
}

export default async function OurLatestLightings() {
  const chimneys = await getLatestFeatured()

  return (
    <section className="bg-[#E3E3E3] px-10 ">
      <div className="pt-6 flex flex-col items-center pb-2">
        <h2
        style={{
    WebkitTextStroke: '0.45px currentColor',
    textShadow: '0 0 0.1px currentColor',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  }}
        className="font-galaxie text-center tracking-wide text-black text-[21px]  mb-6">
          Our Latest Lightings
        </h2>
       

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[78px]">
          {chimneys.map((ch: any) => (
            <div key={ch.title} className="group cursor-pointer">
              <div className="relative w-full  overflow-hidden">
                <Image
                  src={ch.imageUrl}
                  alt={ch.type}
                  width={333}
                  height={244}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                 <div className="mt-4 flex flex-col items-center font-galaxie justify-between">
                <span
                 style={{
    WebkitTextStroke: '0.45px currentColor',
    textShadow: '0 0 0.1px currentColor',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  }}
                className="text-[16px] tracking-wide mb-1 text-[#737373]">{ch.title}</span>

                {ch.price && (
                  <span 
                  style={{
    WebkitTextStroke: '0.20px currentColor',
    textShadow: '0 0 0.1px currentColor',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  }}
                  className="text-sm text-[#737373]">{ch.type} </span>
                )}
              </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}