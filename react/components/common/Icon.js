import React from 'react';
import { Path } from 'react-native-svg';
import SvgIcon from 'react-native-svg-icon';

/* eslint-disable */
const svgs = {
  left: {
    svg: <Path d="M129.23 44.974H23.765L59.58 11.436c2.644-2.475 2.642-6.486 0-8.962C56.94 0 52.656 0 50.01 2.474L2.643 46.83C0 49.302 0 53.315 2.643 55.79l47.366 44.353c1.32 1.237 3.05 1.857 4.78 1.857 1.73 0 3.463-.62 4.786-1.858 2.643-2.473 2.64-6.485 0-8.958L23.762 57.647h105.47c3.736 0 6.768-2.84 6.766-6.337 0-3.5-3.03-6.336-6.77-6.336z" />,
    viewbox: '0 0 136 102',
  },
}

/* eslint-enable */

const Icon = props => <SvgIcon {...props} svgs={svgs} />;

export default Icon;
