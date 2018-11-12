import React from 'react';
import {StyleSheet, View, Text } from 'react-native';




export default class Box extends React.Component {
  render() {
    return (
      <View
      style = {[styles.box, this.props.position]}
      ></View>
    )
  }
}


const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    backgroundColor: 'skyblue',
    height: 10,
    width: 10,
  },
});

