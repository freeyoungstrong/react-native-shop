import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Product } from 'shared/components';
import { routes } from 'shared/constants';
import { styles } from './styles';

const product1 = {
    title: 'Xiaomi Mi A3',
    cost: '222',
};
const product2 = {
    title: 'OPPO K3',
    cost: '150',
};
const product3 = {
    title: 'iPhone XR',
    cost: '840',
};
export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsList: [product1, product2, product3],
        };
    }
    render() {
        const productsList = this.state.productsList
            ? this.state.productsList.map(prod => (
                  <TouchableOpacity onPress={() => this.props.navigation.navigate(routes.PRODUCT_DETAILS)}>
                      <Product title={prod.title} cost={prod.cost} />
                  </TouchableOpacity>
              ))
            : null;
        return (
            <View>
                <View style={styles.search} />
                <View style={styles.categories} />
                <View style={styles.productsList}>{productsList}</View>
            </View>
        );
    }
}
