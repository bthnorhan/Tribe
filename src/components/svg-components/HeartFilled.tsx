import Svg, { Path } from 'react-native-svg';

interface HeartFilledProps {
	onPress?: () => void;
}

export const HeartFilled = ({ onPress }: HeartFilledProps) => {
	const onPressHandler = () => {
		onPress && onPress();
	};

	return (
		<Svg width={20} height={18} fill='none' onPress={onPressHandler}>
			<Path
				fill='#FF254C'
				d='M14.111 0C17.633 0 20 3.353 20 6.48 20 12.814 10.178 18 10 18 9.822 18 0 12.814 0 6.48 0 3.352 2.367 0 5.889 0 7.91 0 9.233 1.024 10 1.924 10.767 1.024 12.089 0 14.111 0Z'
			/>
		</Svg>
	);
};
