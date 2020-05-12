import React from 'react';
import { TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import he from 'he';

import { styles } from './styles';

export const CategoriesList = () => {
    const categories = useSelector(state => state.categories.categories).map(category => {
        const { category_id, thumb, name } = category;
        return (
            <TouchableOpacity style={styles.categoryContainer} key={category_id}>
                <Image
                    style={styles.image}
                    source={{
                        uri: `http:${thumb}`,
                    }}
                />
                <Text>{he.decode(name)}</Text>
            </TouchableOpacity>
        );
    });

    return (
        <ScrollView horizontal={true} style={styles.container}>
            {categories ? categories : <Text>Here should be categories</Text>}
        </ScrollView>
    );
};
