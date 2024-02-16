import React, { useEffect } from "react";
import { Home } from "./src/screens/Home";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components/native";
import THEME from "../react_native_interfaces/src/theme";

// Mantenha a tela inicial visível enquanto buscamos recursos (Fonts)
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    async function prepareApp() {
      try {
        await SplashScreen.hideAsync();
      } catch (error) {
        console.warn("Error hiding splash screen", error);
      }
    }

    if (fontLoaded) {
      prepareApp();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null; // ou pode renderizar um componente de carregamento
  }

  return (
    <ThemeProvider theme={THEME}>
      <Home></Home>
    </ThemeProvider>
  );
}
