import jsonData from '../../blogs.json';
import HeroBanner from "./_components/hero-banner";
import SitesList from "./_components/sites-list";
import { ISite, ISiteReview } from "@/types/site";
import SiteReviewList from "./_components/site-review-list";
import SiteExplore from "./_components/site-explore";
import TopDatingSites from "./_components/overview";
import InterestingArticlesSection from "./_components/interesting-article-section";
import SiteFaq from "./_components/site-faq";
import Header from "@/components/layout/header";
import { redirect } from 'next/navigation'
import Footer from '@/components/layout/Footer';

export default function Home({ params }: { params: { slug: string }, searchParams: {} }) {
  //getting slug from URL;
  //then use this slug to get the data from the server or from json file stored statically in your app.

  //right now as i do not have any backend so i will get the data from json file created locally.
  const { slug } = params
  const pageData = jsonData[slug]

  if (!pageData) {
    redirect('/')
  }
  const { authorImage, authorName, heroTitle, lastUpdatedDate, bannerImage } = pageData.heroBanner
  return (
    <div>
      <section>
        <Header disclosurePopUpHTMLDescription={pageData.header.disclosurePopUpHTMLDescription} disclosurePopUpText={pageData.header.disclosurePopUpText} disclosureTitle={pageData.header.disclosureTitle} headerLogo={pageData.header.headerLogo} />
      </section>
      {/* hero section */}
      <section className="container mx-auto">
        <HeroBanner authorImage={authorImage} authorName={authorName} lastUpdatedDate={lastUpdatedDate} title={heroTitle} bannerImage={bannerImage} />
      </section>

      <section className="mx-auto container_Sm section_Divider horizontal_Spacing">
        <TopDatingSites content={pageData.overview.overviewContent} />
      </section>

      <section className='mx-auto container_Sm section_Divider horizontal_Spacing bg-zinc-100 md:bg-transparent'>
        <SiteReviewList siteReviews={pageData.sites as unknown as ISiteReview[]} title={pageData.sitesReviewListTitle} />
      </section>

      <section className="mx-auto container_Sm section_Divider horizontal_Spacing">
        <SiteExplore exploreMore={pageData.exploreMore.exploreMoreList} title={pageData.exploreMore.exploreMoreTitle} />
      </section>

      <section className="mx-auto container_Sm section_Divider horizontal_Spacing">
        <SitesList sites={pageData.sites as unknown as ISite[]} title={pageData.sitesListTitle} />
      </section>

      <section className="mx-auto container_Sm section_Divider horizontal_Spacing">
        <InterestingArticlesSection articles={pageData.interestingArticles.articleList} title={pageData.interestingArticles.articlesTitle} />
      </section>

      <section className="mx-auto container_Sm section_Divider horizontal_Spacing">
        <SiteFaq faqs={pageData.faqs.faqList} title={pageData.faqs.faqsTitle} />
      </section>

      <section>
        <Footer copyWriteText={pageData.footer.copyWriteText} footerDescription={pageData.footer.footerDescription} footerLinks={pageData.footer.footerLinks} logo={pageData.footer.logo} mailingAddress={pageData.footer.mailingAddress} mailingAddressTitle={pageData.footer.mailingAddressTitle} />
      </section>
    </div>
  );
}
