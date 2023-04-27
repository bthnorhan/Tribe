import Svg, { Path } from 'react-native-svg';
export const Spark = () => (
	<Svg width={20} height={20} fill='none'>
		<Path
			stroke='#000'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.558}
			d='M3.125 19.167v-4.584m0-9.166V.833M.833 3.125h4.584M.833 16.875h4.584m5.5-15.125-1.59 4.133c-.259.672-.388 1.008-.589 1.291a2.75 2.75 0 0 1-.647.648c-.283.2-.62.33-1.291.588L2.667 10 6.8 11.59c.672.258 1.008.387 1.29.588.251.179.47.397.648.648.201.283.33.619.589 1.29l1.59 4.134 1.59-4.133c.258-.672.387-1.008.588-1.291.178-.25.397-.47.648-.648.282-.2.618-.33 1.29-.588L19.168 10l-4.134-1.59c-.672-.258-1.008-.387-1.29-.588a2.748 2.748 0 0 1-.648-.648c-.2-.283-.33-.619-.589-1.29l-1.59-4.134Z'
		/>
	</Svg>
);