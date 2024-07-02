'use client'

import { Fade } from 'react-awesome-reveal'
import Link from 'next/link'
import { siteMetadata } from '@/configs/siteMetadata'

const MoreInfoButton = () => (
  <button className='btn-more-info sm:py-3.5 md:py-5 sm:px-10 px-6 py-2.5 lg:px-10 rounded-full'>
    <Link href='#dac-san'>
      <span className='sm:text-xl md:text-2xl text-lg'>Tìm hiểu ngay</span>
    </Link>
  </button>
)

const CallMeButton = () => (
  <button className='sm:text-xl text-lg w-auto font-medium rounded-full text-white sm:py-3.5 md:py-5 sm:px-10 px-6 py-2.5 bg-pink lg:px-10 hover:bg-[#c25947] block md:hidden min-w-[180px]'>
    <a href='tel:0931888357' className='flex item-center gap-2 h-full'>
      <div className='pt-0.5'>
        <svg
          width='26px'
          height='26px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          stroke='white'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M5.73268 2.043C6.95002 0.832583 8.95439 1.04804 9.9737 2.40962L11.2347 4.09402C12.0641 5.20191 11.9909 6.75032 11.0064 7.72923L10.7676 7.96665C10.7572 7.99694 10.7319 8.09215 10.76 8.2731C10.8232 8.6806 11.1635 9.545 12.592 10.9654C14.02 12.3853 14.8905 12.7253 15.3038 12.7887C15.4911 12.8174 15.5891 12.7906 15.6194 12.78L16.0274 12.3743C16.9026 11.5041 18.2475 11.3414 19.3311 11.9305L21.2416 12.9691C22.8775 13.8584 23.2909 16.0821 21.9505 17.4148L20.53 18.8273C20.0824 19.2723 19.4805 19.6434 18.7459 19.7119C16.9369 19.8806 12.7187 19.6654 8.28659 15.2584C4.14868 11.144 3.35462 7.556 3.25415 5.78817L4.00294 5.74562L3.25415 5.78817C3.20335 4.89426 3.62576 4.13796 4.16308 3.60369L5.73268 2.043ZM8.77291 3.30856C8.26628 2.63182 7.322 2.57801 6.79032 3.10668L5.22072 4.66737C4.8908 4.99542 4.73206 5.35695 4.75173 5.70307C4.83156 7.10766 5.47286 10.3453 9.34423 14.1947C13.4057 18.2331 17.1569 18.3536 18.6067 18.2184C18.9029 18.1908 19.1975 18.0369 19.4724 17.7636L20.8929 16.3511C21.4704 15.777 21.343 14.7315 20.5252 14.2869L18.6147 13.2484C18.0871 12.9616 17.469 13.0562 17.085 13.438L16.6296 13.8909L16.1008 13.359C16.6296 13.8909 16.6289 13.8916 16.6282 13.8923L16.6267 13.8937L16.6236 13.8967L16.6171 13.903L16.6025 13.9166C16.592 13.9262 16.5799 13.9367 16.5664 13.948C16.5392 13.9705 16.5058 13.9959 16.4659 14.0227C16.3858 14.0763 16.2801 14.1347 16.1472 14.1841C15.8764 14.285 15.5192 14.3392 15.0764 14.2713C14.2096 14.1384 13.0614 13.5474 11.5344 12.0291C10.0079 10.5113 9.41194 9.36834 9.2777 8.50306C9.20906 8.06061 9.26381 7.70331 9.36594 7.43225C9.41599 7.29941 9.47497 7.19378 9.5291 7.11389C9.5561 7.07405 9.58179 7.04074 9.60446 7.01368C9.6158 7.00015 9.6264 6.98817 9.63604 6.9777L9.64977 6.96312L9.65606 6.95666L9.65905 6.95363L9.66051 6.95217C9.66122 6.95146 9.66194 6.95075 10.1908 7.48258L9.66194 6.95075L9.94875 6.66556C10.3774 6.23939 10.4374 5.53194 10.0339 4.99297L8.77291 3.30856Z'
              fill='white'
            ></path>
          </g>
        </svg>
      </div>
      <span>{siteMetadata.phone}</span>
    </a>
  </button>
)

const Banner = () => {
  return (
    <div
      id='trang-chu'
      className={`bg-lightpink bg-cover bg-origin-content bg-no-repeat bg-[url('/images/Banner/mui-ganh.png')] md:h-[600px] h-[500px]`}
    >
      <div className='mx-auto max-w-7xl pt-16 sm:pt-20 md:pt-32 px-6 h-full'>
        <div className='grid grid-cols-1 sm:grid-cols-12 space-x-1 space-y-8'>
          <div className='col-span-9 sm:col-span-8 flex flex-col justify-center'>
            {/* <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
							<h1 className='text-2xl md:text-4xl font-semibold mb-2 text-white md:4px text-start'>Biển trời vẫy gọi bình minh</h1>
							<h1 className='text-2xl md:text-4xl font-semibold mb-4 text-white md:4px text-start'>Mũi Gành Hoài Hải đậm tình nhớ thương</h1>
						</Fade> */}
            <Fade
              direction={'up'}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className='text-2xl md:text-4xl font-bold mb-10 text-start text-white leading-snug'>
                Chúng tôi chuyên cung cấp hải sản phơi khô và đặc sản xứ Hoài
              </p>
            </Fade>
            <Fade
              direction={'up'}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className='flex justify-start gap-6 flex-col'>
                <div>
                  <MoreInfoButton />
                </div>
                <div>
                  <CallMeButton />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
