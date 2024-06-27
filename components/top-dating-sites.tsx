import React from 'react';
import Image from 'next/image';
import { ISitesData } from '@/types/blog';

interface TopDatingSitesProps {
    siteData: ISitesData[];
}

const TopDatingSites = ({ siteData }: TopDatingSitesProps) => {
    return (
        <div className="container mx-auto p-4">
            {/* <h1 className="text-2xl font-bold mb-4">{data.title}</h1> */}
            <ul className="list-disc pl-5 mb-8">
                {siteData.map((site: ISitesData) => (
                    <li key={site.rank} className="mb-2">
                        <a href={site.url} className="text-blue-500 hover:underline">
                            {site.name}
                        </a> - {site.description}
                    </li>
                ))}
            </ul>
            {siteData.map((site) => (
                <div key={site.rank} className="border p-4 mb-4 rounded-lg shadow-md">
                    {site.highlight && (
                        <div className="bg-green-500 text-white px-2 py-1 rounded-full inline-block mb-2">
                            {site.highlight}
                        </div>
                    )}
                    <div className="flex items-center mb-2">
                        <Image src={site.logo} alt={site.name} width={50} height={50} className="mr-4" />
                        <div>
                            <h2 className="text-xl font-bold">{site.name}</h2>
                            <p>{site.reviews}</p>
                        </div>
                    </div>
                    <p className="mb-2">{site.description}</p>
                    <a href={site.ctaUrl} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                        {site.ctaText}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default TopDatingSites;