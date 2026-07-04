export const metadata = {
  title: 'Projects',
  description: 'Selected web and mobile projects by Tim Dobranski.',
  openGraph: {
    title: 'Projects',
    description: 'Selected web and mobile projects by Tim Dobranski.',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects',
    description: 'Selected web and mobile projects by Tim Dobranski.',
    images: ['/twitter-image.png'],
  },
};

export default function ProjectsLayout({ children }) {
  return children;
}