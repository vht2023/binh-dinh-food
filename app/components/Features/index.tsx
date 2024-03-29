'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fade } from 'react-awesome-reveal';

interface cardDataType {
	imgSrc: string;
	heading: string;
	subheading: string;
	link: string;
	description: string;
}

const cardData: cardDataType[] = [
	{
		imgSrc: '/images/Features/muc-kho.jpg',
		heading: 'Khô Mực',
		subheading: 'Nướng cùng với bia, món nhậu, làm quà tặng',
		link: '#kho-muc',
		description: 'Khô mực ngon',
	},
	{
		imgSrc: '/images/Features/ca-com-kho.png',
		heading: 'Khô Cá Cơm',
		subheading: 'Rim nước mắm tỏi ớt, món ăn ngon với cơm',
		link: '#kho-ca-com',
		description: 'Khô cá cơm ngon',
	},
	{
		imgSrc: '/images/Features/cha-ram-tom-dat.jfif',
		heading: 'Chả ram tôm đất',
		subheading: 'Hương vị đất võ, chiên giòn thơm ngon',
		link: '#cha-ram-tom-dat',
		description: 'Chả ram tôm đất đặc sản Bình Định',
	},
	{
		imgSrc: '/images/Features/nuoc-mam.jfif',
		heading: 'Nước mắm nhỉ truyền thống',
		subheading: 'Nước mắm nhỉ cá cơm nguyên chất truyền thống',
		link: '#nuoc-mam-nhi',
		description: 'Nước mắm nhỉ truyền thống Bình Định',
	},
	// {
	// 	imgSrc: '/images/Features/kho-ca-du.jpg',
	// 	heading: 'Khô Cá Đù',
	// 	subheading: 'Chiên hoặc nướng, làm gỏi, làm đồ nhắm',
	// 	link: '#kho-ca-du',
	// },
	// {
	// 	imgSrc: '/images/Features/tom-kho.jpg',
	// 	heading: 'Tôm Khô',
	// 	subheading: 'Làm gỏi, nấu canh, kho quẹt, làm món nhậu',
	// 	link: '#tom-kho',
	// },
];

const Features = () => {
	return (
		<div id='dac-san' className='mx-auto max-w-7xl sm:py-40 py-36 px-6'>
			<div className='w-full'>
				<div className='text-center mb-14'>
					<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
						<h3 className='text-pink text-xl font-semibold mb-3 ls-51 uppercase'>ĐẶC SẢN</h3>
					</Fade>
					<Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
						<p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>Hải sản phơi khô - Chất lượng cao cấp</p>
					</Fade>
				</div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-40 gap-x-5 mt-40'>
					<Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
						{cardData.map((item, i) => (
							<div className='card-b py-8 px-4 relative rounded-3xl' key={i}>
								<div className='work-img-bg rounded-full flex justify-center absolute top-[-35%] w-full left-0'>
									<div>
										<Image src={item.imgSrc} alt={item.description} width={160} height={160} className='rounded-full h-[160px] shadow-md' />
									</div>
								</div>
								<h3 className='text-2xl text-black font-semibold text-center mt-16'>{item.heading}</h3>
								<p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{item.subheading}</p>
								<div className='flex items-center justify-center'>
									<Link href={item.link}>
										<p className='text-center text-lg font-medium text-pink mt-2 hover-underline'>
											Xem thêm
											<ChevronRightIcon width={20} height={20} />
										</p>
									</Link>
								</div>
							</div>
						))}
					</Fade>
				</div>
			</div>
		</div>
	);
};

export default Features;
