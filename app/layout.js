'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/common/navbar'
import Footer from '../components/common/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <body>{children}</body>
      <Footer />
    </>
  )
}