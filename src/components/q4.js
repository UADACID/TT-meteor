/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default class Q4 extends Component {

  renderHorizontalItem = ({item}) => (
    <View style={{height: 100, width: 100, padding:20, margin:5, borderWidth:1, justifyContent:'center', alignItems:'center'}}>
      <Text>{item.key}</Text>
    </View>
  )

  renderVerticalItem = ({Item}) => (
    <View style={{flexDirection:'row', margin:5, height:50}}>
      <Image
        source={{uri:'https://www.w3schools.com/howto/img_avatar2.png'}}
        style={{height:50, width:50}}/>
      <View style={{padding:5}}>
        <Text>Title</Text>
        <Text>Lorem Ipsum dolor sit amet</Text>
      </View>
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <RenderList
          text='Horizontal List'
          horizontal={true}
          rowItem={this.renderHorizontalItem}/>
        <RenderList
          text='Vertical List'
          horizontal={false}
          customStyle={{height:400}}
          rowItem={this.renderVerticalItem}/>
      </View>
    );
  }
}

const RenderList = ({text, horizontal, rowItem, customStyle}) => {
  return (
    <View style={customStyle}>
      <Text style={{padding:5, fontSize:15}}>{text}</Text>
      <FlatList
      data={[{key: 'a'}, {key: 'b'},{key: 'c'}, {key: 'd'},{key: 'e'}, {key: 'f'}, {key: 'g'}, {key: 'h'}]}
      horizontal={horizontal}
      renderItem={rowItem}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
