export interface ISite {
    rank: number;
    name: string;
    logo: string;
    previewImage: string;
    slogan: string;
    link: string;
    reviewLink: string;
    isFreeVersionAvailable: boolean;
    pricing: string;
    ageRange: string;
    descriptionTitle: string;
    description: string;
    whyChooseDescription: string;
    experienceDescription: string;
    pros: string[];
    cons: string[];
    brandIcon: string;
    highlight: string
    reviewCount: number;
}

export interface ISiteReview {
    rank: number;
    logo: string;
    link: string;
    reviewCount: number;
    reviewedByLogo: string;
    name: string;
    slogan: string;
    highlight: string
    reviewLink: string;
}

export interface IArticle {
    image: string;
    title: string;
}

export interface IFaq {
    question: string;
    answer: string;
}

export interface IExploreMore {
    image: string;
    title: string;
    buttonText: string;
}