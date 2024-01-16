import { FC } from "react";
import { View, Text } from "tamagui";


export const GetStarted: FC = () => {
  return (
    <View 
      width='100%' height='100%' flexDirection="column" justifyContent="center"
      alignItems="center"
    >
      <Text color={'#000'}>TamaGUI ready to go</Text>
    </View>
  );
}

export default GetStarted