import React from 'react';
import Link from 'next/link';
// import ContactUsForm from './Contactus';

interface NavigationItem {
	name: string;
	href: string;
	current: boolean;
}

const navigation: NavigationItem[] = [
	{ name: 'Trang chủ', href: '#trang-chu', current: false },
	{ name: 'Sản phẩm', href: '#dac-san', current: false },
	{ name: 'Hình ảnh', href: '#hinh-anh-hai-san-phoi-kho', current: false },
	{ name: 'Về chúng tôi', href: '#ve-chung-toi', current: false },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const Data = () => {
	return (
		<div className='rounded-md max-w-sm w-full mx-auto'>
			<div className='flex-1 space-y-4 py-1'>
				<div className='sm:block'>
					<div className='space-y-1 px-5 pt-2 pb-3'>
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={classNames(item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple', 'block  py-2 rounded-md text-base font-medium')}
								aria-current={item.current ? 'page' : undefined}
							>
								{item.name}
							</Link>
						))}
						{/* <button className='flex justify-center text-base w-full font-medium rounded-full bg-bgpink text-pink py-3 px-4 lg:px-8 navbutton hover:text-white'>Sign in</button> */}
						<a
							href='tel:0986078827'
							className='mt-12 flex justify-center text-base w-full font-medium rounded-full bg-transparent border border-bgpink text-pink py-3 px-4 lg:px-8 navbutton hover:text-white hover:bg-pink'
						>
							Liên hệ ngay
						</a>

						{/* <ContactUsForm /> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Data;
