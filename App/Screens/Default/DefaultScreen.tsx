import { FC } from "react";
import { View, Text } from "react-native";
import GetStarted from "../GetStarted/GetStarted";
import ConfigureConnect from "../Configure/ConfigureConnect";

export const DefaultScreen: FC = () => {
  return (
    <ConfigureConnect platform="Spotify"/>
  );
}

export default DefaultScreen