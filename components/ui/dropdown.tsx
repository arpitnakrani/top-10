// components/Dropdown.js
"use client"
import React, { useState } from 'react';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="cursor-pointer font-hurmeGeometricSans text-sm font-semibold text-center text-customDarkGray tracking-[-0.5px] underline"
            >
                Advertising Disclosure
            </div>
            {isOpen && (
                <div className="absolute right-0 top-7  mt-3 w-[577px] bg-white border border-gray-300 shadow-lg p-6 z-10 before:content-[''] before:absolute before:top-[-9px] before:right-4 before:border  before:border-gray-300 before:border-l-transparent before:border-r-transparent  before:-translate-x-1/2  before:border-l-8 before:border-b-8 before:border-r-8 after:content-[''] after:border-b-white after:right-[24px] after:top-[-10.5px] after:translate-y-1 after:border-r-transparent after:border-l-transparent after:border-r-8 after:border-l-8 after:border-b-8 after:absolute">
                    <p className="text-sm text-customDarkGray font-hurmeGeometricSans font-normal tracking-[-0.1px] leading-6">
                        Top10.com is a free online resource that strives to offer helpful content and comparison features to our visitors. We accept advertising compensation from companies that appear on the site, which impacts the location and order in which brands (and/or their products) are presented, and also impacts the score that is assigned to it. Company listings on this page DO NOT imply endorsement. We do not feature all providers on the market. Except as expressly set forth in our <a href="https://www.top10.com/legal-pages/terms-of-use" className=" font-bold  underline" rel="nofollow noopener noreferrer" target="_self">Terms of Use</a>, all representations and warranties regarding the information presented on this page are disclaimed. The information, including pricing, which appears on this site is subject to change at any time.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Dropdown;