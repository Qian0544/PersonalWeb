import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Qian Zhao - Full Stack Developer',
  description: 'Portfolio website of Qian Zhao, Full Stack Web Developer specializing in Next.js, React, and Data Engineering',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
