export const metadata = {
  title: 'Teaching',
  description: 'Guitar lessons and teaching work at La Mesa String School.',
  openGraph: {
    title: 'Teaching',
    description: 'Guitar lessons and teaching work at La Mesa String School.',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teaching',
    description: 'Guitar lessons and teaching work at La Mesa String School.',
    images: ['/twitter-image.png'],
  },
};

export default function LessonsLayout({ children }) {
  return children;
}