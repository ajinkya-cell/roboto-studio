import "../globals.css";
import Footer from "../components/footer";
import { Navbar } from "../components/nav-2";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
