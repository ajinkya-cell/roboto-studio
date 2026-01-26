
import { Barlow_Condensed } from 'next/font/google';
import React from 'react';
const barlow = Barlow_Condensed({
  weight: ['300','400'],
  subsets: ['latin'],
})

const Footer = () => {
  return (
    <footer className="bg-[#E3E3E3] font-galaxie py-10">
      <div className="max-w-screen mx-4 sm:mx-6 md:mx-10 grid grid-cols-1 md:grid-cols-5 gap-8">

        
        <div className="col-span-1 w-full md:w-[257px] text-[16px]">
          <p className="text-[#9C9C9D]">Tel: +44 (0) 207 730 2122</p>
          <p className="text-[#9C9C9D]">95-97 Pimlico Rd</p>
          <p className="text-[#9C9C9D]">London SW1W 8PH</p>
        </div>

        <div className="w-full md:w-[257px]">
          <p className="text-[#9C9C9D]">hello@jamb.co.uk</p>
        </div>

       
        <div className="hidden md:block"></div>

        
        <div className="col-span-1 md:col-span-2 space-y-6">
          <h3 className="text-lg font-semibold text-[#9C9C9D] mb-4">
            Newsletter
          </h3>

          <form className="flex flex-col">
            <div className="flex flex-col sm:flex-row gap-[3px] mb-4">
              <input
                type="text"
                placeholder="Search"
                className={`w-full px-4 bg-white py-2 text-[#9C9C9D] ${barlow.className} placeholder:text-[20px] placeholder:font-light  focus:outline-none`}
              />
              <button
                type="submit"
                className="bg-white text-[#9C9C9D] px-6 py-2 hover:bg-gray-700 transition duration-200"
              >
                Subscribe
              </button>
            </div>

            <label className="text-[#9C9C9D] flex items-center">
              <input type="radio" className="mr-2" />
              I agree to our Privacy Policy
            </label>
          </form>
        </div>

       
        <div className="col-span-1 md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">

         
          <div className="w-full md:w-[257px]">
            <div className="h-px bg-[#9C9C9D] mb-3"></div>
            <h3 className="text-[16px] text-black font-semibold mb-2">
              Reproduction Chimneypieces
            </h3>
            <ul className="text-[#9C9C9D] mb-4 leading-7">
              <li>Marble</li>
              <li>Stone</li>
              <li>Grates & Accessories</li>
              <li>Guide to Jamb Marbles</li>
            </ul>

            <div className="h-px bg-[#9C9C9D] mb-3"></div>
            <h3 className="text-[16px] text-black  font-semibold mb-2">
              Antique Chimneypieces
            </h3>
            <ul className="text-[#9C9C9D] mb-3 leading-7">
              <li>French & Italian</li>
              <li>Georgian</li>
              <li>Regency</li>
            </ul>

            <div className="h-px bg-[#9C9C9D] mb-3"></div>
            <h3 className="text-[16px] text-black font-semibold">
              Sell an Antique Chimneypiece
            </h3>
          </div>

        
          <div className="w-full md:w-[257px]">
            <div className="h-px bg-[#9C9C9D] mb-3"></div>
            <h3 className="text-[16px] text-black font-semibold mb-2">
              Reproduction Lighting
            </h3>
            <ul className="text-[#9C9C9D] leading-8">
              <li>Hanging Globes</li>
              <li>Hanging Lanterns</li>
              <li>Wall Lights</li>
              <li>Dish Lights</li>
              <li>Table Lamps</li>
              <li>Chains & Brackets</li>
            </ul>
          </div>

       
          <div className="w-full md:w-[257px]">
            <div className="h-px bg-[#9C9C9D] mb-3"></div>
            <h3 className="text-[16px] text-black font-semibold mb-2">
              Reproduction Furniture
            </h3>
            <ul className="text-[#9C9C9D] mb-3 leading-7">
              <li>Seating</li>
              <li>Tables</li>
              <li>Mirrors</li>
              <li>The Pantry Collection</li>
            </ul>

            <div className="h-px bg-[#9C9C9D] mb-3"></div>
            <h3 className="text-[16px] text-black font-semibold mb-2">
              Antique Furniture
            </h3>
            <ul className="text-[#9C9C9D] leading-7">
              <li>Seating</li>
              <li>Tables</li>
              <li>Mirrors</li>
              <li>Bookcases & Cabinets</li>
              <li>Chests</li>
              <li>Fire Accessories</li>
              <li>Objects</li>
              <li>Works of Arts</li>
              <li>Lighting</li>
            </ul>
          </div>

        
          <div className="w-full md:w-[257px]">
            <div className="h-px bg-[#9C9C9D] mb-3"></div>
            <h3 className="text-[16px] text-black font-semibold mb-2">Journal</h3>
            <ul className="text-[#9C9C9D] leading-7">
              <li>Praesentium</li>
              <li>Voluptatibus</li>
              <li>Accusamus</li>
              <li>Iusto</li>
              <li>Dignissimos</li>
            </ul>
          </div>

        
          <div className="w-full md:w-[257px]">
            <div className="h-px bg-[#9C9C9D] mb-3"></div>
            <h3 className="text-[16px] text-black font-semibold mb-2">About</h3>
            <ul className="text-[#9C9C9D] leading-7">
              <li>Founders</li>
              <li>Team</li>
              <li>History</li>
              <li>Galleries</li>
              <li>Workshops</li>
              <li>Showrooms</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
