import React from 'react';
import { Text, Modal, View, TouchableOpacity } from 'react-native';

import { loc } from 'shared/assets';
import { styles } from './styles';

export const ModalView = ({ visible, onClose, title, description }) => {
    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => {
                            onClose(!visible);
                        }}>
                        <Text style={styles.buttonTitle}>{loc('common.ok')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
