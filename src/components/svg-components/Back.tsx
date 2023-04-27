import Svg, { Path } from 'react-native-svg';

interface BackProps {
	onPress?: () => void;
}

export const Back = ({ onPress }: BackProps) => {
	const onPressHandler = () => {
		onPress && onPress();
	};

	return (
		<Svg width={8} height={14} fill='none' onPress={onPressHandler}>
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
