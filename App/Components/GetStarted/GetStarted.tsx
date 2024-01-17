import { FC } from "react";
import { View, Text, ButtonIcon, Button, ButtonText, useMedia } from "tamagui";

import SpotifySvg from '@/assets/svgs/spotify.svg';
import YoutubeSvg from '@/assets/svgs/youtube.svg'
import { Colors } from "@/App/Components/Colors/Colors";
import { Dimensions } from "react-native";

export const GetStarted: FC = () => {
  const media = useMedia();

  return (
    <View
      w='100%' h='100%' fd='column' jc='center' px={25} mt={25}
      $gtXs={{ px: 30, mt: 30 }} $gtSm={{ px: 35, mt: 35 }}
    >
      <Text>Screen = {Dimensions.get('window').width} x {Dimensions.get('window').height}</Text>
      <View $gtSm={{ ai: 'center', w: '100%' }}>
        <Text
          fos={50} ls={-1} fow='bold' ff={'$heading'} col={Colors.black_main}
          $gtXs={{ fos: 55 }} $gtSm={{ fos: 60 }}
        >
          Get Started.
        </Text>
      </View>
      <View
        mt={30}
        $gtXs={{ mt: 35 }} $gtSm={{ mt: 40 }}
      >
        <Button
          w='100%' br={5} h={50} bg={Colors.grey_rect}
          $gtXs={{ h: 55 }} $gtSm={{ h: 60 }}
        >
          <ButtonIcon>
            <SpotifySvg color={Colors.green_spotify} width={25} height={25} />
          </ButtonIcon>
          <ButtonText
            ff='$body' fos={15} ls={-.5} col={Colors.grey_main}
            $gtXs={{ fos: 20 }} $gtSm={{ fos: 25 }}
          >
            Connect with Spotify
          </ButtonText>
        </Button>
        <Button
          w='100%' br={5} h={50} mt={10} bg={Colors.grey_rect}
          $gtXs={{ mt: 15, h: 55 }} $gtSm={{ mt: 20, h: 60 }}
        >
          <ButtonIcon>
            <YoutubeSvg
              color={Colors.red_youtube}
              width={media.gtSm ? 35 : media.gtXs ? 30 : 25}
              height={media.gtSm ? 35 : media.gtXs ? 30 : 25}
            />
          </ButtonIcon>
          <ButtonText
            ff='$body' fos={15} ls={-.5} col={Colors.grey_main}
            $gtXs={{ fos: 20 }} $gtSm={{ fos: 25 }}
          >
            Connect with Youtube
          </ButtonText>
        </Button>
        <View
          fd='row' ai='center' mt={8}
          $gtXs={{ mt: 10 }} $gtSm={{ mt: 12 }}
        >
          <View fg={1} h={1} bg={Colors.grey_tertiary} mt={2}></View>
          <Text px={5} ls={-.5} col={Colors.grey_secondary}>or</Text>
          <View fg={1} h={1} bg={Colors.grey_tertiary} mt={2}></View>
        </View>
        <Button
          w='100%' br={5} h={50} mt={8} bg={Colors.blue_main}
          $gtXs={{ mt: 10, h: 55 }} $gtSm={{ mt: 12, h: 60 }}
        >
          <ButtonText
            ff='$body' fos={15} ls={-.5} col='white'
            $gtXs={{ fos: 20 }} $gtSm={{ fos: 25 }}
          >
            Connect as Guest
          </ButtonText>
        </Button>
      </View>
    </View>
  );
}

export default GetStarted