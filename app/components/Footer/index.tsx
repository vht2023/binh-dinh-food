import Link from 'next/link'
import Image from 'next/image'
import { siteMetadata } from '@/configs/siteMetadata'

interface ProductType {
  id: number
  section: string
  link: string[]
}

interface socialLinks {
  imgSrc: string
  link: string
  width: number
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: '/images/Footer/facebook.svg',
    link: siteMetadata.social.facebook,
    width: 10,
  },
  {
    imgSrc: '/images/Footer/insta.svg',
    link: 'https://instagram.com',
    width: 14,
  },
  {
    imgSrc: '/images/Footer/twitter.svg',
    link: 'https://twitter.com',
    width: 14,
  },
]

const products: ProductType[] = [
  {
    id: 1,
    section: 'Company',
    link: ['About', 'Careers', 'Mobile', 'Blog', 'How we work?'],
  },
  {
    id: 2,
    section: 'Contact',
    link: ['Help/FAQ', 'Press', 'Affiliates', 'Hotel owners', 'Partners'],
  },
  {
    id: 3,
    section: 'More',
    link: ['Recipe', 'Chef', 'Food', 'Support'],
  },
]

const Footer = () => {
  return (
    <div className='mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
      <div className='my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12'>
        {/* COLUMN-1 */}

        <div className='sm:col-span-6 lg:col-span-5'>
          <div className='flex flex-shrink-0 items-center border-right'>
            <Image
              src='/images/Logo/logo.png'
              alt='logo'
              width={60}
              height={60}
            />
            <Link href='/' className='text-2xl font-semibold text-black ml-4'>
              Hải Sản Phơi Khô
            </Link>
          </div>
          <h3 className='text-textbl text-xs font-medium mt-8 mb-4 lg:mb-8'>
            Vui lòng truy cập vào bên dưới để chúng tôi cung cấp thêm thông tin
            chi tiết về sản phẩm
          </h3>
          <div className='flex gap-4'>
            {socialLinks.map((items, i) => (
              <Link href={items.link} key={i} target='blank'>
                <div className='bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center Footer-icons hover:bg-pink'>
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={items.width}
                    height={2}
                    className='sepiaa'
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CLOUMN-2/3/4 */}

        {/* {products.map((product) => (
					<div key={product.id} className='sm:col-span-2'>
						<p className='text-black text-xl font-semibold mb-9'>{product.section}</p>
						<ul>
							{product.link.map((link: string, index: number) => (
								<li key={index} className='mb-5'>
									<Link href='/' className='text-footerlinks text-base font-normal mb-6 space-links'>
										{link}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))} */}
      </div>

      {/* All Rights Reserved */}

      <div className='py-10 md:flex items-center justify-between border-t border-t-bordertop'>
        <h4 className='text-darkgrey text-sm text-center md:text-start font-medium'>
          @{new Date().getFullYear()} - {siteMetadata.title}. <br />
          All Rights Reserved by TT
        </h4>
        {/* <div className='flex gap-5 mt-5 md:mt-0 justify-center md:justify-start'>
					<h4 className='text-darkgrey text-sm font-normal'>
						<Link href='/' target='_blank'>
							Privacy policy
						</Link>
					</h4>
					<div className='h-5 bg-bordertop w-0.5'></div>
					<h4 className='text-darkgrey text-sm font-normal'>
						<Link href='/' target='_blank'>
							Terms & conditions
						</Link>
					</h4>
				</div> */}
      </div>
    </div>
  )
}

export default Footer
