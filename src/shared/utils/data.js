import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log('Error while storing data to AsyncStorage: ', error);
    }
};

export const getData = async key => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.log('Error while getting data from AsyncStorage: ', error);
    }
};

export const removeData = async key => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log('Error while removing data from AsyncStorage: ', error);
    }
};
