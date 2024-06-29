interface IHeader {
    disclosureTitle: string;
    disclosurePopUpText: string;
    disclosurePopUpHTMLDescription: string;
    headerLogo: string;
}

interface IHeroBanner {
    heroTitle: string;
    authorName: string;
    authorImage: string;
    lastUpdatedDate: string;
    bannerImage: string;
}

interface IOverview {
    overviewContent: string;
}

interface ISite {
    rank: number;
    logo: string;
    name: string;
    previewImage: string;
    slogan: string;
    reviewLink: string;
    link: string;
    isFreeVersionAvailable: boolean;
    pricing: string;
    ageRange: string;
    descriptionTitle: string;
    description: string;
    whyChooseDescription: string;
    experienceDescription: string;
    reviews: string;
    pros: string[];
    cons: string[];
    brandIcon: string;
    highlight: string;
    reviewedByLogo: string;
    reviewCount: number;
    linkLabel: string;
}

interface IInterestingArticle {
    image: string;
    title: string;
    link: string;
    linkLabel: string;
}

interface IFAQ {
    question: string;
    answer: string;
}

interface IExploreMore {
    image: string;
    title: string;
    buttonText: string;
    link: string;
}

interface IFooter {
    logo: string;
    copyWriteText: string;
    mailingAddressTitle: string;
    mailingAddress: string;
    footerLinks: { link: string; label: string }[];
    footerDescription: string;
}

interface IPageData {
    header: IHeader;
    heroBanner: IHeroBanner;
    overview: IOverview;
    sitesReviewListTitle: string;
    sitesListTitle: string;
    sites: ISite[];
    interestingArticles: { articlesTitle: string; articleList: IInterestingArticle[] };
    faqs: { faqsTitle: string; faqList: IFAQ[] };
    exploreMore: { exploreMoreTitle: string; exploreMoreList: IExploreMore[] };
    footer: IFooter;
}

interface IJsonData {
    [key: string]: IPageData;
}