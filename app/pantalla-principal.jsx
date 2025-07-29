import { ScrollView, View } from 'react-native';
import { Text, Button, IconButton, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function PantallaPrincipal() {
  const { colors } = useTheme(); // Accede a los colores del tema actual
  const router = useRouter();

  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <Text
          variant="displayMedium"
          style={{
            paddingTop: 100,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 5,
            color: colors.onBackground,
          }}
        >
          ¡Bienvenido!
        </Text>

        <Text
          variant="titleMedium"
          style={{
            color: colors.onBackground,
            opacity: 0.7,
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          ¡Nos alegra tenerte aquí!
        </Text>

        <IconButton
          icon="account-circle"
          size={160}
          iconColor={colors.primary}
          style={{ marginBottom: 30, alignSelf: 'center' }}
        />

        <Button
          mode="contained"
          onPress={() => router.push('/formulario-registro')}
          style={{
            width: '80%',
            borderRadius: 25,
            backgroundColor: colors.primary,
            paddingVertical: 5,
            alignSelf: 'center',
          }}
          labelStyle={{ fontSize: 16 }}
        >
          Empezar
        </Button>
      </View>
    </ScrollView>
  );
}
