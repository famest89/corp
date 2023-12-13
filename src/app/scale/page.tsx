import scaleImg from '../../../public/scale.jpg';
import Hero from '@/components/Hero';

type PageProps = {
	children?: React.ReactNode;
	// props....
};

// ?======================================================//
const ScalePage = ({ children }: PageProps) => {
	return (
		<Hero
			imgData={scaleImg}
			imgAlt='steel factory'
			title='Scale your app to infinity'
		/>
	);
};

export default ScalePage;
