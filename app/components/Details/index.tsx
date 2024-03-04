'use client';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const Details = () => {
	return (
		<div id='kho-muc'>
			<div className='relative' id='kho-muc'>
				<div className='mx-auto max-w-7xl lg:pt-10 sm:pb-24 px-6'>
					{/* <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
						<Image src={'/images/Details/burger.png'} alt='burger-image' width={463} height={622} />
					</div> */}
					<div className='grid grid-cols-1 lg:grid-cols-12 space-x-5'>
						<div className='col-span-6 flex justify-start'>
							<Image src='/images/Details/kho-muc-1.jpeg' alt='Khô mực ngon' width={636} height={808} />
						</div>

						<div className='col-span-6 flex flex-col justify-center'>
							<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
								<h2 className='text-pink text-lg font-bold mb-3 ls-51 uppercase text-start'>KHÔ MỰC</h2>
							</Fade>
							<Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
								<h3 className='text-3xl lg:text-4xl font-semibold text-black text-start'>
									Khô mực thơm ngọt - Thích hợp làm quà
								</h3>
							</Fade>
							<Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
								<p className='text-grey md:text-lg font-normal text-start mt-4'>
									<b>Hải sản phơi khô</b> cung cấp sỉ và lẻ mực khô các loại, được tuyển chọn từ những con mực ngon nhất
									với tiêu chí tươi, ngon, sạch.
								</p>
								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									<b>Mực ngon</b> phải có màu hồng tự nhiên, không tanh, không dính ướt tay. Khô mực ngon khi nướng lên,
									xe ra thịt bên trong cũng hồng nhạt và dẻo, dai, không vụn. Có lớp phấn trắng phủ bên ngoài, mực càng
									tươi lớp phấn trắng sẽ càng dày. Đầu, râu và thân mực nối liền không tách rời. Khi nướng sẽ có mùi
									thơm rất hấp dẫn
								</p>
								<p className='text-grey md:text-lg font-bold text-start mt-2'>Cách chế biến và bảo quản:</p>
								<p className='text-grey md:text-lg font-normal mt-1 text-start'>
									Để khô mực được sử dụng lâu mà không mất đi vị tươi, ngon ngọt của khô mực bạn có thể bảo quản bằng
									những phương pháp sau:
								</p>
								<p className='text-grey md:text-lg font-normal mt-1 text-start'>
									- Khi mua mực khô về các bạn nên dùng ngay trong vòng 4 tháng khi mua về. Khoảng 3 hoặc 4 tuần chị em
									nên lấy chúng ra phơi nắng trong 10-15 phút (để tránh mực bị mốc, khi ăn sẽ rất độc hại).
								</p>
								<p className='text-grey md:text-lg font-normal mt-1 text-start'>
									– Không để mực khô chung với những hải sản tươi khác.
								</p>
								<p className='text-grey md:text-lg font-normal mt-1 text-start'>
									– Nướng mực bằng cồn 90 độ là ngon nhất. Khi nướng với lửa than không nên để lửa to vì sẽ cháy viền ăn
									sẽ đắng.
								</p>
								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									<b>Món phổ biến nhất với mực khô</b> đó là mực nướng, mực rim với nước mắm và tỏi ớt. Mực khô nướng
									vừa thơm, vừa ngon, lại luôn được dùng để tiếp khách.
								</p>

								{/* <div className='flex align-middle justify-center md:justify-start'>
									<button className='text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-10 mr-6'>
										Learn more
									</button>
								</div> */}
							</Fade>
						</div>
					</div>
				</div>
			</div>
			<div className='relative' id='kho-ca-com'>
				<div className='mx-auto max-w-7xl lg:pt-10 sm:pb-24 px-6'>
					{/* <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
						<Image src={'/images/Details/burger.png'} alt='burger-image' width={463} height={622} />
					</div> */}
					<div className='grid grid-cols-1 lg:grid-cols-12 space-x-5'>
						<div className='col-span-6 flex flex-col justify-center'>
							<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
								<h2 className='text-pink text-lg font-bold mb-3 ls-51 uppercase text-start'>KHÔ CÁ CƠM</h2>
							</Fade>
							<Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
								<h3 className='text-3xl lg:text-4xl font-semibold text-black text-start'>
									Khô cá cơm - Cá cơm rim với mắm và tỏi ớt
								</h3>
							</Fade>
							<Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
								<p className='text-grey md:text-lg font-normal text-start mt-4'>
									<b>Cá cơm</b> mới đánh bắt lên còn sống người ta lựa những con to, sau đó bỏ đầu, xẻ cá ra làm sạch
									màn ruột, bỏ xương cho kỹ, rửa sạch bằng nước biển, sau đó rửa lại lần nữa bằng nước lạnh có pha chút
									rượu, rồi rửa sơ qua bằng nước lạnh lần nữa, để ráo rồi xếp lần giàn phơi dưới nắng trời to, chiều tắt
									nắng thu hoạch cá cơm phơi thành phẩm xếp vào túi nhựa, sau đó bảo quản ngăn đông tủ lạnh.
								</p>

								<p className='text-grey md:text-lg font-bold text-start mt-2'>Chế biến món ăn cá cơm khô một nắng:</p>
								<p className='text-grey md:text-lg font-normal mt-1 text-start'>
									Cá cơm một nắng là một món ăn đơn giản nhưng khá thú vị. Người ta thường biến tấu thành nhiều món khác
									nhau, tùy theo sở thích và khẩu vị. Đơn giản nhất là cách rán giòn. Cho cá cơm một nắng vào thau nước
									lọc, dùng tay khuấy đều để cá được sạch. Sả lột bỏ lớp vỏ ngoài, thái nhỏ. Đun nóng dầu ăn, đổ cá cơm,
									sả vào xào. Nêm vào một thìa nước mắm, đường vừa ăn. Dùng đũa đảo đều cá.
								</p>
								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									Với nguồn cá khô qua tuyển chọn kĩ lưỡng cũng như đảm bảo chất lượng tốt nhất tới tay người tiêu dùng,
									khách hàng có thể yên tâm đặt hàng tại <b>Hải Sản Phơi Khô</b> và thưởng thức nhé.
								</p>

								{/* <div className='flex align-middle justify-center md:justify-start'>
									<button className='text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-10 mr-6'>
										Learn more
									</button>
								</div> */}
							</Fade>
						</div>
						<div className='col-span-6 flex justify-start'>
							<Image
								src='/images/Details/kho-ca-com-1.jpg'
								alt='Khô cá cơm một nắng ngon'
								width={636}
								height={808}
								className='object-center'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='relative' id='kho-ca-du'>
				<div className='mx-auto max-w-7xl lg:pt-10 sm:pb-24 px-6'>
					{/* <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
						<Image src={'/images/Details/burger.png'} alt='burger-image' width={463} height={622} />
					</div> */}
					<div className='grid grid-cols-1 lg:grid-cols-12 space-x-5'>
						<div className='col-span-6 flex justify-start'>
							<Image src='/images/Details/kho-ca-du-1.jpg' alt='Khô cá đù 1 nắng ngon' width={636} height={808} />
						</div>

						<div className='col-span-6 flex flex-col justify-center'>
							<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
								<h2 className='text-pink text-lg font-bold mb-3 ls-51 uppercase text-start'>KHÔ CÁ ĐÙ</h2>
							</Fade>
							<Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
								<h3 className='text-3xl lg:text-4xl font-semibold text-black text-start'>
									Khô cá đù một nắng - Đặc sản xứ nẫu Bình Định
								</h3>
							</Fade>
							<Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
								<p className='text-grey md:text-lg font-normal text-start mt-4'>
									<b>Cá đù</b> là loài cá thân hình thuôn nhỏ, thịt nhiều, trắng thịt và thường dùng để kho. Tất nhiên,
									có thể chế biến theo nhiều cách khác nhau như nướng, chiên, trộn gỏi… Nhưng kho với mỡ hành, ba chỉ
									thì rất trôi cơm vào mùa lạnh hay mùa mưa. Chỉ phơi 1 nắng nhưng phải được nắng to, đủ nhiệt thì con
									cá rất ngon. Khi ăn thịt dai như khô mực và đậm đà. Đó chính là hương vị của
									<b> Cá đù một nắng Bình Định.</b>
								</p>
								<p className='text-grey md:text-lg font-bold text-start mt-2'>Cách chế biến và bảo quản:</p>
								<p className='text-grey md:text-lg font-normal mt-1 text-start'>
									Có 2 cách ăn <b>Cá đù 1 nắng</b> ngon, đó là chiên và kho. Chiên thì phải để nhỏ lửa, chiên giòn thì
									cá dậy mùi thơm, có vị béo, dai và ngọt từ cá tươi đem phơi. Có thể chấm với tương ớt (đối với cá chưa
									tẩm gia vị). Cũng có thể chiên loại chưa tẩm gia vị xong, áo qua với tương ớt và tỏi, đường sẽ có món
									Cá đù 1 nắng chiên vô cùng thấm tháp. Đối với loại đã tẩm ướp thì chỉ cần chiên vàng, giòn là ăn ngay
									được.
								</p>
								<p className='text-grey md:text-lg font-normal mt-2 text-start'>
									Nếu muốn kho thì cũng kho như cá tươi, phải có đầy đủ gia vị như đường, mắm, tỏi, ớt bằm nhuyễn, nước
									màu, bột ngọt, hành… thì cá mới thấm và ngon
								</p>

								{/* <div className='flex align-middle justify-center md:justify-start'>
									<button className='text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-10 mr-6'>
										Learn more
									</button>
								</div> */}
							</Fade>
						</div>
					</div>
				</div>
			</div>
			<div className='relative' id='tom-kho'>
				<div className='mx-auto max-w-7xl lg:pt-10 sm:pb-24 px-6'>
					{/* <div className='absolute right-0 bottom-[-18%] hidden lg:block'>
						<Image src={'/images/Details/burger.png'} alt='burger-image' width={463} height={622} />
					</div> */}
					<div className='grid grid-cols-1 lg:grid-cols-12 space-x-5'>
						<div className='col-span-6 flex flex-col justify-center'>
							<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
								<h2 className='text-pink text-lg font-bold mb-3 ls-51 uppercase text-start'>Tôm Khô</h2>
							</Fade>
							<Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
								<h3 className='text-3xl lg:text-4xl font-semibold text-black text-start'>
									Tôm khô Bình Định - Đặc sản không thể thiếu của vùng đất biển
								</h3>
							</Fade>
							<Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
								<p className='text-grey md:text-lg font-normal text-start mt-4'>
									<b>Tôm khô</b> là một đặc sản mà nhiều người biết đến, không chỉ người Việt ở trong nước mà người nước
									ngoài rất chuộng tôm khô khi chọn đặc sản làm quà biếu khi đặt chận đến Bình Định, trong những dịp về
									Việt Nam chơi hoặc lễ, Tết; lý do đơn giản tôm khô phổ biến là vì thành phần dinh dưỡng trong tôm khô
									và đặc tính tôm khô là để lâu nhưng vẫn giữ được độ ngon cần thiết.
								</p>

								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									Các món ngon được chế biến từ <b>Tôm khô:</b> Gỏi tôm khô, Canh rau tôm khô, Tôm khô kho quẹt
								</p>

								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									Ngoài ra, <b>Tôm khô</b> còn thích hợp để làm quà biếu và đồ nhắm ngon.
								</p>

								{/* <div className='flex align-middle justify-center md:justify-start'>
									<button className='text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-10 mr-6'>
										Learn more
									</button>
								</div> */}
							</Fade>
						</div>
						<div className='col-span-6 flex justify-start'>
							<Image
								src='/images/Details/tom-kho-1.jpg'
								alt='Tôm khô ngon'
								width={636}
								height={808}
								className='object-center'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
