import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import BoxMaker from './components/BoxMaker';
import Magnetometer from './components/Magnetometer';
import { createStackNavigator,} from 'react-navigation';
import Start from './components/Start';
import Draw from './components/Draw';
import navStyles from './styles/navStyles'
import styles from './styles/basicStyle'

class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
    ...navStyles
  };

  goToStart = () => {
    this.props.navigation.navigate('Start');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.textBig]}>Welcome to MagneDraw!</Text>
        <Text style = {styles.text}>Please place your mobile device on a flat surface.</Text>
        <Text style = {styles.text}>Hold your MagnetPen in the center of your canvas, within 10 inches of your mobile device.</Text>
        <Text style = {styles.text}>Push the button to calibrate.</Text>
        <Button
        onPress ={this.goToStart}
        title='Calibrate'
         />
        
      </View>
    );
  }
}


// this loads in the order listed
export default createStackNavigator ({
Home: {
  screen: App
},
Start: {
  screen: Start
},
Draw: {
  screen: Draw
},

})