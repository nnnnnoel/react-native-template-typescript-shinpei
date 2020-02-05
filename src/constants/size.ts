import { Dimensions } from 'react-native';

export const BaseWidth = 375;
export const BaseHeight = 846;

export const { width, height } = Dimensions.get('window');
export const widthAsHeight = width;

export const getWidth = (size: number | string) => Number(size) * (width / BaseWidth);
export const getHeight = (size: number | string) => Number(size) * (height / BaseHeight);
