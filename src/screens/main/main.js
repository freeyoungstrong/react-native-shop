import React from 'react';
import { ScrollView } from 'react-native';

import { ProductsList, CategoriesList } from './components';
import { Divider, Button } from 'shared/components';
import ToastModule from 'react-native-toast-module';

export const Main = ({ navigation }) => {
    const onPressShowToast = () => {
        ToastModule.show('Toast here!!!');
    };
    return (
        <ScrollView>
            <Button title="Show Toast" onPress={onPressShowToast} />
            <CategoriesList />
            <Divider />
            <ProductsList navigation={navigation} />
        </ScrollView>
    );
};
