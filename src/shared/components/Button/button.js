import React from 'react';
import { Text, Animated, TouchableWithoutFeedback } from 'react-native';

export const Button = ({ title, onPress, buttonStyle, buttonStyleTitle } = {}) => {
    const animatedValue = new Animated.Value(1);
    const onPressIn = () => {
        Animated.spring(animatedValue, {
            toValue: 0.5,
        }).start();
    };
    const onPressOut = () => {
        Animated.spring(animatedValue, {
            toValue: 1,
            friction: 3,
            tension: 40,
        }).start();
        setTimeout(onPress, 1000);
    };
    const animatedStyle = {
        transform: [{ scale: animatedValue }],
    };
    return (
        <TouchableWithoutFeedback onPressIn={onPressIn} onPressOut={onPressOut}>
            <Animated.View style={[buttonStyle, animatedStyle]}>
                <Text style={buttonStyleTitle}>{title}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};
