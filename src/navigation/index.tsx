import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Groups from './screens/Groups';

const RootStack = createNativeStackNavigator({
  screens: {
    Groups: {
      screen: Groups,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },
  }
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
