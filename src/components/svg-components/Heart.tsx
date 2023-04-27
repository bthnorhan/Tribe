import Svg, { Path } from 'react-native-svg';

export const Heart = () => {
	return (
		<Svg width={20} height={20} fill='none'>
			<Path
				stroke='#000'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth={1.558}
				d='M13.768 1.75c3.23 0 5.399 3.073 5.399 5.94 0 5.806-9.004 10.56-9.167 10.56-.163 0-9.167-4.754-9.167-10.56 0-2.867 2.17-5.94 5.398-5.94 1.854 0 3.066.938 3.769 1.763.703-.825 1.915-1.763 3.768-1.763Z'
			/>
		</Svg>
	);
};
