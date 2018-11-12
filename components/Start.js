import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import navStyles from '../styles/navStyles'
import styles from '../styles/basicStyle'
import { Ionicons } from '@expo/vector-icons'
import Draw from './Draw';
import { createStackNavigator,} from 'react-navigation';


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
        <Text style={styles.text}>You are ready to Draw. Press start to begin.</Text>
        <Ionicons
          name = 'ios-play-circle'
          color = '#7E5BFF'
          size={50}
          onPress={this.goToDraw}
           />
      </View>
    )
  }
}