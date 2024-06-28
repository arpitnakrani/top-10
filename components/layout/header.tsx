import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Dropdown from '../ui/pop-over'
import PopOver from '../ui/pop-over';


interface IHeader {
    disclosureTitle: string;
    disclosurePopUpText: string;
    disclosurePopUpHTMLDescription: string
}
const Header = (props: IHeader) => {
    const { disclosurePopUpHTMLDescription, disclosurePopUpText, disclosureTitle } = props
    return (
        <header className="bg-white">
            <div className=' border-b border-customGray p-2'>
                <div className="flex justify-center align-baseline gap-1 flex-wrap lg:flex-nowrap">
                    <div className="font-hurmeGeometricSans text-sm font-normal text-center text-customDarkGray tracking-[-0.5px]">{disclosureTitle}</div>
                    &nbsp;
                    <PopOver content={disclosurePopUpHTMLDescription} title={disclosurePopUpText} key='discloser' />
                </div>
            </div>
            <div className="container py-4 px-4 mx-auto">
                <Link href='#'>
                    <Image src="/assets/images/logo.svg" alt="Logo" width={150} height={50} />
                </Link>
            </div>
        </header>
    )
}

export default Header;