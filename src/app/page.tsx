'use client';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme } = useTheme();
  return (
    <div>
      The current theme is: {theme}
      <div>a a a </div>
    </div>
  );
}
