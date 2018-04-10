/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';

export default class Questions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RowItem number={3}/>
        <RowItem number={4}/>
      </View>
    );
  }
}

const RowItem = withNavigation(({number, navigation}) => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <Text style={{padding:20}}>no {number}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Answers', { number })}>
        <Text style={{color:'blue', paddingRight:20}}>show answer</Text>
      </TouchableOpacity>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
