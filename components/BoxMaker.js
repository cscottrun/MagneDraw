import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Box from './Box'



export default class BoxMaker extends React.Component {
  render() {
    return this.props.positions.map( position => {
      return (
        <Box
          position = {position} 
        />
      )
    })
  }

}

