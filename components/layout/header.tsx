import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Dropdown from '../ui/pop-over'
import PopOver from '../ui/pop-over';


interface IHeader {
    disclosureTitle: string;
    disclosurePopUpText: string;
    disclosurePopUpHTMLDescription: string;
    headerLogo: string
}
const Header = (props: IHeader) => {
    const { disclosurePopUpHTMLDescription, disclosurePopUpText, disclosureTitle, headerLogo } = props
    return (
        <header className="bg-white">
            <div className=' border-b border-customGray common_Spacing'>
                <div className="flex justify-center align-baseline gap-1 flex-wrap lg:flex-nowrap">
                    <div className="font-hurmeGeometricSans text-sm font-normal md:text-center text-customDarkGray tracking-[-0.5px]">{disclosureTitle} &nbsp; &nbsp;
                        <PopOver content={disclosurePopUpHTMLDescription} title={disclosurePopUpText} key='discloser' /></div>

                </div>
            </div>
            <div className="mx-auto container py-4 px-4 md:px-0">
                <Link href=''>
                    <Image src={headerLogo} alt="Logo" width={150} height={50} />
                </Link>
            </div>
        </header>
    )
}

export default Header;