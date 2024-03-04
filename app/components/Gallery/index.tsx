'use client';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const Gallery = () => {
	return (
		<div id='hinh-anh-hai-san-phoi-kho'>
			<div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24'>
				<div className='text-center'>
					<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
						<h3 className='text-pink text-xl font-semibold mb-3 ls-51 uppercase'>HÌNH ẢNH SẢN PHẨM</h3>
					</Fade>
					{/* <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
						<h3 className='text-3xl lg:text-5xl font-semibold text-black'>Gallery of our cooked food.</h3>
					</Fade> */}
				</div>

				<div className='grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6'>
					<div className='col-span-6 flex justify-center overflow-hidden rounded-3xl'>
						<Image
							src='/images/Details/kho-muc-1.jpeg'
							alt='Khô mực ngon Bình Định'
							width={1000}
							height={805}
							className='inner-img'
						/>
					</div>

					<div className='col-span-6 flex justify-center'>
						<div className='grid grid-rows-1 grid-flow-row gap-4'>
							<div className='row-span-1 overflow-hidden rounded-3xl'>
								<Image
									src='/images/Details/kho-ca-com-1.jpg'
									alt='Khô cá cơm ngon Bình Định'
									width={700}
									height={405}
									className='inner-img'
								/>
							</div>
							<div className='grid grid-cols-2 gap-2'>
								<div className='overflow-hidden rounded-3xl'>
									<Image
										src='/images/Details/kho-ca-du-1.jpg'
										alt='Khô cá đù 1 nắng ngon Bình Định'
										width={500}
										height={405}
										className='inner-img'
									/>
								</div>
								<div className='overflow-hidden rounded-3xl'>
									<Image
										src='/images/Details/tom-kho-1.jpg'
										alt='Tôm khô ngon Bình Định'
										width={500}
										height={405}
										className='inner-img w-full h-full'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
