import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from './context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Best Web Development Mobile app Development and Digital marketing Company.',
  description: 'Cyber Space Digital is a leading web design and development, digital marketing, graphic designing, advertising, and branding company based in India.',
  icons: {
    icon: [
      '/favicon/favicon.png',
    ],
    apple: [
      '/favicon/apple-touch-icon.png',
    ],
    shortcut: [
      '/favicon/apple-touch-icon.png',
    ]
  },
  manifest: '/favicon/site.webmanifest'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
