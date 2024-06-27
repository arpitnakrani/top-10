import Image from "next/image";
import sitesData from '../blogs.json';
import TopDatingSites from "@/components/TopDatingSites";
import HeroBannerCard from "./components/HeroBannerCard";

export default function Home() {

  console.log('data', sitesData);

  return (
    <div className="container py-4 2xl:px-10 px-4 mx-auto">
      {/* hero section */}
      <section className="w-full relative flex">
        <HeroBannerCard />
        <Image className="absolute" src='/assets/images/bannerImage.webp' alt="banner-image" width={670} height={320} />

      </section>
      {/* <TopDatingSites siteData={sitesData.sites} /> */}
    </div>
  );
}
