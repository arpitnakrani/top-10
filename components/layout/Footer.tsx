import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <footer className="bg-indigo-950 text-white py-8">
            <div className="container mx-auto px-4">
                <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                    <div className='col-span-1'>
                        <Image src="/assets/images/ftLogo.svg" alt="Logo" width={150} height={50} className='mb-8' />
                        <p className="mt-4">&copy; 2009 - 2024 Natural Intelligence Ltd. All Rights Reserved.</p>
                        <p className="mt-2 font-bold">Mailing address:</p>
                        <p>4023 Kennett Pike #50055</p>
                        <p>Wilmington, DE 19807</p>
                    </div>
                    <div className='col-span-2'>
                        <div className="flex flex-wrap md:flex-nowrap md:flex-row  mb-8 my-3 gap-6">
                            <a href="#" className="hover:underline font-bold">About Us</a>
                            <a href="#" className="hover:underline font-bold">Cookie Policy</a>
                            <a href="#" className="hover:underline font-bold">Terms of Use</a>
                            <a href="#" className="hover:underline font-bold">Privacy Policy</a>
                            <a href="#" className="hover:underline font-bold">Sitemap</a>
                            <a href="#" className="hover:underline font-bold">Partner With Us</a>

                        </div>
                        <div >
                            <p className="mt-4">Top10.com is designed to help users make confident decisions online, this website contains information about a wide range of products and services. Certain details, including but not limited to prices and special offers, are provided to us directly from our partners and are dynamic and subject to change at any time without prior notice. Though based on meticulous research, the information we share does not constitute legal or professional advice or forecast, and should not be treated as such.</p>
                            <p className="mt-4">Reproduction in whole or in part is strictly prohibited.</p>
                            <p>As an Amazon Associate we earn from qualifying purchases.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer