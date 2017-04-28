import { StyleSheet } from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.themeGray,
    borderBottomWidth: 1,
    borderBottomColor: colors.themeDarkerGray,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 18,
    backgroundColor: colors.white,
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
    backgroundColor: colors.white,
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
    backgroundColor: colors.white,
  },
  mainContent: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.themeDarkerGray,
    backgroundColor: colors.white,
  },
});

export default styles;
