import Image from "next/image";
import sitesData from '../blogs.json';
import HeroBannerCard from "./_components/hero-banner-card";
import SitesList from "./_components/sites-list";
import { ISite, ISiteReview } from "@/types/site";
import SiteReviewList from "./_components/site-review-list";
import SiteExplore from "./_components/site-explore";
import TopDatingSites from "./_components/top-dating-sites";
import ArticlesSection from "./_components/article-section";
import SiteFaq from "./_components/site-faq";

export default function Home() {

  const siteCount = sitesData.sites.length;

  return (
    <div className="container py-4 2xl:px-10 px-2 mx-auto">
      {/* hero section */}
      <section className="w-full">
        <div className="relative flex items-center justify-end">
          <HeroBannerCard sitesCount={siteCount} />
          <Image className="2xl:mr-16" src='/assets/images/bannerImage.webp' alt="banner-image" width={670} height={320} />
        </div>
      </section>

      <section className="mx-auto container_Sm mt-8">
        <TopDatingSites siteData={sitesData.sites} />
        <SiteReviewList siteReviews={sitesData.sites as unknown as ISiteReview[]} />
      </section>

      <section className="mx-auto container_Sm mt-8">
        <SiteExplore exploreMore={sitesData.exploreMore} />
      </section>

      <section className="mx-auto container_Sm mt-8">
        <SitesList sites={sitesData.sites as unknown as ISite[]} title={`Our Top ${siteCount} Best Online Dating Sites - Reviews:`} />
      </section>
      <section className="mx-auto container_Sm mt-8">
        <ArticlesSection articles={sitesData.articles} />
      </section>
      <section className="mx-auto container_Sm mt-8">
        <SiteFaq faqs={sitesData.faqs} />
      </section>
    </div>
  );
}
