import React from 'react';
import { View, ScrollView } from 'react-native';
import { PaperProvider, List, MD3DarkTheme } from 'react-native-paper';
import { router, Stack } from 'expo-router';

// Tema oscuro personalizado
const customDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    background: '#121420',
    surface: '#1e1e2e',
    primary: '#bb86fc',
    text: '#ffffff',
    onSurface: '#ffffff',
  },
};

export default function App() {
  return (
    <PaperProvider theme={customDarkTheme}>
      <MainScreen />
    </PaperProvider>
  );
}

function MainScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Pantallas',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#121420',
          },
          headerTintColor: '#fff',
        }}
      />

      <ScrollView style={{ backgroundColor: "#121420" }}>
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>

          {/* List Items */}
          <ListItem title="Inicio de sesión" icon="lock" color="#f48fb1" path="inicio-sesion" />
          <ListItem title="Pantalla principal" icon="home" color="#82b1ff" path="pantalla-principal" />
          <ListItem title="Lista de elementos" icon="format-list-bulleted" color="#ffca28" path="lista-elementos" />
          <ListItem title="Detalle de elemento" icon="information-outline" color="#ef5350" path="detalle-elemento" />
          <ListItem title="Formulario de registro" icon="view-list" color="#9575cd" path="formulario-registro" />
          <ListItem title="Configuración" icon="cog" color="#90a4ae" path="configuracion" />
          <ListItem title="Perfil de usuario" icon="account" color="#64b5f6" path="perfil-usuario" />
          <ListItem title="Lista de servicios" icon="format-list-bulleted" color="#90a4ae" path="lista-servicios" />
          <ListItem
            title="Autor"
            description="Información del desarrollador"
            icon="account-circle"
            color="#2979FF"
            path="autor"
          />

        </View>
      </ScrollView>
    </>
  );
}

// Componente reutilizable para cada item
function ListItem({ title, description = null, icon, color, path }) {
  return (
    <List.Item
      style={{
        backgroundColor: '#1e1e2e',
        marginBottom: 10,
        borderRadius: 10,
      }}
      title={title}
      titleStyle={{ color: '#ffffff' }}
      description={description}
      descriptionStyle={{ color: '#b0bec5' }}
      left={props => <List.Icon {...props} icon={icon} color={color} />}
      right={props => <List.Icon {...props} icon="chevron-right" color="#ffffff" />}
      onPress={() => router.push(path)}
    />
  );
}
