/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Q3 from '../components/q3'
import Q4 from '../components/q4'

export default class Answers extends Component {

  static navigationOptions = ({ navigation }) => ({
    title : navigation.state.params ? 'answer number '+navigation.state.params.number : ''
  })

  render() {
    const { number } = this.props.navigation.state.params
    switch (number) {
      case 3:
        return (<Q3 />)
        break;
      case 4:
        return (<Q4 />)
        break;
      default:
      return (
        <View style={styles.container}>
          <Text>hello</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
