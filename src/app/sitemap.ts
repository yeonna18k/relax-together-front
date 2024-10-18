import { fetchGatherings } from '@/entities/gatherings/api/gatherings';
import { additionalParams } from '@/entities/gatherings/api/queries/gatherings';
import { MetadataRoute } from 'next';

type Changefreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

function isValidURL(string: string): boolean {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

let BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://relax-together.web.app';

if (!isValidURL(BASE_URL)) {
  console.warn('Invalid BASE_URL in sitemap generation, using default');
  BASE_URL = 'https://relax-together.web.app';
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '/gatherings',
    '/like-gatherings',
    '/reviews',
    '/signin',
    '/signup',
    '/forgot-password',
  ].map(route => {
    let priority: number;
    let changeFrequency: Changefreq;

    if (route === '/gatherings') {
      priority = 1;
      changeFrequency = 'daily';
    } else if (route === '/like-gatherings' || route === '/reviews') {
      priority = 0.8;
      changeFrequency = 'weekly';
    } else {
      priority = 0.5;
      changeFrequency = 'never';
    }

    return {
      url: `${BASE_URL}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency,
      priority,
    };
  });

  try {
    const response = await fetchGatherings({
      ...additionalParams,
      pageParam: 0,
      page: 0,
      size: 10,
      sortOrder: 'ASC',
    });

    const gatherings = response.content.map(gathering => ({
      url: `${BASE_URL}/gatherings/${gathering.id}`,
      lastModified: new Date(gathering.dateTime).toISOString(),
      changeFrequency: 'weekly' as Changefreq,
      priority: 0.8,
    }));

    return [...routes, ...gatherings];
  } catch (error) {
    console.error('Error fetching gatherings for sitemap:', error);
    return routes;
  }
}
