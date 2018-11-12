import React from 'react';
import { Magnetometer} from 'expo';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { bold } from 'ansi-colors';
import Box from './Box'


//let { x, y, z} = this.state.MagnetometerData;
export default class MagnetometerSensor extends React.Component {
  state = {
    MagnetometerData: {},
    positions: {
      top:50,
      left:100,
    },
  }

  componentDidMount() {
    this._toggle();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _toggle = () => {
    if (this._subscription) {
      this._unsubscribe();
    } else {
      this._subscribe();
    }
  }


  _fast = () => {
    Magnetometer.setUpdateInterval(1000);
  }

  // change this to add a new record, rather than writing over the last
  _subscribe = () => {
    this._subscription = Magnetometer.addListener((result) => {
      this.setState({
        MagnetometerData: result,
        positions: {
          top: -(result.y),
          left: -(result.z)
        }
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
      <View style={styles.sensor}>

        <Box
          position= {this.state.positions} 
        /> 

        <Text style={styles.text}>Magnetometer:</Text>
        <Text style={styles.text}>x: {this.state.y} </Text>
        <Text style={styles.text}>y: {round(y)} </Text>
        <Text style={styles.text}>z: {round(z)} </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._toggle} style={styles.button}>
            <Text>Toggle</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={this._fast} style={styles.button}>
            <Text>Fast</Text>
          </TouchableOpacity>

        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  sensor: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    paddingHorizontal: 10,

  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
});