import React from 'react';
import { TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import he from 'he';

import { styles } from './styles';

export const CategoriesList = () => {
    const categories = useSelector(state => state.categories.categories).map(category => (
        <TouchableOpacity style={styles.categoryContainer} key={category.category_id}>
            <Image
                style={styles.image}
                source={{
                    uri: `http:${category.thumb}`,
                }}
            />
            <Text>{he.decode(category.name)}</Text>
        </TouchableOpacity>
    ));

    return (
        <ScrollView horizontal={true} style={styles.container}>
            {categories ? categories : <Text>Here should be categories</Text>}
        </ScrollView>
    );
};
