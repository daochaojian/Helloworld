import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import styles from '../../styles/joke/detail';

class Detail extends React.Component {
  static propTypes = {
    navigation: React.PropTypes.shape({}).isRequired,
  }
  static navigationOptions = {
    title: `${this.props}`,
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
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.title}>
            {params.joke.user
              ? <Image
                style={styles.image}
                source={{ uri: `https:${params.joke.user.thumb}` }}
                resizeMode="cover"
              />
              : <Image
                style={styles.image}
                source={{ uri: 'https://static.qiushibaike.com/images/thumb/anony.png' }}
                resizeMode="cover"
              />
            }
            {params.joke.user
              ? <Text style={styles.user}>{params.joke.user.login ? params.joke.user.login : '匿名用户'}</Text>
              : <Text style={styles.user}>匿名用户</Text>
            }
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>{params.joke.content}</Text>
            {params.joke.format === 'image'
              ? <View style={styles.imageView}>
                <Image
                  style={[styles.contentImage,
                    { width: params.joke.image_size.s[0], height: params.joke.image_size.s[1] }]}
                  source={{ uri: `https:${params.joke.high_loc}` }}
                  resizeMode="cover"
                />
              </View>
              : null
            }
            {params.joke.format === 'video'
              ? <View
                style={styles.videoContainer}
              >
                <TouchableOpacity
                  style={styles.fullScreen}
                  onPress={() => this.setState({ paused: !this.state.paused })}
                >
                  <Video
                    ref={(ref) => { this.player = ref; }}
                    source={{ uri: `https:${params.joke.high_loc}` }} // 视频的URL地址，或者本地地址，都可以.
                    rate={1}                   // 播放速率
                    volume={1}
                    // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
                    muted={false}                // true代表静音，默认为false.
                    paused={this.state.paused}               // true代表暂停，默认为false
                    resizeMode="contain"           // 视频的自适应伸缩铺放行为，
                    repeat={false}                // 是否重复播放
                    playInBackground={false}     // 当app转到后台运行的时候，播放是否暂停
                    playWhenInactive={false}
                    // [iOS] Video continues to play when control or notification
                    // center are shown. 仅适用于IOS
                    // onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
                    onLoad={this.onLoad}    // 当视频加载完毕时的回调函数
                    onProgress={this.onProgress}    //  进度控制，每250ms调用一次，以获取视频播放的进度
                    onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
                    // onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
                    style={styles.backgroundVideo}
                  />
                </TouchableOpacity>
              </View>
              : null
            }
          </View>
          <View style={styles.foot}>
            <Text style={styles.text}>{params.joke.votes.up} 好笑&nbsp;·&nbsp;</Text>
            <Text style={styles.text}>{params.joke.comments_count} 评论</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Detail;
