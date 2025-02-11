import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'

export const metadata: Metadata = {
  title: 'Project Title',
  description: 'Project Description',
}

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
  preload: true,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
