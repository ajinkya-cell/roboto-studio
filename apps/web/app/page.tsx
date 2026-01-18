import Image from "next/image";
import { Navbar } from "./components/nav-bar";
import Landing from "./components/landing";

import LightingPage from "./components/lighting";
import FirePage from "./components/fire-place";
import OurLatestChimneys from "./components/latest-chims";
import OurLatestLightings from "./components/latest-lighting";
import FurniturePage from "./components/furniture";
import OurLatestFurniture from "./components/latest-furniture";
import JournalGrand from "./components/journal-gc";
import OurLatestStories from "./components/latest-stories";
import JournalSubscribe from "./components/subscribe-journal";
import Footer from "./components/footer";

export default function Home() {
  return (
   <>
  <div className="bg-surface h-[8000px]">
     <Navbar/>
   <Landing/>
   <FirePage/>
   <LightingPage/>
   <OurLatestChimneys/>
   <OurLatestLightings/>
   <FurniturePage/>
   <OurLatestFurniture/>
   <JournalGrand/>
   <OurLatestStories/>
   <JournalSubscribe/>
   <Footer/>
  </div>
   </>
  );
}
