import { StyleSheet } from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 22,
    borderBottomRightRadius: 22,
    paddingLeft: 4,
    width: 50,
    height: 44,
    backgroundColor: colors.alphaWhite(0.2),
  },
});

export default styles;
