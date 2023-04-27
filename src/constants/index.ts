import type { ConstantsType } from '@/types';

export const Constants: ConstantsType = {
	API_URL: 'https://api.themoviedb.org/3/',
	API_KEY: '6b45df2f09d801c99e4ad3d734baacbf',
	IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',

	Colors: {
		black: '#000000',
		white: '#FFFFFF',

		primaryText: '#000000',
		secondaryText: '#6A6A6A',

		componentBackground: '#EFEFF0',

		placeholderColor: '#84848899',
	},

	FontFamilies: {
		100: 'Inter-Thin',
		200: 'Inter-ExtraLight',
		300: 'Inter-Light',
		400: 'Inter-Regular',
		500: 'Inter-Medium',
		600: 'Inter-SemiBold',
		700: 'Inter-Bold',
		800: 'Inter-ExtraBold',
		900: 'Inter-Black',
	},
};
