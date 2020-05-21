import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import CenterView from '../CenterView';
import { NavQuestion } from 'shared/components';

storiesOf('Navigation question', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('default', () => <NavQuestion onPress={action('clicked-text')} title="Test navigation question" />);
