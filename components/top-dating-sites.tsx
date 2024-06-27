import React from 'react';
import Image from 'next/image';
import { ISite } from '@/types/site';
import ButtonLink from './ui/button-link';

interface TopDatingSitesProps {
    siteData: ISite[];
}

const TopDatingSites = ({ siteData }: TopDatingSitesProps) => {
    return (
        <div className="container mx-auto p-4">
            {/* <h1 className="text-2xl font-bold mb-4">{data.title}</h1> */}
            <ul className="list-disc pl-5 mb-8">
                {siteData.map((site: ISite) => (
                    <li key={site.rank} className="mb-2">
                        <a href={site.link} className="text-blue-500 hover:underline">
                            {site.name}
                        </a> - {site.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopDatingSites;