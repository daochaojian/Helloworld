import React from 'react';
import { Text } from 'react-native';
import styles from '../../styles/common/navigationCenterText';

const NavigationCenterText = ({ children }) => <Text style={styles.text}>{children}</Text>;

NavigationCenterText.propTypes = {
  children: React.PropTypes.string.isRequired,
};

export default NavigationCenterText;
