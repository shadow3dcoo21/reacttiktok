import React, { useEffect, useState } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const [usuario, setUsuario] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const obtenerPerfil = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
          // Si no hay token, no hay usuario autenticado
          return;
        }

        const response = await axios.get('http://18.216.174.72:3000/auth/perfil', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsuario(response.data);
      } catch (error) {
        console.error('Error al obtener perfil:', error);
      }
    };

    obtenerPerfil();
  }, []);

  const handleLogin = () => {
    navigation.navigate('Login'); // Navegar a la pantalla de inicio de sesión
  };

  if (!usuario) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Debes iniciar sesión para ver tu perfil</Text>
        <Button title="Iniciar sesión" onPress={handleLogin} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Username: {usuario.username}</Text>
      <Text>Email: {usuario.email}</Text>
      <Text>Nombre: {usuario.nombre || 'No disponible'}</Text>
      <Text>Foto de Perfil: {usuario.fotoPerfil || 'No disponible'}</Text>
      {/* Otros detalles del perfil */}
    </View>
  );
};

export default ProfileScreen;
