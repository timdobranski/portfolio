export const metadata = {
  title: 'Connect',
  description: 'Contact Tim Dobranski by email, LinkedIn, or GitHub.',
  openGraph: {
    title: 'Connect',
    description: 'Contact Tim Dobranski by email, LinkedIn, or GitHub.',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connect',
    description: 'Contact Tim Dobranski by email, LinkedIn, or GitHub.',
    images: ['/twitter-image.png'],
  },
};

export default function ConnectLayout({ children }) {
  return children;
}