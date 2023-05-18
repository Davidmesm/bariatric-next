import './globals.scss'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight:['100', '300', '400', '500', '700', '900'], 
  variable: '--font-roboto',
  subsets: ['latin'] })

export const metadata = {
  title: 'Bariatric Next',
  description: 'CRM Bariatric',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-mx" className={roboto.variable}>
      <body>{children}</body>
    </html>
  )
}
