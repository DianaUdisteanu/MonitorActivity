import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddIntoStack from './routes/routes';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fontConfig = {
  "light-font": require("./fonts/ProximaNovaThin.otf"),
  "normal-font": require("./fonts/ProximaNovaRegular.otf"),
  "bold-font": require("./fonts/ProximaNovaBold.otf")
};

export default class App  extends React.Component {
  constructor(){
    super();
    this.state = {
      fontsLoaded: false
    };
  }

  async loadFonts(){
    await Font.loadAsync(fontConfig)
    this.setState({fontsLoaded:true})
  }

  async componentDidMount(){
    this.loadFonts();
  }

  render(){
    if(this.state.fontsLoaded){
      return(
        <AddIntoStack/>
      );
    }
    else{
      return(
        <AppLoading/>
      );
    }
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
