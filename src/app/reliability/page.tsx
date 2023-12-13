import reliabilityImg from '../../../public/reliability.jpg';
import Hero from '@/components/Hero';

type PageProps = {
	children?: React.ReactNode;
	// props....
};

// ?======================================================//
const ReliabilityPage = ({ children }: PageProps) => {
	return (
		<Hero
			imgData={reliabilityImg}
			imgAlt='welding'
			title='Super high reliability hosting'
		/>
	);
};

export default ReliabilityPage;
