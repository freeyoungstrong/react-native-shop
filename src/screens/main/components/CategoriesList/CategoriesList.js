import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { useSelector } from 'react-redux';
import he from 'he';

import { styles } from './styles';

export const CategoriesList = () => {
    const categories = useSelector(state => state.categories.categories);

    return (
        <View style={styles.container}>
            {categories &&
                categories.map(category => {
                    return (
                        <TouchableOpacity style={styles.categoryContainer}>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: `http:${category.thumb}`,
                                }}
                            />
                            <Text>{he.decode(category.name)}</Text>
                        </TouchableOpacity>
                    );
                })}
        </View>
    );
};
