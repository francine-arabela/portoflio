import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MainWorks from "@/components/MainWorks";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MainWorks />
      </main>
      <SiteFooter />
    </>
  );
}
