import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Dropdown from '../ui/dropdown'

export const Navbar = () => {
    return (
        <header className="bg-white">
            <div className=' border-b border-customGray p-2'>
                <div className="flex justify-center align-baseline gap-1">
                    <div className="font-hurmeGeometricSans text-sm font-normal text-center text-customDarkGray tracking-[-0.5px]">We earn a commission from brands listed on this site. This influences the order and manner in which these listings are presented.</div>
                    {/* <a className="text-blue-500 underline">Advertising Disclosure</a> */}
                    &nbsp;
                    <Dropdown />
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
