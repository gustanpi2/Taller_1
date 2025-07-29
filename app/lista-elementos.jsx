import React from 'react';
import { ScrollView, View, useColorScheme } from 'react-native';
import { List, TextInput, Button, Text, MD3DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function Configuracion() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  // Tema oscuro personalizado
  const darkTheme = {
    ...MD3DarkTheme,
    colors: {
      ...MD3DarkTheme.colors,
      primary: '#007AFF',
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
          
          <TextInput
            style={{ margin: 13 }}
            mode="outlined"
            label="Buscar elemento"
            placeholder="Buscar..."
            autoCapitalize="none"
            placeholderTextColor="#aaa"
            onChangeText={text => console.log(text)}
            left={<TextInput.Icon icon="magnify" color="#aaa" />}
          />

          <List.Section>
            {[
              { title: "Item 1", desc: "Descripción del elemento 1" },
              { title: "Item 2", desc: "Descripción del elemento 2" },
              { title: "Item 3", desc: "Descripción del elemento 3" },
              { title: "Item 4", desc: "Descripción del elemento 4" },
              { title: "Item 5", desc: "Descripción del elemento 5" },
            ].map((item, index) => (
              <List.Item
                key={index}
                title={item.title}
                description={item.desc}
                titleStyle={{ color: darkTheme.colors.text }}
                descriptionStyle={{ color: '#bbb' }}
                left={props => <List.Icon {...props} icon="image" color="#c49528" />}
                right={() => (
                  <Button
                    mode="contained"
                    onPress={() => console.log(`Acción pressed for ${item.title}`)}
                    style={{
                      borderRadius: 5,
                      backgroundColor: '#007AFF',
                      paddingHorizontal: 8,
                      paddingBottom: 1,
                    }}
                    labelStyle={{ fontSize: 13 }}
                  >
                    Entrar
                  </Button>
                )}
                onPress={() => router.push("lista-elementos")}
                style={{
                  backgroundColor: darkTheme.colors.surface,
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              />
            ))}
          </List.Section>

        </View>
      </ScrollView>
    </PaperProvider>
  );
}
