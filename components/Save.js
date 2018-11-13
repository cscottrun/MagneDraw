import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, TextInput, } from 'react-native';
import styles from '../styles/basicStyle'

export default class Save extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={[{height: 40}, styles.textBig, {textAlign: 'left'}]}
          placeholder="Drawing Title"
          onChangeText={(text) => this.setState({text})}
          value = {this.state.text}
        />
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} >
         <Text>Save</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}