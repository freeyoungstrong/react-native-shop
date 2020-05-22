import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import CenterView from '../CenterView';
import { Button } from 'shared/components';
import { styles } from './styles';

storiesOf('Button', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('default', () => (
        <Button
            onPress={action('clicked-text')}
            title="Test title"
            buttonStyle={styles.buttonStyle}
            buttonStyleTitle={styles.buttonTitle}
        />
    ));
