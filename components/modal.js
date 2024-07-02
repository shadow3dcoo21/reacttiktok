import React, { useRef } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, PanResponder, Animated } from 'react-native';

const ModalExample = ({ visible, onClose }) => {
    const dragY = useRef(new Animated.Value(0)).current; // Utilizamos useRef en lugar de useState

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event(
                [null, { dy: dragY }],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: (e, gestureState) => {
                if (gestureState.dy > 20) {
                    onClose(); // Cerrar el modal si se desliza hacia abajo más de 20 unidades
                } else {
                    Animated.spring(dragY, {
                        toValue: 0, // Volver a la posición inicial si el deslizamiento no es suficiente
                        useNativeDriver: false,
                        speed: 2,
                    }).start();
                }
            },
        })
    ).current;

    // Restablecer el valor de dragY al abrir el modal
    React.useEffect(() => {
        if (visible) {
            dragY.setValue(0);
        }
    }, [visible]);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <Animated.View
                    style={[
                        styles.modalContent,
                        {
                            transform: [
                                { translateY: dragY }
                            ]
                        }
                    ]}
                    {...panResponder.panHandlers}
                >
                    <View style={styles.dragIndicator}></View>
                    <Text style={styles.modalText}>Contenido del modal</Text>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Cerrar</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        height:'100%',
        flex: 1,
        backgroundColor: 'transparent',
    },
    modalContent: {
        height:'100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBlockEndColor:'black',
        padding: 20,
        minHeight: 200,
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
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
    },
    closeButtonText: {
        color: 'blue',
    },
});

export default ModalExample;
