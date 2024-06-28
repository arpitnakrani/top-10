import sitesData from '../blogs.json';
import HeroBanner from "./_components/hero-banner";
import SitesList from "./_components/sites-list";
import { ISite, ISiteReview } from "@/types/site";
import SiteReviewList from "./_components/site-review-list";
import SiteExplore from "./_components/site-explore";
import TopDatingSites from "./_components/top-dating-sites";
import ArticlesSection from "./_components/article-section";
import SiteFaq from "./_components/site-faq";
import Header from "@/components/layout/header";

export default function Home() {

  const siteCount = sitesData.sites.length;
  const { authorImage, authorName, heroTitle, lastUpdatedDate, bannerImage } = sitesData.heroBanner
  return (
    <div className="container py-4 2xl:px-10 px-2 mx-auto">
      <section>
        <Header disclosurePopUpHTMLDescription={sitesData.header.disclosurePopUpHTMLDescription} disclosurePopUpText={sitesData.header.disclosurePopUpText} disclosureTitle={sitesData.header.disclosureTitle} />
      </section>
      {/* hero section */}
      <section className="w-full">
        <HeroBanner authorImage={authorImage} authorName={authorName} lastUpdatedDate={lastUpdatedDate} title={heroTitle} bannerImage={bannerImage} />
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
