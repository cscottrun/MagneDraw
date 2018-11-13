import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/basicStyle'



export default class PauseOpt extends React.Component {
  render() {
    return (
     <View style={styles.pauseOpt}>
       <TouchableOpacity style={[styles.pauseBtns, {backgroundColor: '#4B66E8'}]}>
         <Text>Save</Text>
       </TouchableOpacity>

       <TouchableOpacity style={[styles.pauseBtns, {backgroundColor: '#4BDDE8'}]}
        onPress={this.props.handleToggle}>
         <Text>Continue Draw</Text>
       </TouchableOpacity>

       <TouchableOpacity style={[styles.pauseBtns, {backgroundColor: '#52FFC6'}]}>
         <Text>Reset</Text>
       </TouchableOpacity>

     </View>

    )
  }
}