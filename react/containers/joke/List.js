import React from 'react';
import { FlatList, View, Text, RefreshControl } from 'react-native';
import lodash from 'lodash';
import styles from '../../styles/joke/list';
import colors from '../../styles/colors';
import Item from '../../components/joke/Item';

class List extends React.Component {
  static navigationOptions = {
    title: 'hi! jojo',
  }
  static propTypes = {
    navigation: React.PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      waiting: false,
      page: 1,
      dataSource: [],
    };
  }
  componentWillMount() {
    this.fetchData(1);
  }
/* eslint-disable */
  fetchData(page) {

    fetch(`https://m2.qiushibaike.com/article/list/suggest?page=${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then((responseJson) => {
        if (this.state.dataSource.length == 0) {
          // console.log('上');
          this.setState({
            waiting: false,
            page: ++page,
            dataSource: responseJson.items });
        } else {
          // console.log('下');
          this.setState({
            waiting: false,
            page: ++page,
            dataSource: lodash.uniqBy(this.state.dataSource.concat(responseJson.items.filter(
              item => item.image.indexOf('.mp4') !== -1)), 'id')
            });
        }
      }).catch((error) => {
        console.error(error);
      });
  }
/* eslint-enable */
  onEndReached = () => {
    // console.log('开始');
    if (!this.state.waiting) {
      this.setState({ waiting: true });
      this.fetchData(this.state.page);
    }
  }
  refresh = () => {
    this.setState({ page: 1 });
    this.fetchData(this.state.page);
  }
  render() {
    const { navigation } = this.props;
    // console.log(navigation);
    const bool = true;
    const refreshControl = (
      <RefreshControl
        refreshing={!bool}
        onRefresh={this.refresh}
        colors={[colors.themeLightAquaGreen]}
        tintColor={colors.themeLightAquaGreen}
      />
    );
    return (
      <View style={styles.container}>
        {this.state.dataSource.length
          ? <FlatList
            showsVerticalScrollIndicator={false}
            data={this.state.dataSource}
            refreshControl={refreshControl}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <Item
                item={item}
                onPress={() => navigation.navigate('Detail', { joke: item })}
              />
            }
            ListFooterComponent={() => {
              if (!this.state.waiting) {
                return (<View style={styles.tips}><Text style={styles.tips}>
                  温馨提示</Text></View>);
              }
              return <View style={styles.tips}><Text style={styles.tips}>正在加载更多...</Text></View>;
            }}
            onEndReached={this.onEndReached}
            // onEndReachedThreshold={10}
            enableEmptySections={bool}
          />
          : null
        }
      </View>
    );
  }
}

export default List;
