import React from 'react';

interface OverviewProps {
    content: string
}

const Overview = ({ content }: OverviewProps) => {
    return (
        <div className="mx-auto" dangerouslySetInnerHTML={{ __html: content }} />
    );
};

export default Overview;