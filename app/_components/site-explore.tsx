import Image from 'next/image'
import React from 'react'

export default function SiteExplore() {
    return (
        <div>
            <h3 className='text-xl font-bold text-customTextGray'>Explore More Dating Services</h3>
            <div className='grid grid-cols-3 gap-4 '>
                <div className='relative border border-black rounded-lg'>
                    <Image className='w-full rounded-lg' src='/assets/images/exploreImg_1.webp' width={200} height={140} alt="exploreImg" />
                </div>
                <div className='border border-black rounded-lg'>
                    <Image className='w-full rounded-lg' src='/assets/images/exploreImg_2.webp' width={200} height={140} alt="exploreImg" />
                </div>
                <div className='border border-black rounded-lg'>
                    <Image className='w-full rounded-lg' src='/assets/images/exploreImg_3.webp' width={200} height={140} alt="exploreImg" />
                </div>
            </div>
        </div>
    )
}

