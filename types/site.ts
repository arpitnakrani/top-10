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
}

export interface ISiteReview {
    rank: number;
    logo: string;
    reviewCount: number;
    reviewedByLogo: string;
    name: string;
    slogan: string;
    isEasyMatching: boolean
}