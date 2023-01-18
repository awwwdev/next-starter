// 'use client';
// import 'server-only';
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/tailwind.css'
import "@/styles/reset.css";
import 'uno.css'
import "@/styles/globals.css";

import { Inter } from '@next/font/google';
import { ColorThemeProvider } from '@/components/ColorThemeProvider';
import Header from '@/components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { useState } from 'react';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useUser } from '@supabase/auth-helpers-react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import 'server-only';

import SupabaseListener from '@/components/supabase-listener';
import SupabaseProvider from '@/components/supabase-provider';
import Login from '../components/Login';
import './globals.css';
import { createServerClient } from '@/utils/supabase-server';

import type { Database } from '@/db_types';
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';


export type TypedSupabaseClient = SupabaseClient<Database>;

// do not cache this layout
export const revalidate = 0;

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({ children }: Children) {


  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      }
    }
  });

  const supabase = createServerClient();

  const {
    data: { session }
  } = await supabase.auth.getSession();


  return (

    <html lang="en" className='dark' suppressHydrationWarning>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${inter.className}  bg-gray1 c-gray11`} >
        <QueryClientProvider client={queryClient}>
          <SupabaseProvider session={session}>
            <SupabaseListener serverAccessToken={session?.access_token} />
            <ColorThemeProvider>
              <Header />
              <main>
                {children}
              </main>
              <footer>
                <p>Footer</p>
              </footer>
            </ColorThemeProvider>
          </SupabaseProvider>
        </QueryClientProvider>
      </body>
    </html >
  )
}
