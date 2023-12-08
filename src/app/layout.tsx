import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'GitHub Contributor Finder',
  description: 'A tool to identify contributors in GitHub projects.'
};

const NoSSR = dynamic(() => import('./page'), { ssr: false });

export default function RootLayout() {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <NoSSR />
        </Providers>
      </body>
    </html>
  );
}
