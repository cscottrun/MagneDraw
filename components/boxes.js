import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        position: {
          left: 50,
          top: 70,
        }
      }
    }
  }
  
// within the render, set interval to set state and 
//render a new View with the position specified in state

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, this.state.style.position]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box: {
    position: 'absolute',
    backgroundColor: 'skyblue',
    height: 30,
    width: 30,
  },
});
