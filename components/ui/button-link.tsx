import React from 'react'
import { cn } from '../../utils/cn'
import NextLink from 'next/link'


export default function ButtonLink({ children, className, href = '/', ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <NextLink href={href} {...props} className={cn('bg-bgRed text-white rounded-md lg:px-10  px-5 py-2', className)}>{children}</NextLink>
    )
}