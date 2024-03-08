import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

type Error = {
	email: { isError: boolean; message: string };
	phone: { isError: boolean; message: string };
};

const Contact = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState<Error>({ email: { isError: false, message: '' }, phone: { isError: false, message: '' } });

	const closeModal = () => {
		setIsOpen(false);
	};

	const reset = () => {
		setEmail('');
		setName('');
		setPhone('');
		setMessage('');
		setError({ email: { isError: false, message: '' }, phone: { isError: false, message: '' } });
	};

	const handleSubmit = () => {
		const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const regexPhone = /(03|08|09)+([0-9]{8})\b/;
		let canSubmit = true;

		if (!email) {
			setError((prev) => ({ ...prev, email: { isError: true, message: 'Vui lòng nhập Email của bạn!' } }));
			canSubmit = false;
		} else if (!regexEmail.test(email)) {
			setError((prev) => ({ ...prev, email: { isError: true, message: 'Vui lòng nhập đúng Email của bạn!' } }));
			canSubmit = false;
		} else {
			setError((prev) => ({ ...prev, email: { isError: false, message: '' } }));
			canSubmit = true;
		}

		if (!phone) {
			setError((prev) => ({ ...prev, phone: { isError: true, message: 'Vui lòng nhập SĐT của bạn!' } }));
			canSubmit = false;
		} else if (!regexPhone.test(phone)) {
			setError((prev) => ({ ...prev, phone: { isError: true, message: 'Vui lòng nhập đúng SĐT của bạn!' } }));
			canSubmit = false;
		} else {
			setError((prev) => ({ ...prev, phone: { isError: false, message: '' } }));
			canSubmit = true;
		}

		if (canSubmit) {
			emailjs.send('service_r7r0wpy', 'template_w4tc9c9', { email, name, phone, message }, 'l5MT3ZE5YgFTXD7Dv').then(
				(result) => {
					closeModal();
				},
				(error) => {
					console.log(error.text);
				}
			);
		}
	};

	useEffect(() => {
		reset();
	}, [isOpen]);

	return (
		<>
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
													<Image src='/images/Logo/logo.png' alt='logo' width={60} height={60} />
													<p className='text-2xl font-semibold text-black ml-4'>Hải Sản Phơi Khô</p>
												</div>
												<h4 className='mt-10 text-center text-xl font-bold tracking-tight text-lightgrey'>
													Vui lòng liên hệ với chúng tôi để biết thêm thông tin về các sản phẩm!
												</h4>
											</div>
											<div className='mt-8 space-y-6'>
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
															value={email}
															onChange={(e) => setEmail(e.target.value)}
														/>
													</div>
													<div>
														<label htmlFor='name' className='sr-only'>
															Tên của bạn
														</label>
														<input
															id='name'
															name='name'
															type='text'
															className='relative block w-full appearance-none rounded-none border border-lightgrey border-opacity-40 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
															placeholder='Nhập tên của bạn'
															value={name}
															onChange={(e) => setName(e.target.value)}
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
															placeholder='Nhập số điện thoại của bạn'
															value={phone}
															onChange={(e) => setPhone(e.target.value)}
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
															value={message}
															onChange={(e) => setMessage(e.target.value)}
														/>
													</div>
												</div>

												<div>
													<button
														onClick={handleSubmit}
														className='group relative flex w-full justify-center rounded-md border border-transparent bg-pink py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
													>
														Gửi thông tin
													</button>
												</div>

												<div>
													{error.email.isError && <div className='text-error text-xs'>{error.email.message}</div>}
													{error.phone.isError && <div className='text-error text-xs'>{error.phone.message}</div>}
												</div>
											</div>
											<div className='mt-8 flex justify-end w-full items-center'>
												<a className='text-sm font-medium hover:underline' href='tel:0931888357'>
													Gọi ngay: 0931 888 357
												</a>
											</div>
										</div>
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
