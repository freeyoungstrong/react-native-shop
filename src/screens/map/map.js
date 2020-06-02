import React from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

import { Header } from 'shared/components';
import { styles } from './styles';
import { loc } from 'shared/assets';

export const MapScreen = ({ navigation }) => {
    return (
        <>
            <Header navigation={navigation} title={loc('map.title')} />
            <View style={styles.container}>
                <MapView
                    region={{
                        latitude: 37.7825259,
                        longitude: -122.345453,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.035,
                    }}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    showsUserLocation>
                    <Marker coordinate={{ latitude: 37.782529, longitude: -122.34453 }}>
                        <Callout>
                            <Text>You are here!</Text>
                        </Callout>
                    </Marker>
                </MapView>
            </View>
        </>
    );
};
