import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.log('Error: ', e);
    }
};

export const getData = async key => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (e) {
        console.log('Error: ', e);
    }
};

export const deleteData = async key => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.log('Error: ', e);
    }
};
