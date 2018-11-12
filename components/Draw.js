import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import navStyles from '../styles/navStyles'
import styles from '../styles/basicStyle'
import { FontAwesome } from '@expo/vector-icons'

export default class Draw extends React.Component {
  static navigationOptions = {
    title: 'Draw',
    ...navStyles
  };

  render() {
    return (
      <View style={styles.container}>
      <Text>this is the draw page</Text>
      <FontAwesome 
      name='stop-circle-o'
      size={50}
      color='#7E5BFF'
      style={styles.bottomCenter}
       />
      </View>
    )
  }
}
