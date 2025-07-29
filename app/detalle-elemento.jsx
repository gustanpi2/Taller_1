import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Stack } from 'expo-router';

export default function DetalleElemento() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Detalle del Elemento",
          headerStyle: { backgroundColor: '#121420' },
          headerTintColor: '#ffffff',
        }}
      />

      <ScrollView style={{ flex: 1, backgroundColor: '#121420' }}>
        <View style={{ padding: 20 }}>
          {/* Icono en círculo */}
          <View
            style={{
              backgroundColor: '#1e1e2e',
              borderRadius: 20,
              width: 180,
              height: 180,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 40,
              marginBottom: 30,
            }}
          >
            <AntDesign name="picture" size={100} color="white" />
          </View>

          {/* Título del elemento */}
          <Text
            variant="displaySmall"
            style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 5, color: '#ffffff' }}
          >
            Elemento uno
          </Text>

          {/* Precio */}
          <Text
            variant="headlineMedium"
            style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#ffffff' }}
          >
            $29,99
          </Text>

          {/* Descripción */}
          <Text
            variant="bodyLarge"
            style={{
              color: '#cccccc',
              textAlign: 'center',
              marginBottom: 40,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis rerum maiores earum possimus eaque iure eius. Id minus provident quae, error minima autem voluptas consequuntur! Enim, voluptatum dolorum. Et?
          </Text>

          {/* Botón */}
          <Button
            mode="contained"
            onPress={() => console.log('Acción pressed')}
            style={{
              backgroundColor: '#4267B2',
              borderRadius: 10,
              paddingVertical: 8,
              width: '80%',
              alignSelf: 'center',
            }}
            labelStyle={{ fontSize: 18, color: '#ffffff' }}
          >
            Acción
          </Button>
        </View>
      </ScrollView>
    </>
  );
}
