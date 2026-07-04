export const metadata = {
  title: '3D Design',
  description: '3D design, woodworking, and installation projects by Tim Dobranski.',
  openGraph: {
    title: '3D Design',
    description: '3D design, woodworking, and installation projects by Tim Dobranski.',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3D Design',
    description: '3D design, woodworking, and installation projects by Tim Dobranski.',
    images: ['/twitter-image.png'],
  },
};

export default function DesignLayout({ children }) {
  return children;
}