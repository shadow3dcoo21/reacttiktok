import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const ModalExample = ({ visible, onClose, navigation }) => {

    const onGoHome = () => {
        // Navegar a la pantalla de inicio ('Home')
        navigation.navigate('Home');
        // Cerrar el modal
        onClose();
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose} // Aquí deberías usar onRequestClose para manejar el cierre del modal
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.dragIndicator}></View>
                    <Text style={styles.modalText}>Contenido del modal</Text>
                    <TouchableOpacity onPress={onGoHome} style={styles.homeButton}>
                        <Text style={styles.homeButtonText}>Ir a Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    dragIndicator: {
        width: 40,
        height: 4,
        backgroundColor: 'red',
        borderRadius: 2,
        marginTop: 10,
    },
    modalText: {
        marginVertical: 10,
    },
    homeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
    },
    homeButtonText: {
        color: 'white',
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
    },
    closeButtonText: {
        color: 'blue',
    },
});

export default ModalExample;
