import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Infinities Solutions',
  description: 'A Tech Company',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Link to the favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
