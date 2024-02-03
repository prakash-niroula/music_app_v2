import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { TamaguiProvider, Theme } from "tamagui";
import { useFonts } from "expo-font";
import config from "./tamagui.config";
import DefaultScreen from "./App/Screens/Default/DefaultScreen";
import {
  Inter_100Thin, Inter_200ExtraLight, Inter_300Light, Inter_400Regular,
  Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold, Inter_900Black
} from "@expo-google-fonts/inter";

export default function App() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === "dark" ? "dark" : "light"}>
        <DefaultScreen />
      </Theme>
    </TamaguiProvider>
  );
}