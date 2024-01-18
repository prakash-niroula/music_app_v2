import { FC } from "react";
import { View, Text, ButtonIcon, Button, ButtonText, useMedia } from "tamagui";

import SpotifySvg from '@/assets/svgs/spotify.svg';
import YoutubeSvg from '@/assets/svgs/youtube.svg'
import { Colors } from "@/App/Components/Colors/Colors";
import { scaleX, scaleY } from "../Responsive/Responsive";

export const GetStarted: FC = () => {
  const media = useMedia();

  return (
    <View
      w='100%' h='100%' fd='column' jc='center' px={scaleX(25)} mt={scaleX(30)}
    >
      <View>
        <Text
          fos={scaleX(40)} ls={-1} fow='bold' ff={'$heading'} col={Colors.black_main}
        >
          Get Started.
        </Text>
      </View>
      <View mt={scaleX(30)}>
        <Button
          w='100%' br={5} h={scaleX(50)} bg={Colors.grey_rect}
        >
          <ButtonIcon>
            <SpotifySvg color={Colors.green_spotify} width={scaleX(24)} height={scaleX(24)} />
          </ButtonIcon>
          <View h='100%' jc='center'>
            <Text
              ff='$body' fos={scaleX(18)} ls={-.5} col={Colors.grey_main}
            >
              Connect with Spotify
            </Text>
          </View>
        </Button>
        <Button
          w='100%' br={5} h={scaleX(50)} mt={scaleX(10)} bg={Colors.grey_rect}
        >
          <ButtonIcon>
            <YoutubeSvg color={Colors.red_youtube} width={scaleX(25)} height={scaleX(25)} />
          </ButtonIcon>
          <View h='100%' jc='center'>
            <Text
              ff='$body' fos={scaleX(18)} ls={-.5} col={Colors.grey_main}
            >
              Connect with Youtube
            </Text>
          </View>
        </Button>
        <View
          fd='row' ai='center' mt={scaleX(8)}
        >
          <View fg={1} h={1} bg={Colors.grey_tertiary} mt={scaleX(3)}></View>
          <Text px={5} fos={scaleX(18)} ls={-.5} col={Colors.grey_secondary}>or</Text>
          <View fg={1} h={1} bg={Colors.grey_tertiary} mt={scaleX(3)}></View>
        </View>
        <Button
          w='100%' br={5} h={scaleX(50)} mt={scaleX(8)} bg={Colors.blue_main}
        >
          <View h='100%' jc='center'>
            <Text
              ff='$body' fos={scaleX(18)} ls={-.5} col='white'
            >
              Connect as Guest
            </Text>
          </View>
        </Button>
      </View>
    </View>
  );
}

export default GetStarted