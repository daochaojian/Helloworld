import React from 'react';
import { Navigator } from 'react-native';
import WorkBench from './joke/List';

const Container = ({ navigator }) => <WorkBench navigator={navigator} />;

Container.propTypes = {
  navigator: React.PropTypes.instanceOf(Navigator).isRequired,
};

export default Container;
