// some helpful reset styles for web:

import { TamaguiProvider, createTamagui } from 'tamagui'
// some nice defaults:

import { config } from '@tamagui/config';
import DefaultScreen from './App/DefaultScreen';
// you usually export this from a tamagui.config.ts file:

// this can be as simple as an empty object

const tamaguiConfig = createTamagui(config)
// this makes typescript properly type everything based on the config

type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

const App = () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <DefaultScreen />
    </TamaguiProvider>
  )
}

export default App;