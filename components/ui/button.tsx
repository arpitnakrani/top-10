import React from 'react'
import { cn } from '../../utils/cn'

export default function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button {...props} className={cn('bg-red-700 text-white rounded-md', className)}>{children}</button>
    )
}
