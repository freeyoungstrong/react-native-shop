import React, { useMemo } from 'react';
import { Button as RNButton } from 'react-native-elements';

import { styles } from './styles';
import { colors } from 'shared/assets';

export const Button = ({
    title,
    onPress,
    isLoading = false,
    disabled = false,
    icon,
    type = 'solid',
    fullWidth,
} = {}) => {
    const width = useMemo(() => (fullWidth ? '85%' : '50%'), [fullWidth]);
    const color = useMemo(() => {
        if (type === 'solid') return colors.white;
        if (type === 'outline') return colors.black;
    }, [type]);

    return (
        <RNButton
            title={title}
            onPress={onPress}
            loading={isLoading}
            disabled={disabled}
            icon={icon}
            type={type}
            buttonStyle={styles.button}
            containerStyle={{ width }}
            titleStyle={[styles.title, { color }]}
        />
    );
};
