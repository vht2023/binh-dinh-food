'use client';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

const Banner = () => {
	return (
		<div id='trang-chu' className='bg-lightpink'>
			<div className='mx-auto max-w-7xl pt-4 sm:pt-10 sm:pb-24 px-6'>
				<div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 space-y-8'>
					<div className='col-span-7 flex flex-col justify-center'>
						<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
							<h1 className='text-xl md:text-3xl font-semibold mb-2 text-lightgrey md:4px lg:text-start text-center'>
								Biển trời vẫy gọi bình minh
							</h1>
							<h1 className='text-xl md:text-3xl font-semibold mb-4 text-lightgrey md:4px lg:text-start text-center'>
								Mũi Gành Hoài Hải đậm tình nhớ thương
							</h1>
						</Fade>
						<Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
							<p className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'>
								[Giới thiệu nhanh về đặc sản - du lịch]
							</p>
						</Fade>
						<Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
							<div className='md:flex align-middle justify-center lg:justify-start'>
								<button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-4 px-5 bg-pink lg:px-10 mr-6 hover:bg-[#c25947]'>
									<Link href='#dac-san'>Tìm hiểu ngay</Link>
								</button>
								{/* <button className='flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-4 px-10 text-pink hover:text-white hover:bg-pink'>
									<Link href='#dac-san'>Explore now</Link>
								</button> */}
							</div>
						</Fade>
					</div>

					<div className='col-span-4 flex justify-center relative'>
						{/* <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
							<Image src={'/images/Banner/pizza.svg'} alt='pizza-image' width={68} height={68} />
							<p className='text-lg font-normal'>
								More than 500+ <br /> recipes.
							</p>
						</div> */}
						<Image src='/images/Banner/beach-travel-image-4.png' alt='Bãi biển du lịch' width={1000} height={805} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
