import type { AppProps } from 'next/app'
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/tailwind.css'
import "@/styles/reset.css";
import 'uno.css'
import "@/styles/globals.css";

import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes'
import ThemeToggler from '@/components/ThemeToggler';

import NavCol from "@/components/NavCol";
import Head from 'next/head'; 
import Icon from '@/components/Icon';
import { useState } from 'react';
import Link from 'next/link';

import { Inter } from '@next/font/google';

export default function App({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      }
    }
  });


  return (
    <>
      <Head>
        <meta property="og:title" content="" />
        <meta
          property="og:description"
          content="About my website in one sentence"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <meta property="og:site_name" content="my-site0name" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class">
          <div className={Inter.className}>

<header >          
              <span >
                <ThemeToggler  />
              </span>
            </header>
                      <main  >
              <Component {...pageProps} />
          </main>
          <footer>
            this is the footer
          </footer>
          </div>
        
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )

}
