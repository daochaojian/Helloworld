import { StyleSheet } from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    padding: 12,
    backgroundColor: colors.white,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 18,
  },
  image: {
    overflow: 'hidden',
    borderRadius: 20,
    width: 40,
    height: 40,
    backgroundColor: colors.themeLightGray,
  },
  user: {
    paddingLeft: 10,
  },
  content: {
    justifyContent: 'flex-start',
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    height: 240,
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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
