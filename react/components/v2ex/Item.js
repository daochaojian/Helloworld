import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import styles from '../../styles/v2ex/item';

class Item extends React.PureComponent {
  static propTypes = {
    item: React.PropTypes.shape({}).isRequired,
  }
  componentWillMount() {
  }
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          {item.member
            ? <Image
              style={styles.image}
              source={{ uri: `https:${item.member.avatar_normal}` }}
              resizeMode="cover"
            />
            : <Image
              style={styles.image}
              source={{ uri: 'https://static.qiushibaike.com/images/thumb/anony.png' }}
              resizeMode="cover"
            />
          }
          <View style={styles.node}>
            <Text>{item.node.title}</Text>
          </View>
          <View style={styles.spot}>
            <Text>·</Text>
          </View>
          {item.member
            ? <Text style={styles.user}>{item.member ? item.member.username : '匿名用户'}</Text>
            : <Text style={styles.user}>匿名用户</Text>
          }
        </View>
        <TouchableOpacity>
          <View style={styles.content}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
          <View style={styles.foot}>
            <Text style={styles.text}>
              {moment(item.last_modified * 1000).fromNow()} </Text>
            <Text style={styles.text}>{item.replies} 评论</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Item;