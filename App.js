import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BoxMaker from './components/BoxMaker'

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      positions: [{top: 60, left: 60},{top: 60, left: 70},{top: 60, left: 80},{top: 70, left: 80},{top: 80, left: 80}]
      
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hey Carrie!</Text>
        <BoxMaker
        positions = {this.state.positions}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
