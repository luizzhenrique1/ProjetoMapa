import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapView, { Marker } from 'react-native-maps';

// Função HomeScreen, com botão para abrir o mapa
function HomeScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Mapa');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.subtitle}>
        Clique abaixo para ver a localização da empresa
      </Text>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Onde estamos</Text>
      </TouchableOpacity>
    </View>
  );
}

function mapScreen() {
  const [region] = useState({
    latitude: -23.454415,
    longitude: -46.501570,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [marker] = useState({
    latitude: -23.454415,
    longitude: -46.501570,
    title: 'Etec de Guarulhos',
    description: 'R. Cristóbal Cláudio Elilo, 88 - Parque Cecap, Guarulhos - SP, 07190-065',
  });

  return (
    <MapView style={styles.map} initialRegion={region}>
      <Marker
        coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
        title={marker.title}
        description={marker.description}
      />
    </MapView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Início' }}
        />
        <Stack.Screen
          name="Mapa"
          component={mapScreen}
          options={{ title: 'Localização da Etec Guarulhos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
