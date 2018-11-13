import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import navStyles from '../styles/navStyles'
import styles from '../styles/basicStyle'
import { Foundation } from '@expo/vector-icons';


export default class Start extends React.Component {
  static navigationOptions = {
    title: 'Start',
    ...navStyles
  };

  goToDraw = () => {
    this.props.navigation.navigate('Draw');
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>Press to begin</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity  style={[styles.button, {backgroundColor:'#52FFC6'}]} 
              onPress={this.goToDraw}>
            <Text>Draw</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}