import React from 'react';
import { FlatList, View, Text, RefreshControl } from 'react-native';
import lodash from 'lodash';
import styles from '../../styles/v2ex/main';
import colors from '../../styles/colors';
import Item from '../../components/v2ex/Item';

class Apple extends React.Component {
  static propTypes = {
    navigation: React.PropTypes.shape({}).isRequired,
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
    this.setState({ dataSource: [] });
    this.fetchData();
  }
/* eslint-disable */
  fetchData() {
    fetch(`https://www.v2ex.com/api/topics/show.json?node_name=apple`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json()
      ).then(response => this.setState({ dataSource: response })
      ).catch((error) => {
        console.error(error);
      });
    fetch(`https://www.v2ex.com/api/topics/show.json?node_name=macos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json()
  ).then(response => this.setState({ dataSource: [...this.state.dataSource, ...response] })
      ).catch((error) => {
        console.error(error);
      });
      fetch(`https://www.v2ex.com/api/topics/show.json?node_name=iphone`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json()
        ).then(response => this.setState({ dataSource: [...this.state.dataSource, ...response] })
        ).catch((error) => {
          console.error(error);
        });
      fetch(`https://www.v2ex.com/api/topics/show.json?node_name=ipad`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json()
        ).then(response => this.setState({ dataSource: [...this.state.dataSource, ...response] })
        ).catch((error) => {
          console.error(error);
        });
      fetch(`https://www.v2ex.com/api/topics/show.json?node_name=mbp`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json()
        ).then(response => this.setState({ dataSource: [...this.state.dataSource, ...response] })
        ).catch((error) => {
          console.error(error);
        });
    this.setState({ dataSource: lodash.orderBy(this.state.dataSource, ['last_modified', 'desc'])});
  }
/* eslint-enable */
  render() {
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

export default Apple;
