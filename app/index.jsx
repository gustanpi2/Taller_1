import * as React from 'react';
import {
  MD3DarkTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import App from './app';

export const temaAzul = {
  ...DefaultTheme,
  dark: true, // Indica que es un tema oscuro
  colors: {
    ...DefaultTheme.colors,

    primary: 'rgb(128, 188, 255)',
    onPrimary: 'rgb(0, 48, 99)',
    primaryContainer: 'rgb(0, 69, 139)',
    onPrimaryContainer: 'rgb(204, 224, 255)',

    secondary: 'rgb(139, 205, 255)',
    onSecondary: 'rgb(0, 49, 87)',
    secondaryContainer: 'rgb(0, 72, 124)',
    onSecondaryContainer: 'rgb(202, 229, 255)',

    tertiary: 'rgb(112, 222, 255)',
    onTertiary: 'rgb(0, 50, 66)',
    tertiaryContainer: 'rgb(0, 77, 99)',
    onTertiaryContainer: 'rgb(183, 238, 255)',

    error: 'rgb(255, 180, 171)',
    onError: 'rgb(105, 0, 5)',
    errorContainer: 'rgb(147, 0, 10)',
    onErrorContainer: 'rgb(255, 218, 214)',

    background: 'rgb(15, 20, 30)',
    onBackground: 'rgb(230, 240, 255)',

    surface: 'rgb(15, 20, 30)',
    onSurface: 'rgb(230, 240, 255)',

    surfaceVariant: 'rgb(60, 80, 100)',
    onSurfaceVariant: 'rgb(180, 200, 220)',

    outline: 'rgb(130, 150, 170)',
    outlineVariant: 'rgb(60, 80, 100)',

    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',

    inverseSurface: 'rgb(230, 240, 250)',
    inverseOnSurface: 'rgb(40, 50, 60)',
    inversePrimary: 'rgb(0, 110, 220)',

    elevation: {
      level0: 'transparent',
      level1: 'rgb(20, 30, 45)',
      level2: 'rgb(25, 35, 50)',
      level3: 'rgb(30, 40, 55)',
      level4: 'rgb(35, 45, 60)',
      level5: 'rgb(40, 50, 65)',
    },

    surfaceDisabled: 'rgba(230, 240, 255, 0.12)',
    onSurfaceDisabled: 'rgba(230, 240, 255, 0.38)',
    backdrop: 'rgba(20, 40, 60, 0.4)',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={temaAzul}>
      <App />
    </PaperProvider>
  );
}
