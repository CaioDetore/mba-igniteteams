import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Groups from "./screens/Groups";
import { NewGroup } from "./screens/NewGroup";
import * as SplashScreen from "expo-splash-screen";
import { Players } from "./screens/Players";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

const RootStack = createNativeStackNavigator({
  screens: {
    Groups: {
      screen: Groups,
      options: {
        title: "Home",
        headerShown: false,
      },
    },
    NewGroup: {
      screen: NewGroup,
      options: {
        title: "Novo Grupo",
        headerShown: false,
      },
    },
    Players: {
      screen: Players,
      options: {
        title: "Jogadores",
        headerShown: false,
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      Players: {
        group: string;
      };
    }
  }
}

SplashScreen.preventAutoHideAsync();

export function Routes() {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_600 }}>
      <Navigation
        linking={{
          enabled: "auto",
          prefixes: [
            // Change the scheme to match your app's scheme defined in app.json
            "helloworld://",
          ],
        }}
        onReady={() => {
          SplashScreen.hideAsync();
        }}
      />
    </View>
  );
}
