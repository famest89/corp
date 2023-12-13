import performanceImg from '../../../public/performance.jpg';
import Hero from '@/components/Hero';

type PageProps = {
	children?: React.ReactNode;
	// props....
};

// ?======================================================//
const PerformancePage = ({ children }: PageProps) => {
	return (
		<Hero
			imgData={performanceImg}
			imgAlt='welding'
			title='We serve high performace applications'
		/>
	);
};

export default PerformancePage;
