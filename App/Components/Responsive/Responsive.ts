import { Dimensions, Platform, PixelRatio } from 'react-native'

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

export const scaleFactorX = SCREEN_WIDTH / 360
export const scaleFactorY = SCREEN_HEIGHT / 706

const scaleWtFct = (pxSize: number, scaleFactor: number) => {
  const newSize = pxSize * scaleFactor
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1
  }
}

export const scaleX = (pxSize: number) => scaleWtFct(pxSize, scaleFactorX)
export const scaleY = (pxSize: number) => scaleWtFct(pxSize, scaleFactorY)