import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";
import { urlFor } from "@/sanity/image";

const HOME_IMAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == "home-page"][0]{
    Image
  }
`);

export default async function Landing() {
  const { data } = await sanityFetch({
    query: HOME_IMAGE_QUERY,
  });

  const imageUrl = data?.Image
    ? urlFor(data.Image).width(1600).quality(90).url()
    : null;


  return (
   <div>
     <main className="min-h-screen px-10 ">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Home page image"
          className="w-full h-auto object-cover"
        />
      )}
    </main>
    <div 
    style={{
    WebkitTextStroke: "0.35px currentColor",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  }}
    className="text-[#9C9C9D]  pt-[29px] font-galaxie text-[16px] leading-[25px] text-center ">
        
        <span className="px-2 cursor-pointer">Fireplaces</span> 
         |  
         <span  className="px-2 cursor-pointer">Lighting</span> 
          | 
         <span  className="px-2 cursor-pointer">Furniture</span> 
         | 
         <span  className="px-2 cursor-pointer">Journal</span>
    </div>
   </div>
  );
}
