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
}

const cardData: cardDataType[] = [
	{
		imgSrc: '/images/Features/muc-kho.jpg',
		heading: 'Khô Mực',
		subheading: 'Nướng cùng với bia, món nhậu, làm quà tặng',
		link: '#kho-muc',
	},
	{
		imgSrc: '/images/Features/ca-com-kho.png',
		heading: 'Khô Cá Cơm',
		subheading: 'Rim nước mắm tỏi ớt, món ăn ngon với cơm',
		link: '#kho-ca-com',
	},
	{
		imgSrc: '/images/Features/kho-ca-du.jpg',
		heading: 'Khô Cá Đù',
		subheading: 'Chiên hoặc nướng, làm gỏi, làm đồ nhắm',
		link: '#kho-ca-du',
	},
	{
		imgSrc: '/images/Features/tom-kho.jpg',
		heading: 'Tôm Khô',
		subheading: 'Làm gỏi, nấu canh, kho quẹt, làm món nhậu',
		link: '#tom-kho',
	},
];

const Features = () => {
	return (
		<div>
			<div className='mx-auto max-w-7xl py-40 px-6' id='dac-san'>
				<div className='text-center mb-14'>
					<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
						<h3 className='text-pink text-xl font-semibold mb-3 ls-51 uppercase'>ĐẶC SẢN</h3>
					</Fade>
					<Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
						<p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>Hải sản phơi khô - Chất lượng đặc biệt</p>
					</Fade>
				</div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-40 gap-x-5 mt-40'>
					<Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
						{cardData.map((item, i) => (
							<div className='card-b p-8 relative rounded-3xl' key={i}>
								<div className='work-img-bg rounded-full flex justify-center absolute top-[-35%] w-full left-0'>
									<div>
										<Image
											src={item.imgSrc}
											alt={item.imgSrc}
											width={160}
											height={160}
											className='rounded-full h-[160px] shadow-md'
										/>
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
