import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://haisanphoikho.vercel.app',
			lastModified: new Date(),
		},
	];
}
