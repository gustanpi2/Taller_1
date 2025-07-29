import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, TextInput, Button, useTheme } from 'react-native-paper';

export default function FormularioRegistro() {
  const theme = useTheme(); // Accede al tema
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleRegistro = () => {
    console.log('Registrarse presionado');
    console.log('Nombre:', nombre);
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
    console.log('Confirmar Contraseña:', confirmPassword);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={{ padding: 20 }}>
        <Text variant="headlineLarge" style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 30, marginTop: 40, color: theme.colors.onBackground }}>Registro</Text>

        <TextInput
          style={{ marginBottom: 15 }}
          mode="outlined"
          label="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={{ marginBottom: 15 }}
          mode="outlined"
          label="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={{ marginBottom: 15 }}
          mode="outlined"
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={{ marginBottom: 30 }}
          mode="outlined"
          label="Confirmar contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <Button
          mode="contained"
          onPress={handleRegistro}
          style={{
            borderRadius: 10,
            paddingVertical: 8,
            width: '100%',
            alignSelf: 'center',
          }}
          labelStyle={{ fontSize: 18 }}
        >
          Registrarse
        </Button>
      </View>
    </ScrollView>
  );
}
