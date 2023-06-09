import Svg, { Path } from 'react-native-svg';

export const Back = () => {
	return (
		<Svg width={8} height={14} fill='none'>
			<Path
				stroke='#000'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={1.7}
				d='M7 13 1 7l6-6'
			/>
		</Svg>
	);
};
