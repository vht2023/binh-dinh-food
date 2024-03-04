import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Image from 'next/image';

const Contact = () => {
	let [isOpen, setIsOpen] = useState(false);

	const closeModal = () => {
		setIsOpen(false);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	return (
		<>
			<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0'>
				<div className='hidden md:block'>
					<button
						type='button'
						className='flex justify-end text-md font-medium bg-bgpink text-pink py-3 px-3 xl:px-6 navbutton rounded-full hover:text-white hover:bg-pink'
						onClick={openModal}
					>
						Liên Hệ Ngay
					</button>
				</div>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black bg-opacity-25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
									<div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
										<div className='w-full max-w-md space-y-8'>
											<div>
												<div className='flex items-center justify-center'>
													<Image src='/images/Logo/Sea-Logo.svg' alt='logo' width={46} height={46} />
													<p className='text-2xl font-semibold text-black ml-4'>Hải Sản Phơi Khô</p>
												</div>
												<h4 className='mt-10 text-center text-xl font-bold tracking-tight text-lightgrey'>
													Vui lòng iên hệ với chúng tôi để biết thêm thông tin về các sản phẩm!
												</h4>
											</div>
											<form className='mt-8 space-y-6' action='#' method='POST'>
												<input type='hidden' name='remember' defaultValue='true' />
												<div className='-space-y-px rounded-md shadow-sm flex flex-col gap-2'>
													<div>
														<label htmlFor='email-address' className='sr-only'>
															Email của bạn
														</label>
														<input
															id='email-address'
															name='email'
															type='email'
															autoComplete='email'
															required
															className='relative block w-full appearance-none rounded-none rounded-t-md border border-lightgrey border-opacity-40 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
															placeholder='Nhập email của bạn'
														/>
													</div>
													<div>
														<label htmlFor='phone-number' className='sr-only'>
															Số điện thoại
														</label>
														<input
															id='phone-number'
															name='phone-number'
															type='text'
															required
															className='relative block w-full appearance-none rounded-none border border-lightgrey border-opacity-40 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
															placeholder='Nhập Số điện thoại của bạn'
														/>
													</div>
													<div>
														<label htmlFor='message' className='sr-only'>
															Lời nhắn
														</label>
														<textarea
															id='message'
															name='message'
															className='relative block w-full appearance-none rounded-none rounded-b-md border border-lightgrey border-opacity-40 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
															placeholder='Nhập lời nhắn'
														/>
													</div>
												</div>

												<div>
													<button
														type='submit'
														className='group relative flex w-full justify-center rounded-md border border-transparent bg-pink py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
													>
														Gửi thông tin
													</button>
												</div>
											</form>
										</div>
									</div>

									<div className='mt-4 flex justify-end'>
										<button
											type='button'
											className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
											onClick={closeModal}
										>
											Got it, thanks!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default Contact;
