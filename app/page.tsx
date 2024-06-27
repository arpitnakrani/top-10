import Image from "next/image";
import sitesData from '../blogs.json';
import TopDatingSites from "@/components/top-dating-sites";
import HeroBannerCard from "./_components/hero-banner-card";
import SitesList from "./_components/sites-list";
import { ISite, ISiteReview } from "@/types/site";
import SiteReviewList from "./_components/site-review-list";
import SiteExplore from "./_components/site-explore";

export default function Home() {

  console.log('data', sitesData);

  return (
    <div className="container py-4 2xl:px-10 px-2 mx-auto">
      {/* hero section */}
      <section className="w-full">
        <div className="relative flex items-center justify-end">
          <HeroBannerCard />
          <Image className="2xl:mr-16" src='/assets/images/bannerImage.webp' alt="banner-image" width={670} height={320} />
        </div>

      </section>

      <section className="mx-auto container_Sm mt-8">
        <TopDatingSites siteData={sitesData.sites} />
        <SiteReviewList siteReviews={sitesData.sites as unknown as ISiteReview[]} />
      </section>

      <section className="mx-auto container_Sm mt-8">
        <SiteExplore />
      </section>

      <section className="mx-auto container_Sm mt-8">
        <SitesList sites={sitesData.sites as unknown as ISite[]} title="Our Top 10 Best Online Dating Sites - Reviews:" />
      </section>
    </div>
  );
}
