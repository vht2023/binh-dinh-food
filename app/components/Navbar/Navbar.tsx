import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from './Drawer';
import Drawerdata from './Drawerdata';
import ContactDialog from './Contact';
import Image from 'next/image';
import { Link as LinkScroll, scroller } from 'react-scroll';
import { usePathname, useRouter } from 'next/navigation';

interface NavigationItem {
	name: string;
	href: string;
	current: boolean;
}

const navigation: NavigationItem[] = [
	{ name: 'Trang chủ', href: '#trang-chu', current: false },
	{ name: 'Sản phẩm', href: '#dac-san', current: false },
	{ name: 'Hình ảnh', href: '#hinh-anh-hai-san-phoi-kho', current: false },
	{ name: 'Đánh giá', href: '#danh-gia', current: false },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isOpenContactForm, setIsOpenContactForm] = React.useState(false);

	const renderMenuItems = () => {
		return navigation.map((item, index) => (
			<Link key={`${item.href}-${index}`} href={item.href} className='mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-orange-500'>
				{item.name}
			</Link>
		));
	};

	return (
		<Disclosure as='nav' className='navbar transition-all shadow-md'>
			<>
				<div className='mx-auto max-w-7xl p-3 lg:px-8'>
					<div className='relative flex h-12 sm:h-20 items-center'>
						<div className='flex flex-1 items-center sm:justify-between lg:gap-3'>
							{/* LOGO */}
							<div className='flex sm:hidden flex-shrink-0 items-center border-right'>
								<Image src='/images/Logo/logo.png' alt='Đặc sản Bình Định' width={64} height={64} />
								<Link href='/' className='text-xl font-bold text-black ml-4'>
									Hải Sản Phơi Khô
								</Link>
							</div>
							<div className='hidden sm:flex flex-shrink-0 items-center border-right'>
								<Image src='/images/Logo/logo.png' alt='Đặc sản Bình Định' width={92} height={92} />
								<Link href='' className='text-2xl font-bold text-black ml-4'>
									{/* 77&apos;s Food */}
									Hải Sản Phơi Khô
								</Link>
							</div>

							{/* LINKS */}
							<div className='hidden lg:flex items-center'>
								<div className='flex justify-end items-center gap-6'>{renderMenuItems()}</div>
							</div>
							<div className='gap-6 hidden lg:flex'>
								<div className='flex items-center gap-2'>
									<Image src={'/images/Navbar/phone.svg'} alt='SĐT đặt hàng' width={19} height={19} />
									<a className='animation-hover relative text-lg font-medium text-black capitalize tracking-wide hover:text-orange-500 transition-all' href='tel:0931888357'>
										0931 888 357
									</a>
								</div>
								<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0'>
									<div className='hidden md:block'>
										<button
											type='button'
											className='font-medium text-md tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white transition-all hover:shadow-orange'
											onClick={() => setIsOpenContactForm(true)}
										>
											Liên Hệ Ngay
										</button>
									</div>
								</div>
								<ContactDialog isOpen={isOpenContactForm} setIsOpen={setIsOpenContactForm} />
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
