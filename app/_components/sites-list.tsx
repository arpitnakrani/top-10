import SiteArticle from '@/components/features/site-article';
import { ISite } from '@/types/site'
import React from 'react'


interface ISiteList {
    sites: ISite[];
    title: string
}
export default function SitesList({ title, sites }: ISiteList) {
    return (
        <div>
            <h1 className='font-bold text-4xl pb-8'>{title}</h1>
            {
                sites.map((site) => <SiteArticle sitePreviewData={site} key={site.rank} />)
            }
        </div>
    )
}
