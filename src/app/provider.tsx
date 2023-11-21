'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Provider = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (pathname === '/') {
      // if mobile device, redirect to mobile page
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        router.push('/mobile')
      }
    } else if (pathname === '/mobile') {
      // if desktop device, redirect to desktop page
      if (typeof window !== 'undefined' && window.innerWidth > 768) {
        router.push('/')
      }
    }
  }, [pathname, router])

  return <div {...props}>{children}</div>
}

export default Provider
