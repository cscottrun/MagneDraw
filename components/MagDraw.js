import React from 'react';
import { Magnetometer} from 'expo';
import {View} from 'react-native';
import PauseOpt from './PauseOpt';
import { FontAwesome } from '@expo/vector-icons';
import BoxMaker from './BoxMaker'
import styles from '../styles/basicStyle';

export default class MagnetometerSensor extends React.Component {
  state = {
    listening: true,
    MagnetometerData: {},
    positions: [],
  }
  
  componentDidMount() {
    this._toggle();
    Magnetometer.setUpdateInterval(40);
  }
  
  componentWillUnmount() {
    this._unsubscribe();
  }
  
  _toggle = () => {
    if (this._subscription) {
      this.setState({listening: false})
      this._unsubscribe();
    } else {
      this.setState({listening: true})
      this._subscribe();
    }
  }
  
  _subscribe = () => {
    this._subscription = Magnetometer.addListener((result) => {
      let joined = this.state.positions.concat({top: -(result.y * 7), left: -(result.z * 3.10)})
      this.setState({
        MagnetometerData: result,
        positions: joined
      }); 
    });
  }
  
  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  sendPost = () => {
    fetch('http://192.168.31.27:3000/',{
      method: 'POST',
      body: JSON.stringify({
        a: 'hey Carrie- you are cool'
      }),
      headers: {"Content-Type": "application/json"}
    })
    .then(function(response){
    return response
    })
    .catch(error => console.log(error));
  }
  
  render() {
    let { x, y, z} = this.state.MagnetometerData;
    
    return (
      <View style={styles.container}>

        <BoxMaker
          positions= {this.state.positions} 
        /> 

        <FontAwesome 
          name='pause-circle-o'
          size={40}
          color='black'
          style={styles.bottomCenter}
          onPress= {this._toggle}
        />

        {!this.state.listening? 
        <PauseOpt
          handleToggle = {this._toggle}
          goToStart = {this.props.goToStart}
          sendPost = {this.sendPost}
        /> : null}
              
      </View>
    );
  }
}

function round(n) {
  if (!n) {
    return 0;
  }
  return Math.floor(n * 1) ;
}
