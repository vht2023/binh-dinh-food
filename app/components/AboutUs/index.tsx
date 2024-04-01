'use client';
import Slider from 'react-slick';
import React, { Component } from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

interface AboutDataType {
	profession: string;
	name: string;
	imgSrc: string;
}

interface ReviewDataType {
	name: string;
	productImg: string;
	reviewerImg: string;
	comment: string;
	rating: number;
}

const aboutData: AboutDataType[] = [
	{
		profession: 'Gym chúa',
		name: 'Huỳnh Minh Tho',
		imgSrc: '/images/Expert/boytwo.svg',
	},
	{
		profession: 'Culi',
		name: 'Võ Huỳnh Thiên',
		imgSrc: '/images/Expert/boyone.svg',
	},
	{
		profession: 'Bán mắm dạo',
		name: 'Nguyễn Đức Cảnh',
		imgSrc: '/images/Expert/boytwo.svg',
	},
	{
		profession: 'Chủ trại mắm',
		name: 'Thùy Vy',
		imgSrc: '/images/Expert/girl.png',
	},
];

const reviewsData: ReviewDataType[] = [
	{
		name: 'Huỳnh Minh Tho',
		reviewerImg: '/images/Expert/boytwo.svg',
		productImg: '/images/Details/kho-muc-1.jpeg',
		comment: 'Ship nhanh, mồi ngon, sạch, cho shop 5 sao.',
		rating: 5,
	},
	{
		name: 'Võ Huỳnh Thiên',
		reviewerImg: '/images/Expert/boyone.svg',
		productImg: '/images/Details/kho-muc-2.jpeg',
		comment: 'Mực khô rất ngọt, còn vị của biển, nướng chấm với tương là nhức nách!!!',
		rating: 5,
	},
	{
		name: 'Nguyễn Đức Cảnh',
		reviewerImg: '/images/Expert/boyone.svg',
		productImg: '/images/Details/nuoc-mam-1.jfif',
		comment: 'Đúng vị của nước mắm truyền thống Bình Định. Chỉ cần cắt ớt vào là ăn ngon luôn shop ơi',
		rating: 5,
	},
];

export default class MultipleItems extends Component {
	render() {
		const settings = {
			infinite: true,
			slidesToShow: 3,
			pauseOnHover: true,
			slidesToScroll: 3,
			arrows: false,
			autoplay: false,
			speed: 3000,
			autoplaySpeed: 4000,
			cssEase: 'linear',
			swipeToSlide: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						infinite: true,
						dots: false,
					},
				},
				{
					breakpoint: 450,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: false,
					},
				},
			],
		};

		return (
			<div className='py-10 sm:py-20 bg-darkpink' id='danh-gia'>
				{/* <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
					<div className='text-center'>
						<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
							<h2 className='text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51'>Về Chúng Tôi</h2>
						</Fade>
					</div>

					<Slider {...settings}>
						{aboutData.map((items, i) => (
							<div key={i}>
								<div className='m-3 py-14 my-10 text-center'>
									<div className='relative'>
										<Image src={items.imgSrc} alt='gaby' width={362} height={262} className='inline-block m-auto' />
										<div className='absolute top-[50%] right-[2%]'>
											<Image src={'/images/Expert/Linkedin.svg'} alt='linkedin' width={220} height={120} />
										</div>
									</div>
									<h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
									<h4 className='text-lg font-normal text-lightblack pt-4 pb-2 opacity-50'>{items.profession}</h4>
								</div>
							</div>
						))}
					</Slider>
				</div> */}

				<div className='mx-auto max-w-2xl lg:max-w-7xl lg:px-8'>
					<div className='text-center pb-8'>
						<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
							<h2 className='text-pink text-xl font-semibold mb-3 ls-51 uppercase'>
								Đánh Giá <div className='lg:break-inside-auto'>Từ Khách Hàng</div>
							</h2>
						</Fade>
					</div>
					<Slider {...settings}>
						{reviewsData.map((items, i) => (
							<div key={i}>
								<div className='relative m-3 my-10 rounded-lg shadow-orange h-[250px] bg-white p-4 flex flex-col gap-6'>
									<div className='absolute top-2 right-2 rounded-full w-[100px] h-[100px] z-[1000]'>
										<Image src={items.productImg} alt='Đánh giá sản phẩm' width={100} height={100} className='rounded-full w-full h-full z-[1000]' />
									</div>
									<h3 className='text-xl font-semibold text-lightblack'>{items.name}</h3>
									<div className='flex gap-1.5 items-center text-[#FFCB45]'>
										<svg className='w-6 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
											<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
										</svg>
										<svg className='w-6 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
											<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
										</svg>
										<svg className='w-6 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
											<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
										</svg>
										<svg className='w-6 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
											<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
										</svg>
										<svg className='w-6 h-6' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
											<path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
										</svg>
									</div>
									<h4 className='mt-1 text-lg font-medium text-lightblack'>{`"${items.comment}"`}</h4>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		);
	}
}
