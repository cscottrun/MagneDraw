import React from 'react';
import {
  Magnetometer,
} from 'expo';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { bold } from 'ansi-colors';

export default class MagnetometerSensor extends React.Component {
  state = {
    MagnetometerData: {},
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

  _slow = () => {
    Magnetometer.setUpdateInterval(10000);
  }

  _fast = () => {
    Magnetometer.setUpdateInterval(16);
  }

  // change this to add a new record, rather than writing over the last
  _subscribe = () => {
    this._subscription = Magnetometer.addListener((result) => {
      this.setState({MagnetometerData: result});
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
        <Text style={styles.text}>Magnetometer:</Text>
        <Text style={styles.text}>x: {round(x)+77} </Text>
        <Text style={styles.text}>y: {round(y)+75} </Text>
        <Text style={styles.text}>z: {round(z)+110} </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this._toggle} style={styles.button}>
            <Text>Toggle</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._slow} style={[styles.button, styles.middleButton]}>
            <Text>Slow</Text>
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