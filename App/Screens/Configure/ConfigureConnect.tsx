import { FC, useState } from "react";
import { Button, ButtonContext, Text, View } from "tamagui";
import { scaleX, scaleY } from "@/App/Components/Responsive/Responsive";
import BackSvg from "@/assets/svgs/back.svg";
import TickmarkSvg from '@/assets/svgs/tickmark.svg';
import TickmarkBlueSvg from '@/assets/svgs/tickmarkBlue.svg';
import { Colors } from "@/App/Components/Colors/Colors";
import { TouchableWithoutFeedback } from "react-native";
interface ConfigureConnectProps {
  platform: "Spotify" | "Youtube"
};

export const ConfigureConnect: FC<ConfigureConnectProps> = ({ platform }) => {
  
  const [playlist_s, set_playlist_s] = useState(false);
  const [liked_s, set_liked_s] = useState(false);
  const [podcasts_s, set_podcasts_s] = useState(false);

  return platform == "Spotify" ? (
    <View
      w='100%' h='100%' jc='space-between' px={scaleX(25)} pt={scaleX(40)}
    >
      <BackSvg width={scaleX(20)} height={scaleX(20)} />
      <View>
        <View w='100%' ai='center'>
          <Text fow='bold' fos={scaleX(18)}>Configure Spotify Settings.</Text>
          <View w='85%' fd='row' jc='center' fw="wrap">
            <Text fos={scaleX(14)} col={Colors.grey_secondary}>
              Configure your spotify settings such
            </Text>
            <Text fos={scaleX(14)} col={Colors.grey_secondary}>
              as playlist, favorite songs, podcast etc.
            </Text>
          </View>
        </View>
        <View mt={scaleX(40)}>
          <Button
            w='100%' br={5} h={scaleX(44)} mt={scaleX(8)} bg={Colors.grey_rect}
            onPress={() => set_playlist_s(!playlist_s)}
          >
            <View w='100%' fd='row' h='100%' ai='center'>
              { playlist_s ? <TickmarkBlueSvg/> : <TickmarkSvg/> }
              <Text
                ff='$body' fos={scaleX(16)} col={Colors.black_main}
                ml={scaleX(14)}
              >
                Import Playlists
              </Text>
            </View>
          </Button>
          <Button
            w='100%' br={5} h={scaleX(44)} mt={scaleX(8)} bg={Colors.grey_rect}
            onPress={() => set_liked_s(!liked_s)}
          >
            <View w='100%' fd='row' h='100%' ai='center'>
              { liked_s ? <TickmarkBlueSvg/> : <TickmarkSvg/> }
              <Text
                ff='$body' fos={scaleX(16)} col={Colors.black_main}
                ml={scaleX(14)}
              >
                Import Liked Songs
              </Text>
            </View>
          </Button>
          <Button
            w='100%' br={5} h={scaleX(44)} mt={scaleX(8)}
            onPress={() => set_podcasts_s(!podcasts_s)}
            bg={Colors.grey_rect}
          >
            <View w='100%' fd='row' h='100%' ai='center'>
              { podcasts_s ? <TickmarkBlueSvg/> : <TickmarkSvg/> }
              <Text
                ff='$body' fos={scaleX(16)}
                ml={scaleX(14)}
                col={Colors.black_main}
              >
                Import Podcasts
              </Text>
            </View>
          </Button>
        </View>
        <View mt={scaleX(30)}>
          <Button
            w='100%' br={5} h={scaleX(50)} mt={scaleX(8)}
            bg={(playlist_s||liked_s||podcasts_s) ? Colors.blue_main : Colors.grey_rect}
            disabled={!(playlist_s||liked_s||podcasts_s)}
          >
            <View h='100%' jc='center'>
              <Text
                ff='$body' fos={scaleX(18)} ls={-.5}
                col={(playlist_s||liked_s||podcasts_s) ? 'white' : Colors.grey_neutral }
              >
                Continue
              </Text>
            </View>
          </Button>
          <Button
            w='100%' br={5} h={scaleX(50)} mt={scaleX(8)} b={1} borderColor={Colors.blue_main} bg={'white'}
          >
            <View h='100%' jc='center'>
              <Text
                ff='$body' fos={scaleX(18)} ls={-.5} col={Colors.blue_main}
              >
                Skip
              </Text>
            </View>
          </Button>
        </View>
      </View>
      <View></View>
    </View>
  ) : (
    <View>
      <Text>Component: ConfigureConnect</Text>
    </View>
  );
}

export default ConfigureConnect