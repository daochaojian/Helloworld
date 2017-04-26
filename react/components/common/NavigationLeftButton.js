import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from '../../styles/common/navigationLeftButton';

const NavigationLeftButton = ({ onPress, disabled, children }) => (
  <TouchableOpacity style={styles.container} onPress={onPress} disabled={disabled}>
    {children}
  </TouchableOpacity>
);

NavigationLeftButton.propTypes = {
  onPress: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool,
  children: React.PropTypes.element.isRequired,
};

NavigationLeftButton.defaultProps = {
  disabled: false,
};

export default NavigationLeftButton;
