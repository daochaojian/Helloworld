import React from 'react';
import { StackNavigator } from 'react-navigation';
// import Container from './containers/MainPage';
import List from './containers/joke/List';
import Detail from './containers/joke/Detail';

// const App = () => (
//   <Navigator
//     initialRoute={{ Component: List }}
//     renderScene={({ Component }, navigator) => <Component navigator={navigator} />}
//   />
// );
const App = StackNavigator({
  Home: { screen: List },
  Detail: { screen: Detail },
});

export default App;
