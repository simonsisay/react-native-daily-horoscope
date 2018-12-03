import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, StatusBar } from 'react-native';
import Routes from './src/routes';



class App extends React.Component {
  render() {
    return (
        <View style={{flex:1}}>
          <StatusBar barStyle={'light-content'} />
          <Routes />
        </View>
    );
  } 
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    width:null, 
    height:null,
    justifyContent:'center',
    alignItems:'center',
  }
})

export default App



