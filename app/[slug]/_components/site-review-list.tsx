'use client'
import SiteReview from "@/components/features/site-review";
import { ISiteReview } from "@/types/site";
import { useState } from "react";

interface ISiteList {
    siteReviews: ISiteReview[];
    title: string;
}
export default function SiteReviewList({ siteReviews, title }: ISiteList) {
    const [showMore, setShowMore] = useState(false)
    const toggleShowMore = () => {
        setShowMore(!showMore)
    }
    return (
        <div className="py-4">
            <div>
                <h3 className='text-xl font-bold text-customTextGray pb-4 md:py-0'>{title}</h3>
                <ul className="pl-5 mb-8 list-square text-customBlue">
                    {siteReviews.map((site: ISiteReview) => (
                        <li key={site.rank} className="mb-2">
                            <a href={site.link} className="font-semibold hover:underline">
                                {site.name}
                            </a> -
                            <span className='text-black'> {site.slogan}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                {
                    [...siteReviews].slice(0, showMore ? -1 : 3).map((siteReview) => <SiteReview key={siteReview.rank} reviewData={siteReview} />)
                }
                <p className="text-center">
                    <span onClick={toggleShowMore} className="opacity-60 hover:opacity-100 cursor-pointer">
                        Show {`${showMore ? 'Less' : 'More'}`}
                    </span>
                </p>
            </div>
        </div>
    )
}
