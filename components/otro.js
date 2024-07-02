import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ModalExample from '../components/modal';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aqui va Detalles</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stack")}
      >
        <Text style={styles.buttonText}>ir</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stack2")}
      >
        <Text style={styles.buttonText}>iroiii</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stack")}
      >
        <Text style={styles.buttonText}>ir</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stack")}
      >
        <Text style={styles.buttonText}>ir</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Stack")}
      >
        <Text style={styles.buttonText}>ir</Text>
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={openModal}>
          <FontAwesome5 size={20} name='map-marker-alt' style={styles.icon} />
        </TouchableOpacity>
        <ModalExample visible={modalVisible} onClose={closeModal} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6A0DAD',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    marginTop: 50,
  },
  icon: {
    color: '#6A0DAD',
  },
});

export default HomeScreen;
