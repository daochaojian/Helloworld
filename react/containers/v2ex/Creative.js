import React from 'react';
import { FlatList, View, Text, RefreshControl } from 'react-native';
import lodash from 'lodash';
import styles from '../../styles/v2ex/main';
import colors from '../../styles/colors';
import Item from '../../components/v2ex/Item';

class Creative extends React.Component {
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
    fetch(`https://www.v2ex.com/api/topics/show.json?node_name=creative`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json()
      ).then(response => this.setState({ dataSource: response })
      ).catch((error) => {
        console.error(error);
      });
    fetch(`https://www.v2ex.com/api/topics/show.json?node_name=create`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json()
  ).then(response => this.setState({ dataSource: [...this.state.dataSource, ...response] })
      ).catch((error) => {
        console.error(error);
      });
      fetch(`https://www.v2ex.com/api/topics/show.json?node_name=design`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json()
        ).then(response => this.setState({ dataSource: [...this.state.dataSource, ...response] })
        ).catch((error) => {
          console.error(error);
        });
      fetch(`https://www.v2ex.com/api/topics/show.json?node_name=ideas`, {
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
        {/* <View>

        </View> */}
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

export default Creative;
