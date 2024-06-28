'use client'
import SiteReview from "@/components/features/site-review";
import { ISiteReview } from "@/types/site";
import { useState } from "react";

interface ISiteList {
    siteReviews: ISiteReview[];
}
export default function SiteReviewList({ siteReviews }: ISiteList) {
    const [showMore, setShowMore] = useState(false)
    const toggleShowMore = () => {
        setShowMore(!showMore)
    }
    return (
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
    )
}
