import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


interface IFooter {
    logo: string;
    copyWriteText: string;
    mailingAddressTitle: string;
    mailingAddress: string;
    footerLinks: { label: string; link: string }[];
    footerDescription: string

}
function Footer(props: IFooter) {
    const { copyWriteText, footerDescription, footerLinks, logo, mailingAddressTitle, mailingAddress } = props
    return (
        <footer className="bg-indigo-950 text-white py-8 section_Divider">
            <div className="container mx-auto px-4">
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8'>
                    <div className='col-span-1'>
                        <Image src={logo} alt="Logo" width={150} height={50} className='mb-8' />
                        <p className="mt-4">{copyWriteText}</p>
                        <p className="mt-2 font-bold">{mailingAddressTitle}</p>
                        <div dangerouslySetInnerHTML={{ __html: mailingAddress }} />

                    </div>
                    <div className='col-span-2'>
                        <div className="flex flex-wrap md:flex-nowrap md:flex-row  mb-8 my-3 gap-6">
                            {
                                footerLinks.map(({ label, link }, index) => <Link href={link} key={index} className="hover:underline font-bold">{label}</Link>)
                            }
                        </div>
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: footerDescription }} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer