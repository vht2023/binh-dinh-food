export type SiteMetadataType = {
  title: string
  headerTitle?: string
  description: string
  siteUrl: string
  author?: {
    name: string
    url: string
  }
  email?: string
  phone?: string
  social: {
    facebook: string
    twitter?: string
  }
  ogImage: string
  favicon?: string
  logo?: string
  language: string
  locale: string
  [key: string]: any
}

export const siteMetadata: SiteMetadataType = {
  title: 'Hải Sản Phơi Khô - Đặc Sản Bình Định',
  description: 'Hải Sản Phơi Khô Đặc Sản 77 Bình Định',
  siteUrl: 'https://www.haisanphoikho.com',
  author: {
    name: 'Hải Sản Phơi Khô',
    url: 'https://www.haisanphoikho.com',
  },
  phone: '0931 888 357',
  social: {
    facebook: 'https://facebook.com/haisanphoikho.77binhdinh',
  },
  ogImage: '/assets/images/og-image.png',
  logo: '/assets/images/logo.png',
  favicon: '/assets/images/favicon.ico',
  language: 'vi',
  locale: 'vi_VN',
}
