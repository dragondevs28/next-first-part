import type {Metadata} from 'next'
import {Inter, Bree_Serif} from 'next/font/google'
import './globals.css'
import NavBar from "@/app/NavBar";
import {Suspense} from "react";
import AuthProvider from "@/app/auth/Provider";
import localFont from "next/font/local";

const inter = Inter({subsets: ['latin']})
const roboto = Bree_Serif({
  subsets:['latin'],
  weight:['400']
});

const poppins = localFont({
  src:"../public/fonts/Poppins-Regular.ttf",
  variable: '--font-poppins'
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  // openGraph:{ // for social media pages.
  //   title: '...',
  //   description: '...'
  // }
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en" data-theme="dark">
      <body className={poppins.className}>
      <AuthProvider>
        <NavBar/>
        <main className="p-5">
          {children}
        </main>
      </AuthProvider>
      </body>
      </html>
  )
}
