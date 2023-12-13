import Link from 'next/link';

type PageProps = {
	children?: React.ReactNode;
	// props....
};

// ?======================================================//
const Header = ({ children }: PageProps) => {
	return (
		<div className='w-full absolute text-white z-10'>
			<nav className='containr relative flex flex-wrap items-center justify-between mx-auto p-8'>
				<Link href='/' className='font-bond text-3xl'>
					Home
				</Link>
				<div className='space-x-4 text-xl'>
					<Link href='/performance'>Performance</Link>
					<Link href='/reliability'>Reliability</Link>
					<Link href='/scale'>Scale</Link>
				</div>
			</nav>
		</div>
	);
};

export default Header;
