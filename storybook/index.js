import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

// import stories
configure(() => {
    require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({});
AppRegistry.registerComponent('EcommerseStore', () => StorybookUIRoot);
export default StorybookUIRoot;
