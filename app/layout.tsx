import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'CortexOS - AI Second Brain & Operating System',
  description: 'Interactive AI Second Brain & Operating System inspired by Nate Herk and the 4C framework: 3D interactive knowledge graph, AGENTS.md router, context vault, live connectors, grill-me interviewer, and continuous audit engine.',
  openGraph: {
    title: 'CortexOS - AI Second Brain & Operating System',
    description: 'Interactive AI Second Brain & Operating System inspired by Nate Herk and the 4C framework.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CortexOS - AI Second Brain & Operating System',
    description: 'Interactive AI Second Brain & Operating System inspired by Nate Herk and the 4C framework.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-[#050814] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
