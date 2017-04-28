import React from 'react';
import { FlatList, View, Text, RefreshControl } from 'react-native';
import styles from '../../styles/v2ex/list';
import colors from '../../styles/colors';
import Item from './Item';

class List extends React.Component {
  static propTypes = {
    uri: React.PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }
  componentWillMount() {
    this.fetchData();
  }
  refresh = () => {
    this.fetchData(this.state.page);
  }
/* eslint-disable */
  fetchData() {
    fetch(`https://www.v2ex.com/api/${this.props.uri}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json()
  ).then(response => this.setState({ dataSource: response })
      ).catch((error) => {
        console.error(error);
      });
  }
/* eslint-enable */
  render() {
    console.log(this.state);
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
              />
            }
            ListFooterComponent={() => <View style={styles.tips}><Text style={styles.tips}>
                  温馨提示</Text></View>
              }
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
