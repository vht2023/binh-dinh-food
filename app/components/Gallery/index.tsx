'use client';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { useState } from 'react';

const images = [
	{
		src: '/images/Details/kho-muc-1.jpeg',
		alt: 'Khô mực ngon Bình Định',
		width: 500,
		height: 400,
		title: 'Khô mực ngon Bình Định',
	},
	{
		src: '/images/Details/nuoc-mam-1.jfif',
		alt: 'Nước mắm nhỉ truyền thống Bình Định',
		width: 500,
		height: 400,
		title: 'Nước mắm nhỉ truyền thống Bình Định',
	},
	{
		src: '/images/Details/cha-ram-tom-1.jfif',
		alt: 'Chả ram tôm đất ngon Bình Định',
		width: 500,
		height: 400,
		title: 'Chả ram tôm đất ngon Bình Định',
	},
	{
		src: '/images/Details/cha-ram-tom-3.jpg',
		alt: 'Chả ram tôm đất ngon Bình Định',
		width: 500,
		height: 400,
		title: 'Chả ram tôm đất ngon Bình Định',
	},
	{
		src: '/images/Details/kho-ca-com-1.jpg',
		alt: 'Khô cá cơm ngon Bình Định',
		width: 500,
		height: 400,
		title: 'Khô cá cơm ngon Bình Định',
	},
	{
		src: '/images/Details/kho-ca-com-2.jpg',
		alt: 'Khô cá cơm rim ngon Bình Định',
		width: 500,
		height: 400,
		title: 'Khô cá cơm rim ngon Bình Định',
	},
];

const Gallery = () => {
	return (
		<div id='hinh-anh-hai-san-phoi-kho'>
			<div className='mx-auto sm:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24'>
				<div className='text-center'>
					<Fade direction={'up'} delay={200} cascade damping={1e-1} triggerOnce={true}>
						<h3 className='text-pink text-xl font-semibold mb-3 ls-51 uppercase'>HÌNH ẢNH SẢN PHẨM</h3>
					</Fade>
					{/* <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
						<h3 className='text-3xl lg:text-5xl font-semibold text-black'>Gallery of our cooked food.</h3>
					</Fade> */}
				</div>
				<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
					<div className='w-full p-5 pb-10 mx-auto mb-10 gap-5 columns-1 md:columns-3 space-y-5'>
						{images.map((image) => (
							<div className='overflow-hidden rounded-xl' key={image.src}>
								<Image src={image.src} alt={image.alt} width={image.width} height={image.height} className='inner-img w-full' />
							</div>
						))}
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Gallery;
