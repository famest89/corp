import performanceImg from '../../../public/performance.jpg';
import Hero from '@/components/Hero';

// ?======================================================//
const PerformancePage = () => {
	return (
		<Hero
			imgData={performanceImg}
			imgAlt='welding'
			title='We serve high performace applications'
		/>
	);
};

export default PerformancePage;
