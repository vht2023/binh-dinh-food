import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://www.haisanphoikho.com',
			lastModified: new Date(),
		},
	];
}
