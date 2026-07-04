export const metadata = {
  title: 'Music',
  description: 'Music projects, recordings, and Forgotten Alibi updates from Tim Dobranski.',
  openGraph: {
    title: 'Music',
    description: 'Music projects, recordings, and Forgotten Alibi updates from Tim Dobranski.',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Music',
    description: 'Music projects, recordings, and Forgotten Alibi updates from Tim Dobranski.',
    images: ['/twitter-image.png'],
  },
};

export default function MusicLayout({ children }) {
  return children;
}