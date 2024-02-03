import { createInterFont } from '@tamagui/font-inter';
import { createMedia } from '@tamagui/react-native-media-driver';
import { shorthands } from '@tamagui/shorthands';
import { config as DefaultConfig } from '@tamagui/config';
import { createTamagui } from 'tamagui';
import { createAnimations } from '@tamagui/animations-react-native';
import { scaleX, scaleY } from './App/Components/Responsive/Responsive';

const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  }
});
const headingFont = createInterFont({
  face: {
    normal: {
      normal: 'Inter'
    },
    bold: {
      normal: 'InterBold'
    }
  }
});
const bodyFont = createInterFont({
  face: {
    normal: {
      normal: 'InterRegular'
    }
  }
});

const config = createTamagui({
  ...DefaultConfig,
  animations,
  defaultTheme: 'dark',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands: {
    ...shorthands,
    sp: 'space',
    sd: 'spaceDirection'
  } as const,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  media: createMedia({
    xs: { maxWidth: scaleX(660) },
    sm: { maxWidth: scaleX(800) },
    md: { maxWidth: scaleX(1020) },
    lg: { maxWidth: scaleX(1280) },
    xl: { maxWidth: scaleX(1420) },
    xxl: { maxWidth: scaleX(1600) },
    gtXs: { minWidth: scaleX(660 + 1) },
    gtSm: { minWidth: scaleX(800 + 1) },
    gtMd: { minWidth: scaleX(1020 + 1) },
    gtLg: { minWidth: scaleX(1280 + 1) },
    short: { maxWidth: scaleY(820) },
    tall: { minWidth: scaleY(820) },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  })
});

export type AppConfig = typeof config;

declare module 'tamagui' {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;