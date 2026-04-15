import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
});

export const metadata = {
  title: 'Nikhil Kumar - Biodata',
  description: 'Personal Biodata of Nikhil Kumar, Software Engineer.',
  openGraph: {
    title: 'Nikhil Kumar - Biodata',
    description: 'Personal Biodata of Nikhil Kumar, Software Engineer.',
    type: 'profile',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${outfit.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
