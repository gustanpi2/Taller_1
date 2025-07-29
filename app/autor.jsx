import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { Stack } from 'expo-router';

export default function Autor() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Autor",
          headerStyle: {
            backgroundColor: '#121420',
          },
          headerTintColor: '#ffffff',
        }}
      />

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
          backgroundColor: '#121420',
        }}
      >
        {/* Avatar */}
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/ab/b2/a0/abb2a0b6410b90080605c16380f865fd.jpg' }} // Imagen
          style={{
            width: 160,
            height: 160,
            borderRadius: 80,
            marginBottom: 20,
            borderWidth: 3,
            borderColor: '#ffffff',
          }}
        />

        {/* Información */}
        <Text variant="titleLarge" style={{ marginBottom: 10, textAlign: 'center', color: '#ffffff' }}>
          Gustavo Mena Palacios
        </Text>
        <Text style={{ marginBottom: 5, textAlign: 'center', color: '#cccccc' }}>Cédula: 1077997501</Text>
        <Text style={{ marginBottom: 5, textAlign: 'center', color: '#cccccc' }}>
          Estudiante de Ingeniería de Telecomunicaciones e Informática
        </Text>
        <Text style={{ marginBottom: 5, textAlign: 'center', color: '#cccccc' }}>Teléfono: 3217391838</Text>
        <Text style={{ marginBottom: 5, textAlign: 'center', color: '#cccccc' }}>Correo: gustavomenap434@gmail.com</Text>
      </View>
    </>
  );
}
