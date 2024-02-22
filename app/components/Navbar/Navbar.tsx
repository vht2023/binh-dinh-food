import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';
import Signindialog from './Signindialog';
import Image from 'next/image';

interface NavigationItem {
	name: string;
	href: string;
	current: boolean;
}

const navigation: NavigationItem[] = [
	{ name: 'Trang chủ', href: '#home-section', current: false },
	{ name: 'Về chúng tôi', href: '#about-section', current: false },
	{ name: 'Sản phẩm', href: '#cook-section', current: false },
	{ name: 'Hình ảnh', href: '#gallery-section', current: false },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<Disclosure as='nav' className='navbar'>
			<>
				<div className='mx-auto max-w-7xl p-3 md:p-6 lg:px-8'>
					<div className='relative flex h-12 sm:h-20 items-center'>
						<div className='flex flex-1 items-center sm:justify-between'>
							{/* LOGO */}

							<div className='flex sm:hidden flex-shrink-0 items-center border-right'>
								<Image src='/images/Logo/Sea-Logo.svg' alt='Đặc sản Bình Định' width={36} height={36} />
								<Link href='/' className='text-2xl font-bold text-black ml-4'>
									Hải Sản Phơi Khô
								</Link>
							</div>
							<div className='hidden sm:flex flex-shrink-0 items-center border-right'>
								<Image src='/images/Logo/Sea-Logo.svg' alt='Đặc sản Bình Định' width={64} height={64} />
								<Link href='/' className='text-2xl font-bold text-black ml-4'>
									{/* 77&apos;s Food */}
									Hải Sản Phơi Khô
								</Link>
							</div>

							{/* LINKS */}

							<div className='hidden lg:flex items-center border-right '>
								<div className='flex justify-end space-x-4'>
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className={classNames(
												item.current ? 'bg-black' : 'navlinks hover:opacity-100',
												'px-3 py-4 rounded-md text-lg font-normal opacity-50 hover:text-black space-links'
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
									<p className='text-lg font-medium'>098 607 8827 </p>
								</div>
								{/* <button className='flex justify-end text-xl font-medium bg-bgpink text-pink py-4 px-4 lg:px-8 navbutton rounded-full hover:text-black'>Sign in</button> */}
								<Signindialog />
							</div>
						</div>

						{/* DRAWER FOR MOBILE VIEW */}

						{/* DRAWER ICON */}

						<div className='block lg:hidden'>
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