import SiteArticle from '@/components/features/site-article';
import React from 'react'


interface ISiteList {
    sites: ISite[];
    title: string
}
export default function SitesList({ title, sites }: ISiteList) {
    return (
        <div className='pt-6'>
            <h1 className='font-bold text-4xl pb-2 md:pb-8 opacity-80'>{title}</h1>
            {
                sites.map((site) => <SiteArticle sitePreviewData={site} key={site.rank} />)
            }
        </div>
    )
}
