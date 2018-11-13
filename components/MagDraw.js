import React from 'react';
import { Magnetometer} from 'expo';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Box from './Box'
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     alignItems: 'stretch',
//     marginTop: 15,
//   },
//   button: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#eee',
//     padding: 10,
//   },
//   middleButton: {
//     borderLeftWidth: 1,
//     borderRightWidth: 1,
//     borderColor: '#ccc',
//   },
//   sensor: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 15,
//     paddingHorizontal: 10,

//   },
//   text: {
//     fontSize: 30,
//     fontWeight: 'bold',
//   }
// });