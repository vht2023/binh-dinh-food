import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer';

export const metadata = {
	title: 'Hải Sản Phơi Khô - Đặc Sản Bình Định',
	description: 'Hải Sản Phơi Khô Đặc Sản 77 Bình Định',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
