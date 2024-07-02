import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://18.216.174.72:3000/auth/login', {
        username,
        contraseña: password, // Usa 'contraseña' aquí para que coincida con el backend
      });
      console.log('Respuesta del servidor:', response.data);
  
      await AsyncStorage.setItem('token', response.data.token);
      navigation.replace('MyTabs');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response.data);
      setError('Usuario o contraseña incorrectos');
    }
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Ingrese su username"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Ingrese su contraseña"
        secureTextEntry
      />

      {error && <Text style={styles.errorText}>{error}</Text>}

      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
