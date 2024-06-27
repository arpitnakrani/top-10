import SiteReview from "@/components/features/site-review";
import { ISiteReview } from "@/types/site";

interface ISiteList {
    siteReviews: ISiteReview[];
}
export default function SiteReviewList({ siteReviews }: ISiteList) {
    return (
        <div className="flex flex-col gap-4">
            {
                siteReviews.map((siteReview) => <SiteReview key={siteReview.rank} reviewData={siteReview} />)
            }
        </div>
    )
}
