import React from 'react';
import { ScrollView } from 'react-native';

import { ProductsList, CategoriesList } from './components';
import { Divider } from 'shared/components';

export const Main = ({ navigation }) => {
    return (
        <ScrollView>
            <CategoriesList />
            <Divider />
            <ProductsList navigation={navigation} />
        </ScrollView>
    );
};
