
import { StyleSheet, Text, View, Button} from 'react-native';


const purple = '#7E5BFF';
const purpleBlue = '#4B66E8';
const blue = '#5FB7FF';
const lightBlue = '#4BDDE8';
const seaFoam = '#52FFC6';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 5,
  },
  textBig: {
    fontSize: 20,
  },
  icon: {
    size: 50,
  },
  bottomCenter: {
    position: 'absolute',
    top: 500,
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
    backgroundColor: '#5FB7FF',
    padding: 10,
    borderRadius: 5,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'white',
    backgroundColor: '#52FFC6',
  },
  pauseOpt: {
    backgroundColor: 'lightgrey',
    height: 300,
    width: 200,
    position: 'absolute',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    borderRadius: 5,
    
  },
  pauseBtns: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'blue', 
    margin: 10,
    justifyContent: 'center',
    borderRadius: 5,
    
    
  }
  

});