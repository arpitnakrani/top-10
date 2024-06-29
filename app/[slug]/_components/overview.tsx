import React from 'react';
import { ISite } from '@/types/site';
import Link from 'next/link';

interface OverviewProps {
    content: string
}

const Overview = ({ content }: OverviewProps) => {
    return (
        <div className="mx-auto" dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default Overview;