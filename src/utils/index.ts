import type { AnyAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { Constants } from '@/constants';

export const isPendingAction = (action: AnyAction) => {
	return action.type.endsWith('pending');
};

export const isFulfilledAction = (action: AnyAction) => {
	return action.type.endsWith('fulfilled');
};

export const isRejectedAction = (action: AnyAction) => {
	return action.type.endsWith('rejected');
};

// Return requested font family, if not found return regular font weight family
export const getFontFamily = (fontWeight = 400) =>
	Constants.FontFamilies[fontWeight] ?? Constants.FontFamilies[400];

// Check array include the spesific value for key
export const isArrayIncludeKeyValue = <T, K>(
	array: Array<T>,
	key: keyof T,
	value: K,
) => _.findIndex(array, [key, value]) !== -1;
