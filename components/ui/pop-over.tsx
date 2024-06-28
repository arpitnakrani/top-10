/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useState, useEffect } from 'react';

interface IPopOver {
    title: string;
    content: string;
}

const PopOver = ({ content, title }: IPopOver) => {
    const [isOpen, setIsOpen] = useState(false);
    let timeoutId: NodeJS.Timeout;

    const openPopOver = () => {
        clearTimeout(timeoutId);
        setIsOpen(true);
    };

    const closePopOver = () => {
        timeoutId = setTimeout(() => {
            setIsOpen(false);
        }, 100);
    };

    useEffect(() => {
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="relative inline-block text-left">
            <div
                onMouseEnter={openPopOver}
                onMouseLeave={closePopOver}
                className="cursor-pointer font-hurmeGeometricSans text-sm font-semibold text-center text-customDarkGray tracking-[-0.5px] underline"
            >
                {title}
            </div>
            {isOpen && (
                <div
                    className="absolute right-0 top-7 mt-3 w-[577px] bg-white border border-gray-300 shadow-lg p-6 z-10 before:content-[''] before:absolute before:top-[-9px] before:right-4 before:border before:border-gray-300 before:border-l-transparent before:border-r-transparent before:-translate-x-1/2 before:border-l-8 before:border-b-8 before:border-r-8 after:content-[''] after:border-b-white after:right-[24px] after:top-[-10.5px] after:translate-y-1 after:border-r-transparent after:border-l-transparent after:border-r-8 after:border-l-8 after:border-b-8 after:absolute"
                    onMouseEnter={openPopOver}
                    onMouseLeave={closePopOver}
                >
                    <p
                        className="text-sm text-customDarkGray font-hurmeGeometricSans font-normal tracking-[-0.1px] leading-6"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            )}
        </div>
    );
};

export default PopOver;