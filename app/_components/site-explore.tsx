import { IExploreMore } from '@/types/site';
import Image from 'next/image'
import React from 'react'

interface SiteExploreProps {
    exploreMore: IExploreMore[];
}


export default function SiteExplore({ exploreMore }: SiteExploreProps) {
    return (
        <div>
            <h3 className='text-xl font-bold text-customTextGray'>Explore More Dating Services</h3>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 '>
                {exploreMore.map((item, index) => (
                    <div key={index} className='relative border border-black rounded-lg h-[170px]'>
                        <Image className='w-full rounded-lg h-full' src={item.image} width={200} height={140} alt="exploreImg" />
                        <div className='absolute top-[68%] left-1/2 px-1 py-2 bg-customLightBg text-center text-white text-xs font-bold -translate-y-1/2 -translate-x-1/2 min-w-[211px]'>
                            {item.title}
                        </div>
                        <div className='rounded-br-lg rounded-bl-lg w-full absolute -bottom-[16px] left-1/2 px-2 py-2 bg-bgRed text-center text-white text-xs font-bold -translate-y-1/2 -translate-x-1/2'>
                            {item.buttonText}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

