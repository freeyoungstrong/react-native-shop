import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from '../CenterView';
import { Input } from 'shared/components';

storiesOf('Input', module)
    .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
    .add('default', () => <Input placeholder="Test placeholder" />);
