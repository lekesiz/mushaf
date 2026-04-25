import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Mushaf · Kur'an Yaşam Rehberi",
  description:
    "Kur'an-ı Kerim'in insana yönelik tüm emir, tavsiye, yasak ve ibadetlerini A'dan Z'ye kategorize eden, aranabilir, modern bir Kur'an Yaşam Rehberi.",
  keywords: ['Kuran', 'İslam', 'Yaşam Rehberi', 'Emir', 'Yasak', 'İbadet', 'Mushaf'],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Mushaf',
  },
  openGraph: {
    title: "Mushaf · Kur'an Yaşam Rehberi",
    description: "A'dan Z'ye Kur'an'dan yaşam prensipleri",
    type: 'website',
    locale: 'tr_TR',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
