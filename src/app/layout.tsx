import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'GitHub Repository Contributors List ',
  description: 'Generate a ranking of user contributions within the repository'
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
