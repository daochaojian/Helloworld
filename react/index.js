import 'moment/locale/zh-cn';
import { StackNavigator, TabNavigator } from 'react-navigation';
// import Container from './containers/MainPage';
// import List from './containers/joke/List';
// import Detail from './containers/joke/Detail';
import Main from './containers/v2ex/Main';
import Apple from './containers/v2ex/Apple';
import Creative from './containers/v2ex/Creative';
import Job from './containers/v2ex/Job';
// import colors from './styles/colors';

// const App = () => (
//   <Navigator
//     initialRoute={{ Component: List }}
//     renderScene={({ Component }, navigator) => <Component navigator={navigator} />}
//   />
// );

const App = TabNavigator({
  Main: { screen: Main },
  Apple: { screen: Apple },
  Creative: { screen: Creative },
  Job: { screen: Job },
});

// const App = StackNavigator({
//   Home: { screen: List },
//   Detail: { screen: Detail },
// });

export default App;
