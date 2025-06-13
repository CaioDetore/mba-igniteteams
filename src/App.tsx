import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { Navigation, Routes } from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Loading } from "./components/Loading";

SplashScreen.preventAutoHideAsync();

export function App() {
  const [loaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  React.useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <SafeAreaProvider>
        {!loaded ? (
          <Loading />
        ) : (
          <Routes />
        )}
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
