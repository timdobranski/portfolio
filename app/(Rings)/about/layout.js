export const metadata = {
  title: 'About',
  description: 'About Tim Dobranski, a software developer, musician, and music teacher based in San Diego.',
  openGraph: {
    title: 'About',
    description: 'About Tim Dobranski, a software developer, musician, and music teacher based in San Diego.',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About',
    description: 'About Tim Dobranski, a software developer, musician, and music teacher based in San Diego.',
    images: ['/twitter-image.png'],
  },
};

export default function AboutLayout({ children }) {
  return children;
}