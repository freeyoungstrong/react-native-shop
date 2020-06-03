import React, { useCallback } from 'react';
import { Text, Modal as RNModal, View } from 'react-native';

import { loc } from 'shared/assets';
import { styles } from './styles';
import { Button } from '../Button/button';

export const Modal = ({ visible, onClose, title, description }) => {
    const onPressButton = useCallback(() => onClose(!visible), [visible]);
    return (
        <RNModal animationType="slide" transparent={true} visible={visible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                    <Button title={loc('common.ok')} onPress={onPressButton} />
                </View>
            </View>
        </RNModal>
    );
};
