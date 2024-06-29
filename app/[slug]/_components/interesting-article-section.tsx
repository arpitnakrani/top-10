import ButtonLink from "@/components/ui/button-link";
import Image from "next/image";

interface IInterestingArticlesSection {
    articles: IInterestingArticle[];
    title: string;
}
export default function InterestingArticlesSection({ articles, title }: IInterestingArticlesSection) {

    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-10 text-customTextGray">{title}</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {articles.map((article, index) => (
                    <div key={index} className=" bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col">
                        <div className="h-[170px]">
                            <Image src={article.image} alt={article.title} width={300} height={230} className="w-full h-inheritHeight object-cover" />
                        </div>
                        <div className="p-4 h-full flex flex-col justify-between">
                            <h3 className="text-lg font-bold my-7 text-center text-customTextGray mx-3">{article.title}</h3>
                            <ButtonLink href={article.link} className="text-center">{article.linkLabel}</ButtonLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}