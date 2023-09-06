import { Header } from '@/components/Header'
import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({ 
  subsets: ['latin'],
  weight:['400','700']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}</body>
    </html>
  )
}
