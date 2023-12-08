import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'GitHub Contributor Finder',
  description: 'A tool to search through GitHub repositories and identify contributing users, helping you understand the history and collaboration behind any GitHub project.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
