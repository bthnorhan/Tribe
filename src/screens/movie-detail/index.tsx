import React from 'react';

import { Back, Heart, Screen } from '@/components';

export const MovieDetailScreen = () => {
	return (
		<Screen leftComponent={<Back />} rightComponent={<Heart />}></Screen>
	);
};
