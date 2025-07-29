import React from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Text, Button, Avatar, List, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

export default function PerfilUsuario() {
  const router = useRouter();
  const { colors, dark } = useTheme(); // Obtenemos el tema actual

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ padding: 20, paddingTop: 60 }}>
        {/* Botón de retroceso */}
        <TouchableOpacity onPress={() => router.back()} style={{ position: 'absolute', top: 30, left: 20 }}>
          <AntDesign name="arrowleft" size={28} color={colors.text} />
        </TouchableOpacity>

        {/* Sección del perfil */}
        <View style={{ alignItems: 'center', marginBottom: 30, marginTop: 20 }}>
          <Avatar.Icon
            size={120}
            icon="account"
            style={{ backgroundColor: dark ? '#555' : '#e0e0e0', marginBottom: 10 }}
            color={dark ? 'white' : 'black'}
          />
          <Text variant="headlineMedium" style={{ fontWeight: 'bold', marginBottom: 5, color: colors.text }}>
            John Doe
          </Text>
          <Text variant="bodyMedium" style={{ color: colors.text }}>
            johndoe@email.com
          </Text>
        </View>

        {/* Lista de opciones */}
        <List.Section style={{
          backgroundColor: dark ? '#1e1e1e' : 'white',
          borderRadius: 10,
          overflow: 'hidden'
        }}>
          <List.Item
            title="Editar perfil"
            left={props => <List.Icon {...props} icon="file-document-edit-outline" color={colors.primary} />}
            right={props => <List.Icon {...props} icon="chevron-right" color={colors.text} />}
            onPress={() => console.log('Navegar a Editar perfil')}
            titleStyle={{ color: colors.text }}
            style={{ borderBottomWidth: 1, borderBottomColor: dark ? '#333' : '#f0f0f0' }}
          />

          <List.Item
            title="Notificaciones"
            left={props => <List.Icon {...props} icon="bell-outline" color={colors.primary} />}
            right={props => <List.Icon {...props} icon="chevron-right" color={colors.text} />}
            onPress={() => console.log('Navegar a Notificaciones')}
            titleStyle={{ color: colors.text }}
            style={{ borderBottomWidth: 1, borderBottomColor: dark ? '#333' : '#f0f0f0' }}
          />

          <List.Item
            title="Configuración"
            left={props => <List.Icon {...props} icon="cog-outline" color={colors.primary} />}
            right={props => <List.Icon {...props} icon="chevron-right" color={colors.text} />}
            onPress={() => console.log('Navegar a Configuración')}
            titleStyle={{ color: colors.text }}
            style={{ borderBottomWidth: 1, borderBottomColor: dark ? '#333' : '#f0f0f0' }}
          />

          <List.Item
            title="Ayuda"
            left={props => <List.Icon {...props} icon="help-circle-outline" color={colors.primary} />}
            right={props => <List.Icon {...props} icon="chevron-right" color={colors.text} />}
            onPress={() => console.log('Navegar a Ayuda')}
            titleStyle={{ color: colors.text }}
          />
        </List.Section>

        {/* Cerrar sesión */}
        <Button
          mode="text"
          onPress={() => console.log('Cerrar sesión')}
          labelStyle={{ color: colors.primary, fontSize: 18, fontWeight: 'bold' }}
          style={{ marginTop: 30, alignSelf: 'center' }}
        >
          Cerrar sesión
        </Button>
      </View>
    </ScrollView>
  );
}
