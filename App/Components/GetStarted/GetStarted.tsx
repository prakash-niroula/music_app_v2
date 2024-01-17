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
      w='100%' h='100%' fd='column' jc='center' px={scaleX(25)} mt={scaleY(25)}
    >
      <View $gtSm={{ ai: 'center', w: '100%' }}>
        <Text
          fos={scaleX(50)} ls={-1} fow='bold' ff={'$heading'} col={Colors.black_main}
        >
          Get Started.
        </Text>
      </View>
      <View mt={scaleY(30)}>
        <Button
          w='100%' br={5} h={scaleY(50)} bg={Colors.grey_rect}
        >
          <ButtonIcon>
            <SpotifySvg color={Colors.green_spotify} width={scaleX(25)} height={scaleX(25)} />
          </ButtonIcon>
          <ButtonText
            ff='$body' fos={scaleX(15)} ls={-.5} col={Colors.grey_main}
          >
            Connect with Spotify
          </ButtonText>
        </Button>
        <Button
          w='100%' br={5} h={scaleY(50)} mt={scaleY(10)} bg={Colors.grey_rect}
        >
          <ButtonIcon>
            <YoutubeSvg color={Colors.red_youtube} width={scaleX(25)} height={scaleX(25)} />
          </ButtonIcon>
          <ButtonText
            ff='$body' fos={scaleX(15)} ls={-.5} col={Colors.grey_main}
          >
            Connect with Youtube
          </ButtonText>
        </Button>
        <View
          fd='row' ai='center' mt={scaleY(8)}
        >
          <View fg={1} h={1} bg={Colors.grey_tertiary} mt={2}></View>
          <Text px={5} ls={-.5} col={Colors.grey_secondary}>or</Text>
          <View fg={1} h={1} bg={Colors.grey_tertiary} mt={2}></View>
        </View>
        <Button
          w='100%' br={5} h={scaleY(50)} mt={scaleY(8)} bg={Colors.blue_main}
        >
          <ButtonText
            ff='$body' fos={scaleX(15)} ls={-.5} col='white'
          >
            Connect as Guest
          </ButtonText>
        </Button>
      </View>
    </View>
  );
}

export default GetStarted