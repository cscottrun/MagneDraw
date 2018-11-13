import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import navStyles from '../styles/navStyles';
import styles from '../styles/basicStyle';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import BoxMaker from './BoxMaker';
import Magnetometer from './Magnetometer';
import MagDraw from './MagDraw'
import PauseOpt from './PauseOpt';
import Save from './Save';

export default class Draw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawing: true,
    }
  }
  goToStart = () => {
    this.props.navigation.navigate('Start');
  }

  static navigationOptions = {
    title: 'Draw',
    ...navStyles
  };

  pauseDraw = () => {
    this.setState({drawing: false})
  }

  render() {
    return (
      <View style={styles.container}>
    
      <MagDraw
        drawing = {this.drawing}
        goToStart = {this.goToStart} />

      
      </View>
    )
  }
}
