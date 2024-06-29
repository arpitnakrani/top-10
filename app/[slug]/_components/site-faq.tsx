'use client'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, { useState } from 'react';

interface SiteFaqProps {
    faqs: IFAQ[];
    title: string
}

function SiteFaq({ faqs, title }: SiteFaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6">
                {title}</h2>
            <div className="">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-customGray">
                        <button
                            onClick={() => toggleFaq(index)}
                            className={`${openIndex === index ? "bg-white w-full text-left p-4" : "w-full text-left p-4 bg-neutral-200 "}`}
                        >
                            <div className="flex justify-between items-center">
                                <span className="text-base font-semibold">{faq.question}</span>
                                <span>{openIndex === index ? <MinusIcon className="size-5 text-customTextGrey " /> : <PlusIcon className="size-5  text-customTextGrey hover:text-black" />}</span>
                            </div>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-screen faq-transition-enter faq-transition-enter-active' : 'max-h-0 faq-transition-exit faq-transition-exit-active'
                                }`}
                        >
                            <div className="px-4 pb-4 bg-white">
                                <p className='text-base font-normal text-customTextGrey'>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SiteFaq;