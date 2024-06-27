import { ISiteReview } from '@/types/site'
import Image from 'next/image'
import React from 'react'

export default function SiteReview({ reviewData }: { reviewData: ISiteReview }) {
    const { isEasyMatching, logo, name, rank, reviewCount, reviewedByLogo, slogan } = reviewData
    return (
        <div>
            <Image src={logo} alt={name} width={150} height={60} />
            <div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
