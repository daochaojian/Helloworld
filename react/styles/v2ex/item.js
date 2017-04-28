import { StyleSheet } from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.themeDarkerGray,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 18,
  },
  node: {
    marginLeft: 10,
    padding: 4,
    borderRadius: 2,
    backgroundColor: colors.themeDarkerGray,
  },
  spot: {
    padding: 5,
  },
  image: {
    overflow: 'hidden',
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  content: {
    justifyContent: 'flex-start',
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  text: {
    textAlign: 'left',
    fontSize: 14,
    lineHeight: 20,
  },
  foot: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 18,
  },
});

export default styles;
