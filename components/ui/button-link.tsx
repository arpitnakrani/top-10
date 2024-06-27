import React from 'react'
import { cn } from '../../utils/cn'
import NextLink from 'next/link'


export default function ButtonLink({ children, className, href = '/', ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return (
        <NextLink href={href} {...props} className={cn('bg-red-500 text-white rounded-md px-8 py-3', className)}>{children}</NextLink>
    )
}