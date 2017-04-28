import React from 'react';
import { View, Text, Image } from 'react-native';
import moment from 'moment';
import styles from '../../styles/v2ex/detail';

class Detail extends React.Component {
  static propTypes = {
    navigation: React.PropTypes.shape({}).isRequired,
  }
  componentWillMount() {
    // console.log(Detail.navigationOptions);
  }
  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    // console.log(Detail.navigationOptions);
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          {params.list.member
            ? <Image
              style={styles.image}
              source={{ uri: `https:${params.list.member.avatar_normal}` }}
              resizeMode="cover"
            />
            : null
          }
          <View style={styles.node}>
            <Text>{params.list.node.title}</Text>
          </View>
          <View style={styles.spot}>
            <Text>·</Text>
          </View>
          {params.list.member
            ? <Text style={styles.user}>{params.list.member ? params.list.member.username : '匿名用户'}</Text>
            : <Text style={styles.user}>匿名用户</Text>
          }
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>{params.list.title}</Text>
        </View>
        <View style={styles.foot}>
          <Text style={styles.text}>
            {moment(params.list.last_modified * 1000).fromNow()} </Text>
          <Text style={styles.text}>{params.list.replies} 评论</Text>
        </View>
        <View style={styles.mainContent}>
          <Text style={styles.text}>{params.list.content}</Text>
        </View>
      </View>
    );
  }
}

export default Detail;
