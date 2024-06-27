import { ISiteReview } from '@/types/site'
import Image from 'next/image'
import React from 'react'
import ButtonLink from '../ui/button-link'
import Link from 'next/link'

export default function SiteReview({ reviewData }: { reviewData: ISiteReview }) {
    const { highlight, logo, name, rank, reviewCount, reviewedByLogo, slogan, reviewLink, link } = reviewData
    return (
        <div className='px-6 py-12 flex justify-between gap-4 items-center bg-white shadow-md relative'>
            <Image src={logo} alt={name} width={150} height={60} />
            <div className='flex flex-col gap-2'>
                <div className='flex items-center'>
                    <Link href={reviewLink} className='text-blue-500 font-semibold'>{reviewCount} Reviews by </Link> <Image src={reviewedByLogo} alt={name} width={70} height={21} className='h-4' />
                </div>
                <div className='font-semibold text-sm'>
                    {name} - {slogan}
                </div>
            </div>
            <ButtonLink className='font-bold' href={link}>Visit Site</ButtonLink>
            <div className='absolute  w-10 h-10 rounded-full border border-black flex items-center justify-center right-full text-2xl' style={{ top: '33%', left: '-3%' }}>
                {rank}
            </div>
            <div className='absolute top-2 -left-2 px-2 py-0.5 bg-green-900 text-white highlight_Ribbon font-semibold'>
                {highlight}
            </div>
        </div>
    )
}
