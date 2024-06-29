import { ISiteReview } from '@/types/site'
import Image from 'next/image'
import React from 'react'
import ButtonLink from '../ui/button-link'
import Link from 'next/link'

export default function SiteReview({ reviewData }: { reviewData: ISiteReview }) {
    const { highlight, logo, name, rank, reviewCount, reviewedByLogo, slogan, reviewLink, link, linkLabel } = reviewData
    return (
        <div className='relative'>
            {highlight &&
                <div className='md:absolute text-sm top-2 w-fit -left-2 px-2 py-0 md:py-0.5  bg-green-900 text-white highlight_Ribbon font-bold'>
                    {highlight}
                </div>
            }
            <div className='p-2 md:px-6 md:py-12 flex justify-between gap-4 md:gap-2 items-center bg-white shadow-md md:flex-nowrap flex-wrap'>
                <div className='flex gap-2 items-center border-b border-custom-gray w-full md:w-auto md:border-none py-2 md:py-0'>
                    <div className='md:absolute  w-10 h-10 rounded-full border border-black flex items-center justify-center right-full text-2xl' style={{ top: '33%', left: '-3%' }}>
                        {rank}
                    </div>
                    <Image src={logo} alt={name} width={150} height={60} className='object-scale-down' />
                </div>
                <div className='flex flex-col gap-2 w-80'>
                    <div className='flex items-center'>
                        <Link href={reviewLink} className='text-customBlue font-semibold'>{reviewCount} Reviews by </Link> <Image src={reviewedByLogo} alt={name} width={70} height={21} className='h-4' />
                    </div>
                    <div className='font-semibold text-sm'>
                        {name} - {slogan}
                    </div>
                </div>
                <ButtonLink className='font-bold block w-full text-center md:inline md:w-auto' href={link}>{linkLabel}</ButtonLink>
            </div>
        </div>
    )
}
