import React from 'react';
import {StyleSheet, View, } from 'react-native';

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
    backgroundColor: '#7E5BFF',
    height: 5,
    width: 5,
  },
});

