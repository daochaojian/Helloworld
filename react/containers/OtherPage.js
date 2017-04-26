import React from 'react';
import { TouchableOpacity, Navigator, View, Text } from 'react-native';
import styles from '../styles/mainPage';

class OtherPage extends React.PureComponent {
  static propTypes = {
    navigator: React.PropTypes.instanceOf(Navigator).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  pressButton() {
    const { navigator } = this.props;
    navigator.pop();
  }
  render() {
    const { navigator } = this.props;
    console.log(navigator);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.pressButton()}>
          <Text>点我跳转</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default OtherPage;
