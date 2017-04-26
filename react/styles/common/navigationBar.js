import { StyleSheet, Platform } from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    height: Platform.OS === 'ios' ? 76 : 56,
    backgroundColor: colors.themeDarkBlue,
  },
  placeholder: {
    width: 50,
  },
});

export default styles;
