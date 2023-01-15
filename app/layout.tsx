'use client';
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/tailwind.css'
import "@/styles/reset.css";
import 'uno.css'
import "@/styles/globals.css";

// import { ThemeProvider } from 'next-themes'
import Icon from '@/components/Icon';
import Link from 'next/link';
import { Inter } from '@next/font/google';
import { ColorThemeProvider } from '@/components/ColorThemeProvider';
import Header from '@/components/Header';


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark' suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${inter.className} bg-gray1 c-gray11`} >
        <ColorThemeProvider>
          <Header />
          <main>
            {children}
          </main>
          <footer>
            <p>Footer</p>
          </footer>
        </ColorThemeProvider>
      </body>
    </html >
  )
}
