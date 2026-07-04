export const metadata = {
  title: 'Resume',
  description: "Tim Dobranski's resume, skills, work history, and accomplishments.",
  openGraph: {
    title: 'Resume',
    description: "Tim Dobranski's resume, skills, work history, and accomplishments.",
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume',
    description: "Tim Dobranski's resume, skills, work history, and accomplishments.",
    images: ['/twitter-image.png'],
  },
};

export default function ResumeLayout({ children }) {
  return children;
}