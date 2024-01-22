import { Inter } from 'next/font/google'
import './globals.css'
import Footerport from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Best Web Development and Digital marketing Company',
  description: 'Generated by create next app',
  icons:'/favicon.ico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      
      {children}
      <Footer />
      
      </body>
    </html>
  )
}
