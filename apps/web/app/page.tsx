import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { Navbar } from "./components/nav-bar";
import Footer from "./components/footer";
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

type PageBuilderBlock =
  | {
      _key: string;
      _type: "heroBlock";
    }
  | {
      _key: string;
      _type: "featureBlock";
    }
  | {
      _key: string;
      _type: "collectionBlock";
      collectionType: "fireplaces" | "lighting" | "furniture" | "journal";
    };

type HomePage = {
  _id: string;
  title: string;
  content?: PageBuilderBlock[];
};

async function getHomePage(): Promise<HomePage | null> {
  const query = `*[_type == "page" && slug.current == "home-page"][0]{
    _id,
    title,
    content[]{
      _key,
      _type,
      // collectionBlock specific fields
      collectionType
    }
  }`;

  return client.fetch(query, {}, { next: { revalidate: 60 } });
}

function renderBlock(block: PageBuilderBlock) {
  switch (block._type) {
    case "heroBlock":
      // Uses the existing Landing component (which already reads from Sanity)
      return <Landing key={block._key} />;
    case "featureBlock":
      // For now re-use the existing hard-coded feature style sections.
      // You could later split this out into separate components that
      // consume the block data directly.
      return (
        <section key={block._key}>
          <FirePage />
          <LightingPage />
        </section>
      );
    case "collectionBlock":
      if (block.collectionType === "fireplaces") {
        return <OurLatestChimneys key={block._key} />;
      }
      if (block.collectionType === "lighting") {
        return <OurLatestLightings key={block._key} />;
      }
      if (block.collectionType === "furniture") {
        return <OurLatestFurniture key={block._key} />;
      }
      if (block.collectionType === "journal") {
        return <OurLatestStories key={block._key} />;
      }
      return null;
    default:
      return null;
  }
}

export default async function Home() {
  const page = await getHomePage();

  if (!page) {
    notFound();
  }

  return (
    <>
      <div className="bg-surface">
        <Navbar />
        <main>
          {Array.isArray(page.content)
            ? page.content.map((block) => renderBlock(block))
            : null}
          {/* Static sections that are not yet fully page-builder driven */}
          <JournalGrand />
          <JournalSubscribe />
        </main>
        <Footer />
      </div>
    </>
  );
}
