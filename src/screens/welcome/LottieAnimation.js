import React from 'react';
import LottieView from 'lottie-react-native';

export const LottieAnimation = () => {
    return <LottieView source={require('./animation.json')} autoPlay loop />;
};
