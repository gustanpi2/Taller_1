import React from 'react';
import { ScrollView, View, useColorScheme } from 'react-native';
import { Text, List, MD3DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListaServicios() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  const darkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: '#007AFF',
      background: '#121212',
      surface: '#1E1E1E',
      onSurface: '#FFFFFF',
      outline: '#FFFFFF',
      text: '#FFFFFF',
    },
  };

  const listStyle = {
    backgroundColor: darkTheme.colors.surface,
    borderRadius: 10,
    overflow: 'hidden',
  };

  const itemStyle = {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  };

  return (
    <PaperProvider theme={darkTheme}>
      <ScrollView style={{ flex: 1, backgroundColor: darkTheme.colors.background }}>
        <View style={{ padding: 20, paddingTop: 60 }}>
          {/* Iconos superiores */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
            <MaterialCommunityIcons name="home-outline" size={28} color="#ffffff" />
            <MaterialCommunityIcons name="cog-outline" size={28} color="#ffffff" />
          </View>

          {/* Título */}
          <Text variant="headlineLarge" style={{ fontWeight: 'bold', marginBottom: 20, color: '#ffffff' }}>
            Lista de servicios
          </Text>

          {/* Lista */}
          <List.Section style={listStyle}>
            <List.Item
              title="Servicio de Notificación Telefonica"
              description="Abrir servicios telefónicos para alertas de dispositivos..."
              left={props => <List.Icon {...props} icon="phone-outline" color="#8BC34A" />}
              right={props => <List.Icon {...props} icon="chevron-right" color="#ffffff" />}
              onPress={() => console.log('Navegar a Notificación Telefonica')}
              titleStyle={{ color: '#fff' }}
              descriptionStyle={{ color: '#aaa' }}
              style={itemStyle}
            />

            <List.Item
              title="Protección inteligente"
              description="Aplicación de alarma para el hogar..."
              left={props => <List.Icon {...props} icon="shield-outline" color="#64B5F6" />}
              right={props => <List.Icon {...props} icon="chevron-right" color="#ffffff" />}
              onPress={() => console.log('Navegar a Protección inteligente')}
              titleStyle={{ color: '#fff' }}
              descriptionStyle={{ color: '#aaa' }}
              style={itemStyle}
            />

            <List.Item
              title="Compras"
              description="Encuentra rápidamente productos y marcas..."
              left={props => <List.Icon {...props} icon="cart-outline" color="#FFB300" />}
              right={props => <List.Icon {...props} icon="chevron-right" color="#ffffff" />}
              onPress={() => console.log('Navegar a Compras')}
              titleStyle={{ color: '#fff' }}
              descriptionStyle={{ color: '#aaa' }}
              style={itemStyle}
            />

            <List.Item
              title="Maestro de Iluminación"
              description="Proporcione soluciones de iluminación personalizadas..."
              left={props => <List.Icon {...props} icon="lightbulb-outline" color="#9C27B0" />}
              right={props => <List.Icon {...props} icon="chevron-right" color="#ffffff" />}
              onPress={() => console.log('Navegar a Maestro de Iluminación')}
              titleStyle={{ color: '#fff' }}
              descriptionStyle={{ color: '#aaa' }}
              style={itemStyle}
            />

            <List.Item
              title="Asistente de voz de terceros"
              description="Utiliza altavoces inteligentes..."
              left={props => <List.Icon {...props} icon="home-account" color="#42A5F5" />}
              right={props => <List.Icon {...props} icon="chevron-right" color="#ffffff" />}
              onPress={() => console.log('Navegar a Asistente de voz de terceros')}
              titleStyle={{ color: '#fff' }}
              descriptionStyle={{ color: '#aaa' }}
            />
          </List.Section>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
