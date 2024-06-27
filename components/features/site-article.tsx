import Image from 'next/image';
import { title } from 'process';
import React from 'react'
import ButtonLink from '../ui/button-link';
import Link from 'next/link';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { ISite } from '@/types/site';
import { ArrowLongRightIcon } from '@heroicons/react/16/solid';

interface ISiteReview {
    sitePreviewData: ISite
}

export default function SiteArticle({ sitePreviewData }: ISiteReview) {
    const { ageRange, description, descriptionTitle, experienceDescription, rank, isFreeVersionAvailable, link, logo, name, previewImage, pricing, reviewLink, slogan, whyChooseDescription, cons, pros, brandIcon } = sitePreviewData
    return (
        <div>
            <div className='flex flex-col gap-4 py-8'>
                {/* preview header */}
                <div className='flex gap-4 items-center'>
                    <div className='pr-4 border-r border-custom-border text-6xl font-extrabold text-custom-gray'>
                        {rank}
                    </div>
                    <div className='pr-4 border-r border-custom-border'>
                        <Image src={logo} alt={name} width={150} height={50} />
                    </div>
                    <h2 className='font-bold'>{name}</h2>
                </div>
                {/* //preview image */}
                <div className='py-4'>
                    <Image src={previewImage} alt={name} width={650} height={400} />
                </div>
                {/* preview description */}
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col'>
                        <p className='text-custom-lightText'>{slogan}</p>
                        <Link href={reviewLink} className='text-customBlue font-semibold flex gap-2 items-center'>Read {name} Review <ArrowLongRightIcon width={18} /> </Link>
                    </div>
                    <ButtonLink href={link} className='font-bold'>Visit Site</ButtonLink>
                </div>
            </div>

            <div className='py-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                        <span className='text-customBlue'> {isFreeVersionAvailable ? <CheckIcon width={18} /> : <XMarkIcon width={18} />}</span>
                        <span className='font-semibold'>Free Version</span>
                        <span>  - </span>
                        <span>{isFreeVersionAvailable ? 'yes' : 'No'}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-customBlue'> <CheckIcon width={18} /> </span>
                        <span className='font-semibold'>Pricing</span>
                        <span>  - </span>
                        <span>{pricing}</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='text-customBlue'>  <CheckIcon width={18} /> </span>
                        <span className='font-semibold'>Age Range</span>
                        <span>  - </span>
                        <span>{ageRange}</span>
                    </div>
                </div>
            </div>



            <div>
                <div className='pb-4'>
                    <h2><b>{descriptionTitle}</b></h2>
                    <p className='pt-4'>{description}</p>
                </div>

                <div className='pb-4'>
                    <span> <b>{`why we chose ${name}`}</b></span>
                    <p className='inline pb-4'>{whyChooseDescription}</p>
                </div>

                <div className='pb-4'>
                    <span> <b>Our experience</b></span>
                    <p className='inline'>{experienceDescription}</p>
                </div>
            </div>


            <div className='flex gap-8 pb-8'>
                <div>
                    <h2 className='pb-4 border-b border-b-custom-gray'>Props</h2>
                    <div className='flex gap-2 flex-col pt-4'>
                        {pros.map((pro, index) => <div key={index} className='flex items-center gap-2'> <span className='text-customBlue'><CheckIcon width={18} /></span> {pro}</div>)}
                    </div>
                </div>
                <div>
                    <h2 className='pb-4 border-b border-b-custom-gray'>Cons</h2>
                    <div className='flex gap-2 flex-col pt-4'>
                        {cons.map((con, index) => <div key={index} className='flex items-center gap-2'> <span className='text-customBlue'><XMarkIcon width={18} /></span> {con}</div>)}
                    </div>
                </div>
            </div>

            <div className='bg-gray-100 p-2 flex justify-between items-center'>
                <div className='flex gap-6  items-center'>
                    <Image src={brandIcon} alt={name} width={35} height={35} />
                    <b>{name}</b>
                </div>
                <ButtonLink href={link} className='font-bold'>Visit Site</ButtonLink>
            </div>
        </div >
    )
}
