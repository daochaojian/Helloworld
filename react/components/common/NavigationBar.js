import React from 'react';
import { View } from 'react-native';
import lodash from 'lodash';
import styles from '../../styles/common/navigationBar';

const NavigationBar = ({ children }) => (
  <View style={styles.container}>
    {children}
    {lodash.compact(children).length < 3 ? <View style={styles.placeholder} /> : null}
  </View>
);

NavigationBar.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
};

export default NavigationBar;
