import React from 'react';
import { View } from 'react-native';
import navStyles from '../styles/navStyles';
import styles from '../styles/basicStyle';
import MagDraw from './MagDraw'

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
