import React from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';

import { fetchCategories } from 'shared/redux/actions';
import { ProductsList, CategoriesList } from './components';
import { Divider } from 'shared/components';

export const Main = ({ navigation }) => {
    // const dispatch = useDispatch();
    // const fetchData = useCallback(async () => await dispatch(fetchCategories()), [dispatch]);
    // useEffect(() => fetchData(), []);
    return (
        <ScrollView>
            <CategoriesList />
            <Divider />
            <ProductsList navigation={navigation} />
        </ScrollView>
    );
};
