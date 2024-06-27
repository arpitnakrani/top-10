import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroBannerCard = () => {
    return (
        <div className='bg-[#f5f5f5] p-9 lg:p-10 xl:px-14 xl:py-14 xl:w-[600px] min-h-[245px] h-min absolute 2xl:left-48 xl:left-12 lg:left-0 lg:w-[450px] sm:w-[350px] sm:-left-[41px]'>
            <h1 className='font-bold text-3xl font-hurmeGeometricSans tracking-[-0.1px] text-customTextGray'>Top 10 Best Online Dating Sites and Apps in 2024 </h1>
            <div className='flex mt-5 gap-4'>
                <Image className="rounded-full " src='/assets/images/portfolioImage.webp' alt="portfolio-image" width={36} height={36} />
                <div>
                    <Link href="#" className='text-custom-lightText font-hurmeGeometricSans font-semibold'>Suzannah Weiss</Link>
                    <p className='text-custom-lightText font-hurmeGeometricSans font-normal leading-[-0.1]'>Last Updated : Jun 17, 2024</p>
                </div>
            </div>
        </div>
    )
}

export default HeroBannerCard