import React from 'react';
import { ISite } from '@/types/site';
import Link from 'next/link';

interface TopDatingSitesProps {
    siteData: ISite[];
}

const TopDatingSites = ({ siteData }: TopDatingSitesProps) => {
    return (
        <div className="container mx-auto p-4">
            {/* <h1 className="text-2xl font-bold mb-4">{data.title}</h1> */}
            <p className='text-base font-normal leading-7 mb-5 text-customTextGray'>Are you looking for a meaningful, lasting relationship? Are you searching for singles in your area? Online dating might be a good option for you. Many dating apps and websites offer ways to find true love.
                They use detailed questionnaires and sophisticated matchmaking algorithms to foster deep connections. </p>
            <p className='text-base font-normal leading-7 mb-5 text-customTextGray'>In fact, research by the Pew Research Center shows that
                <Link href="#" className='text-customBlue font-semibold'> nearly three-in-ten U.S. adults have used online dating</Link> . A lot of them have formed long-term relationships and have even since tied the knot.</p>
            <p className='text-base font-normal leading-7 mb-5 text-customTextGray'>We&apos;ve thoroughly reviewed and compared the best dating sites and apps. We looked at things like site usability, user reviews, costs, and their matching processes. </p>
            <p className='text-base font-normal leading-7 mb-9 text-customTextGray'>Our research has resulted in a list of the top 10 best dating platforms. This list aims to make it easy and effective to find the right partner, enriching your path to a happy love life.</p>
            <h3 className='text-xl font-bold text-customTextGray my-6'>Our Top {siteData.length} Best Online Dating Sites and Apps to Meet Singles:</h3>
            <ul className="list-disc pl-5 mb-8">
                {siteData.map((site: ISite) => (
                    <li key={site.rank} className="mb-2">
                        <a href={site.link} className="text-customBlue font-semibold hover:underline">
                            {site.name}
                        </a> - {site.slogan}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopDatingSites;