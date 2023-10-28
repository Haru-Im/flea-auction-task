import { Dimensions } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export const scaleSize = (size: number) => {
  if (SCREEN_HEIGHT < 680) {
    return Math.floor(size * 0.7);
  }
  if (SCREEN_HEIGHT < 860) {
    return Math.floor(size * 0.9);
  }

  return size;
};
