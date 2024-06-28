import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface IHeroBanner {
    title: string;
    authorImage: string;
    authorName: string;
    lastUpdatedDate: string;
    bannerImage: string;
}

const HeroBanner = (props: IHeroBanner) => {
    const { authorImage, authorName, lastUpdatedDate, title, bannerImage } = props
    return (
        <div className="relative flex items-center justify-end">
            <div className='bg-[#f5f5f5] p-9 lg:p-10 xl:px-14 xl:py-14 xl:w-[600px] min-h-[245px] h-min absolute 2xl:left-48 xl:left-12 lg:left-0 lg:w-[450px] sm:w-[350px] sm:-left-[41px]'>
                <h1 className='font-bold text-3xl font-hurmeGeometricSans tracking-[-0.1px] text-customTextGray'>{title}</h1>
                <div className='flex mt-5 gap-4 items-center'>
                    <Image className="rounded-full" src={authorImage} alt="portfolio-image" width={36} height={36} />
                    <div>
                        <Link href="#" className='text-custom-lightText text-sm font-hurmeGeometricSans font-semibold'>{authorName}</Link>
                        <p className='text-custom-lightText text-sm font-hurmeGeometricSans font-normal leading-[-0.1]'>Last Updated : {lastUpdatedDate}</p>
                    </div>
                </div>
            </div>
            <Image className="2xl:mr-16" src={bannerImage} alt="banner-image" width={670} height={320} />
        </div>
    )
}

export default HeroBanner