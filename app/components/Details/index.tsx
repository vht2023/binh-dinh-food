'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const Details = () => {
	return (
		<div id='kho-muc'>
			<div className='relative' id='kho-muc'>
				<div className='mx-auto max-w-7xl lg:pt-10 pb-24 px-6'>
					<div className='grid grid-cols-1 lg:grid-cols-12 lg:space-x-5'>
						<div className='col-span-6 flex justify-start'>
							<Image src='/images/Details/kho-muc-1.jpeg' alt='Khô mực ngon' width={636} height={808} />
						</div>

						<div className='col-span-6 flex flex-col justify-start'>
							<Fade direction={'up'} delay={200} cascade damping={1e-1} triggerOnce={true}>
								<h2 className='text-pink text-lg font-bold mb-3 mt-3 ls-51 uppercase text-start'>KHÔ MỰC</h2>
							</Fade>
							<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
								<h3 className='text-3xl lg:text-4xl font-semibold text-black text-start'>Khô mực thơm ngọt - Thích hợp làm quà</h3>
							</Fade>
							<Fade direction={'up'} delay={600} cascade damping={1e-1} triggerOnce={true}>
								<p className='text-grey md:text-lg font-normal text-start mt-4'>
									<b>Hải sản phơi khô</b> cung cấp sỉ và lẻ mực khô các loại, được tuyển chọn từ những con mực ngon nhất với tiêu chí tươi, ngon, sạch.
								</p>
								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									<b>Mực ngon</b> phải có màu hồng tự nhiên, không tanh, không dính ướt tay. Khô mực ngon khi nướng lên, xe ra thịt bên trong cũng hồng nhạt và dẻo, dai, không vụn.
									Có lớp phấn trắng phủ bên ngoài, mực càng tươi lớp phấn trắng sẽ càng dày. Đầu, râu và thân mực nối liền không tách rời. Khi nướng sẽ có mùi thơm rất hấp dẫn
								</p>
								<p className='text-grey md:text-lg font-bold text-start mt-2'>Cách chế biến và bảo quản:</p>
								<p className='text-grey md:text-lg font-normal mt-1 text-start'>
									Để khô mực được sử dụng lâu mà không mất đi vị tươi, ngon ngọt của khô mực bạn có thể bảo quản bằng những phương pháp sau:
								</p>
								<p className='text-grey md:text-lg font-normal mt-1 text-start'>
									- Khi mua mực khô về các bạn nên dùng ngay trong vòng 4 tháng khi mua về. Khoảng 3 hoặc 4 tuần chị em nên lấy chúng ra phơi nắng trong 10-15 phút (để tránh mực bị
									mốc, khi ăn sẽ rất độc hại).
								</p>
								<p className='text-grey md:text-lg font-normal mt-1 text-start'>– Không để mực khô chung với những hải sản tươi khác.</p>
								<p className='text-grey md:text-lg font-normal mt-1 text-start'>
									– Nướng mực bằng cồn 90 độ là ngon nhất. Khi nướng với lửa than không nên để lửa to vì sẽ cháy viền ăn sẽ đắng.
								</p>
								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									<b>Món phổ biến nhất với mực khô</b> đó là mực nướng, mực rim với nước mắm và tỏi ớt. Mực khô nướng vừa thơm, vừa ngon, lại luôn được dùng để tiếp khách.
								</p>

								<button className='sm:text-xl text-lg w-full sm:w-auto font-medium rounded-full text-white sm:py-4 sm:px-5 px-4 py-2 bg-pink lg:px-10 mr-6 hover:bg-[#c25947] mt-4'>
									<a href='tel:0931888357'>Liên hệ đặt mua ngay</a>
								</button>
							</Fade>
						</div>
					</div>
				</div>
			</div>
			<div className='relative' id='kho-ca-com'>
				<div className='mx-auto max-w-7xl lg:pt-10 pb-24 px-6'>
					<div className='grid grid-cols-1 lg:grid-cols-12 lg:space-x-5'>
						<div className='lg:hidden col-span-6 flex justify-start mt-3'>
							<Image src='/images/Details/kho-ca-com-1.jpg' alt='Khô cá cơm một nắng ngon' width={636} height={808} className='object-center' />
						</div>
						<div className='col-span-6 flex flex-col justify-start'>
							<Fade direction={'up'} delay={200} cascade damping={1e-1} triggerOnce={true}>
								<h2 className='text-pink text-lg font-bold mb-3 ls-51 uppercase text-start mt-3'>KHÔ CÁ CƠM</h2>
							</Fade>
							<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
								<h3 className='text-3xl lg:text-4xl font-semibold text-black text-start'>Khô cá cơm - Cá cơm rim với mắm và tỏi ớt</h3>
							</Fade>
							<Fade direction={'up'} delay={600} cascade damping={1e-1} triggerOnce={true}>
								<p className='text-grey md:text-lg font-normal text-start mt-4'>
									<b>Cá cơm</b> mới đánh bắt lên còn sống người ta lựa những con to, sau đó bỏ đầu, xẻ cá ra làm sạch màn ruột, bỏ xương cho kỹ, rửa sạch bằng nước biển, sau đó rửa
									lại lần nữa bằng nước lạnh có pha chút rượu, rồi rửa sơ qua bằng nước lạnh lần nữa, để ráo rồi xếp lần giàn phơi dưới nắng trời to, chiều tắt nắng thu hoạch cá
									cơm phơi thành phẩm xếp vào túi nhựa, sau đó bảo quản ngăn đông tủ lạnh.
								</p>

								<p className='text-grey md:text-lg font-bold text-start mt-2'>Chế biến món ăn cá cơm khô một nắng:</p>

								<p className='text-grey md:text-lg font-normal mt-1 text-start'>
									Cá cơm một nắng là một món ăn đơn giản nhưng khá thú vị. Người ta thường biến tấu thành nhiều món khác nhau, tùy theo sở thích và khẩu vị. Đơn giản nhất là cách
									rán giòn. Cho cá cơm một nắng vào thau nước lọc, dùng tay khuấy đều để cá được sạch. Sả lột bỏ lớp vỏ ngoài, thái nhỏ. Đun nóng dầu ăn, đổ cá cơm, sả vào xào. Nêm
									vào một thìa nước mắm, đường vừa ăn. Dùng đũa đảo đều cá.
								</p>

								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									Với nguồn cá khô qua tuyển chọn kĩ lưỡng cũng như đảm bảo chất lượng tốt nhất tới tay người tiêu dùng, khách hàng có thể yên tâm đặt hàng tại{' '}
									<b>Hải Sản Phơi Khô</b> và thưởng thức nhé.
								</p>

								<button className='sm:text-xl text-lg w-full sm:w-auto font-medium rounded-full text-white sm:py-4 sm:px-5 px-4 py-2 bg-pink lg:px-10 mr-6 hover:bg-[#c25947] mt-4'>
									<a href='tel:0931888357'>Liên hệ đặt mua ngay</a>
								</button>
							</Fade>
						</div>
						<div className='col-span-6 hidden lg:flex justify-start mt-3'>
							<Image src='/images/Details/kho-ca-com-1.jpg' alt='Khô cá cơm một nắng ngon' width={636} height={808} className='object-center' />
						</div>
					</div>
				</div>
			</div>
			<div className='relative' id='cha-ram-tom'>
				<div className='mx-auto max-w-7xl lg:pt-10 pb-24 px-6'>
					<div className='grid grid-cols-1 lg:grid-cols-12 lg:space-x-5'>
						<div className='col-span-6 flex justify-start mt-6 md:mt-0'>
							<Image src='/images/Details/cha-ram-tom-3.jpg' alt='Chả ram tôm đất Bình Định ngon' width={636} height={808} />
						</div>

						<div className='col-span-6 flex flex-col justify-start'>
							<Fade direction={'up'} delay={200} cascade damping={1e-1} triggerOnce={true}>
								<h2 className='text-pink text-lg font-bold mb-3 ls-51 uppercase text-start'>CHẢ RAM TÔM ĐẤT</h2>
							</Fade>
							<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
								<h3 className='text-3xl lg:text-4xl font-semibold text-black text-start'>Chả ram tôm đất - Đặc sản xứ nẫu Bình Định</h3>
							</Fade>
							<Fade direction={'up'} delay={600} cascade damping={1e-1} triggerOnce={true}>
								<p className='text-grey md:text-lg font-normal text-start mt-4'>
									<b>Chả ram tôm đất Bình Định</b> là đặc sản vô cùng thơm ngon của {`"mảnh đất võ"`}. Chả được làm từ hai loại nguyên liệu chính là chả giò xay nhuyễn và tôm đất.
									Khi ăn vừa có vị thơm ngon đặc trưng của hải sản, vừa có vị ngậy đến từ thịt heo. Đây được coi như là một món quà mà bất cứ thực khách nào khi đến tham quan vùng
									đất này đều muốn thưởng thức và mang về làm quà.
								</p>

								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									Miếng <b>chả ram tôm đất Bình Định</b>, khi chiên lên giòn tan do lớp bánh tráng mỏng cuốn bên ngoài, bên trong là thịt tôm mọng nước, đậm vị mùi tôm, ngậy ngậy
									của thịt heo, làm cho thực khách ăn hoài mà vẫn không biết ngán. Hương vị hấp dẫn, cuốn hút khiến thực khách đặc biệt nghiện, lúc nào cũng mua thêm chả ram tôm
									đất này về nhà để dành thưởng thức.
								</p>

								<p className='text-grey md:text-lg font-normal mt-1 text-start'>
									<b>Chả ram tôm đất Bình Định</b> không chỉ là một món ăn truyền thống, mà còn là một biểu tượng ẩm thực của Bình Định. Hương vị độc đáo của tôm đất kết hợp với vỏ
									giòn và mùi thơm của chả ram tạo nên một trải nghiệm ẩm thực độc đáo và khó quên. Bạn có thể thưởng thức sản phẩm với các cách chế biến sau: Chả ram cuốn bánh
									cuốn thịt, Chả ram ăn với bún, Chả ram cuốn rau xanh thơm ngon, Khai vị chả ram, Chả ram ăn cùng với cơm,...
								</p>

								<button className='sm:text-xl text-lg w-full sm:w-auto font-medium rounded-full text-white sm:py-4 sm:px-5 px-4 py-2 bg-pink lg:px-10 mr-6 hover:bg-[#c25947] mt-4'>
									<a href='tel:0931888357'>Liên hệ đặt mua ngay</a>
								</button>
							</Fade>
						</div>
					</div>
				</div>
			</div>
			<div className='relative' id='nuoc-mam-nhi'>
				<div className='mx-auto max-w-7xl lg:pt-10 pb-24 px-6'>
					<div className='grid grid-cols-1 lg:grid-cols-12 lg:space-x-5'>
						<div className='lg:hidden col-span-6 flex justify-start mt-3'>
							<Image src='/images/Details/nuoc-mam-1.jfif' alt='Nước mắm nhỉ truyền thống Bình Định ngon' width={636} height={808} className='object-center' />
						</div>
						<div className='col-span-6 flex flex-col justify-start'>
							<Fade direction={'up'} delay={200} cascade damping={1e-1} triggerOnce={true}>
								<h2 className='text-pink text-lg font-bold mb-3 ls-51 uppercase text-start mt-3'>Nước mắm nhỉ</h2>
							</Fade>
							<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
								<h3 className='text-3xl lg:text-4xl font-semibold text-black text-start'>
									Nước mắm nhỉ truyền thống Bình Định - Gia vị không thể thiếu trong mọi bữa ăn của vùng đất biển
								</h3>
							</Fade>
							<Fade direction={'up'} delay={600} cascade damping={1e-1} triggerOnce={true}>
								<p className='text-grey md:text-lg font-normal text-start mt-4'>
									Thủ phủ làng nghề làm nước mắm truyền thống ở Hoài Nhơn, Bình Định. Làng nghề nước mắm ngày càng được nhân rộng ra Tam Quan Bắc, Tam Quan Nam, Hoài Thanh, Hoài
									Hương… Tất cả được gói gọn lại thành cái tên quen thuộc <b>“Nước mắm Tam Quan”</b>.
								</p>

								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									<b>Nước mắm Tam Quan Bình Định</b> nổi tiếng với mùi vị thơm ngon, đậm đà khác biệt mà ít nơi nào có được. Nước mắm hoàn toàn được chưng cất thủ công, không hóa
									chất. Đặc biệt nước mắm này dù để khá lâu nhưng nếu đậy kỹ nắp sau mỗi lần sử dụng thì đến cuối chai, nước mắm vẫn không bị chuyển sang màu đen và vị vẫn thơm
									ngon.
								</p>
								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									<b>Nước mắm Tam Quan Bình Định</b> còn rất thích hợp để nấu ăn. Khi nấu ăn, nêm nếm bằng nước mắm Tam Quan sẽ làm món ăn ngon hơn so với các loại nước mắm khác
									phổ biến trên thị trường.
								</p>

								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									<b>Bảo quản:</b> nơi thoáng mát, tránh ánh nắng trực tiếp.
								</p>

								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									<b>Sử dụng:</b> Dùng trực tiếp, giã mắm với tỏi ớt chanh và các gia vị khác (gừng, sả, lá chanh...) để làm món nước chấm cho từng món ăn đặc trưng, dùng làm gia
									vị nêm nếm các món ăn.
								</p>

								<button className='sm:text-xl text-lg w-full sm:w-auto font-medium rounded-full text-white sm:py-4 sm:px-5 px-4 py-2 bg-pink lg:px-10 mr-6 hover:bg-[#c25947] mt-4'>
									<a href='tel:0931888357'>Liên hệ đặt mua ngay</a>
								</button>
							</Fade>
						</div>
						<div className='col-span-6 hidden lg:flex justify-start mt-3'>
							<Image src='/images/Details/nuoc-mam-1.jfif' alt='Nước mắm nhỉ truyền thống Bình Định ngon' width={636} height={808} className='object-center' />
						</div>
					</div>
				</div>
			</div>
			{/* <div className='relative' id='tom-kho'>
				<div className='mx-auto max-w-7xl lg:pt-10 pb-24 px-6'>
					<div className='grid grid-cols-1 lg:grid-cols-12 sm:space-x-5'>
						<div className='col-span-6 flex flex-col justify-center'>
							<Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
								<h2 className='text-pink text-lg font-bold mb-3 ls-51 uppercase text-start'>Tôm Khô</h2>
							</Fade>
							<Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
								<h3 className='text-3xl lg:text-4xl font-semibold text-black text-start'>Tôm khô Bình Định - Đặc sản không thể thiếu của vùng đất biển</h3>
							</Fade>
							<Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
								<p className='text-grey md:text-lg font-normal text-start mt-4'>
									<b>Tôm khô</b> là một đặc sản mà nhiều người biết đến, không chỉ người Việt ở trong nước mà người nước ngoài rất chuộng tôm khô khi chọn đặc sản làm quà biếu khi
									đặt chận đến Bình Định, trong những dịp về Việt Nam chơi hoặc lễ, Tết; lý do đơn giản tôm khô phổ biến là vì thành phần dinh dưỡng trong tôm khô và đặc tính tôm
									khô là để lâu nhưng vẫn giữ được độ ngon cần thiết.
								</p>

								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									Các món ngon được chế biến từ <b>Tôm khô:</b> Gỏi tôm khô, Canh rau tôm khô, Tôm khô kho quẹt
								</p>

								<p className='text-grey md:text-lg font-normal text-start mt-2'>
									Ngoài ra, <b>Tôm khô</b> còn thích hợp để làm quà biếu và đồ nhắm ngon.
								</p>
							</Fade>
						</div>
						<div className='col-span-6 flex justify-start mt-3'>
							<Image src='/images/Details/tom-kho-1.jpg' alt='Tôm khô ngon' width={636} height={808} className='object-center' />
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Details;
