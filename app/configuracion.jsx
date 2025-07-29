import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, List, Switch, Button } from 'react-native-paper';
import { Stack } from 'expo-router';

export default function Configuracion() {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(true);

  const toggleNotifications = () => setIsNotificationsEnabled(!isNotificationsEnabled);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Configuración",
          headerStyle: {
            backgroundColor: '#121420',
          },
          headerTintColor: '#ffffff',
        }}
      />

      <ScrollView style={{ flex: 1, backgroundColor: '#121420' }}>
        <View style={{ padding: 20, paddingTop: 60 }}>
          {/* Título de la pantalla */}
          <Text
            variant="headlineLarge"
            style={{ fontWeight: 'bold', marginBottom: 20, color: '#ffffff' }}
          >
            Configuración
          </Text>

          {/* Sección de la lista de opciones */}
          <List.Section style={{ backgroundColor: '#1e1e2e', borderRadius: 10, overflow: 'hidden' }}>
            {/* Opción Cuenta */}
            <List.Item
              title="Cuenta"
              titleStyle={{ color: '#ffffff' }}
              right={props => <List.Icon {...props} icon="chevron-right" color="#ffffff" />}
              onPress={() => console.log('Navegar a Cuenta')}
              style={{ borderBottomWidth: 1, borderBottomColor: '#2e2e3e' }}
            />

            {/* Opción Notificaciones con Switch */}
            <List.Item
              title="Notificaciones"
              titleStyle={{ color: '#ffffff' }}
              right={() => (
                <Switch
                  value={isNotificationsEnabled}
                  onValueChange={toggleNotifications}
                  color="#bb86fc" // color violeta claro
                  thumbColor={isNotificationsEnabled ? "#bb86fc" : "#444"}
                  trackColor={{ false: "#555", true: "#bb86fc" }}
                />
              )}
              onPress={toggleNotifications}
              style={{ borderBottomWidth: 1, borderBottomColor: '#2e2e3e' }}
            />

            {/* Opción Privacidad */}
            <List.Item
              title="Privacidad"
              titleStyle={{ color: '#ffffff' }}
              right={props => <List.Icon {...props} icon="chevron-right" color="#ffffff" />}
              onPress={() => console.log('Navegar a Privacidad')}
              style={{ borderBottomWidth: 1, borderBottomColor: '#2e2e3e' }}
            />

            {/* Opción Seguridad */}
            <List.Item
              title="Seguridad"
              titleStyle={{ color: '#ffffff' }}
              right={props => <List.Icon {...props} icon="chevron-right" color="#ffffff" />}
              onPress={() => console.log('Navegar a Seguridad')}
              style={{ borderBottomWidth: 1, borderBottomColor: '#2e2e3e' }}
            />

            {/* Opción Ayuda */}
            <List.Item
              title="Ayuda"
              titleStyle={{ color: '#ffffff' }}
              right={props => <List.Icon {...props} icon="chevron-right" color="#ffffff" />}
              onPress={() => console.log('Navegar a Ayuda')}
            />
          </List.Section>

          {/* Botón de Cerrar sesión */}
          <Button
            mode="text"
            onPress={() => console.log('Cerrar sesión')}
            labelStyle={{ color: '#bb86fc', fontSize: 18, fontWeight: 'bold' }}
            style={{ marginTop: 30, alignSelf: 'center' }}
          >
            Cerrar sesión
          </Button>
        </View>
      </ScrollView>
    </>
  );
}
