import React from 'react';
import { ScrollView, View, useColorScheme } from 'react-native';
import { Text, TextInput, Button, MD3DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Configuracion() {
  const colorScheme = useColorScheme(); // Detecta si el sistema está en modo oscuro
  const router = useRouter();

  // Tema oscuro personalizado
  const darkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: '#6ebfd8',
      background: '#121212',
      surface: '#1e1e1e',
      onSurface: '#ffffff',
      text: '#ffffff',
      outline: '#ffffff',
    },
  };

  return (
    <PaperProvider theme={darkTheme}>
      <ScrollView style={{ backgroundColor: darkTheme.colors.background }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
          <Text
            variant="headlineLarge"
            style={{
              paddingHorizontal: 20,
              paddingTop: 100,
              fontWeight: 'bold',
              textAlign: 'center',
              color: darkTheme.colors.text,
            }}
          >
            INICIAR SESIÓN
          </Text>

          <TextInput
            label="Correo electrónico"
            mode="outlined"
            style={{ marginBottom: 10 }}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            label="Contraseña"
            mode="outlined"
            secureTextEntry
            style={{ marginBottom: 10 }}
          />

          <Button
            onPress={() => router.push("formulario-registro")}
            theme={{ colors: { primary: '#ff4081' } }}
            style={{ marginBottom: 20 }}
            compact
          >
            ¿Olvidaste tu contraseña?
          </Button>

          <Button
            mode="contained"
            onPress={() => console.log('Iniciar sesión')}
            style={{
              marginTop: 10,
              padding: 5,
              backgroundColor: '#1e01fa',
            }}
          >
            Iniciar sesión
          </Button>

          <Button
            icon="google"
            mode="contained"
            onPress={() => console.log('Iniciar con Google')}
            style={{
              marginTop: 10,
              padding: 5,
              backgroundColor: '#6ebfd8',
            }}
          >
            Iniciar sesión con Google
          </Button>

          <Button
            icon="apple"
            mode="contained"
            onPress={() => console.log('Iniciar con Apple')}
            style={{
              marginTop: 10,
              padding: 5,
              backgroundColor: '#6ebfd8',
            }}
          >
            Iniciar sesión con Apple
          </Button>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
