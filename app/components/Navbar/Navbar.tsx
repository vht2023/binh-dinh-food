import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';
import ContactDialog from './Contact';
import Image from 'next/image';

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

const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<Disclosure as='nav' className='navbar'>
			<>
				<div className='mx-auto max-w-7xl p-3 lg:px-8'>
					<div className='relative flex h-12 sm:h-20 items-center'>
						<div className='flex flex-1 items-center sm:justify-between lg:gap-3'>
							{/* LOGO */}
							<div className='flex sm:hidden flex-shrink-0 items-center border-right'>
								<Image src='/images/Logo/Sea-Logo.svg' alt='Đặc sản Bình Định' width={36} height={36} />
								<Link href='/' className='text-2xl font-bold text-black ml-4'>
									Hải Sản Phơi Khô
								</Link>
							</div>
							<div className='hidden sm:flex flex-shrink-0 items-center border-right'>
								<Image src='/images/Logo/Sea-Logo.svg' alt='Đặc sản Bình Định' width={52} height={52} />
								<Link href='' className='text-2xl font-bold text-black ml-4'>
									{/* 77&apos;s Food */}
									Hải Sản Phơi Khô
								</Link>
							</div>

							{/* LINKS */}
							<div className='hidden lg:flex items-center'>
								<div className='flex justify-end items-center gap-6'>
									{navigation.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											className={classNames(
												item.current ? 'bg-black' : 'hover:opacity-100',
												'rounded-md lg:text-lg font-normal hover:text-black opacity-50 space-links'
											)}
											aria-current={item.href ? 'page' : undefined}
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>
							<div className='gap-6 hidden lg:flex'>
								<div className='flex items-center gap-2'>
									<Image src={'/images/Navbar/phone.svg'} alt='SĐT đặt hàng' width={19} height={19} />
									<a className='text-lg font-medium hover:underline' href='tel:0986078827'>
										098 607 8827
									</a>
								</div>
								{/* <button className='flex justify-end text-xl font-medium bg-bgpink text-pink py-4 px-4 lg:px-8 navbutton rounded-full hover:text-black'>Sign in</button> */}
								<ContactDialog />
							</div>
						</div>

						{/* DRAWER FOR MOBILE VIEW */}

						{/* DRAWER ICON */}
						<div className='block lg:hidden hover:cursor-pointer'>
							<Bars3Icon className='block h-6 w-6' aria-hidden='true' onClick={() => setIsOpen(true)} />
						</div>

						{/* DRAWER LINKS DATA */}
						<Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
							<Drawerdata />
						</Drawer>
					</div>
				</div>
			</>
		</Disclosure>
	);
};

export default Navbar;
