import projectData from '@/public/projectData';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

const staticRoutes = [
  '/',
  '/about',
  '/apps',
  '/connect',
  '/lessons',
  '/music',
  '/resume',
  '/3d-design',
];

export default function sitemap() {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectEntries = projectData.map((project) => ({
    url: `${siteUrl}/apps/${project.page}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...projectEntries];
}