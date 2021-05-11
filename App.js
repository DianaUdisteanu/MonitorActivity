import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddIntoStack from './routes/routes';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBZStcmIjQR96vY7l5r3xVkFDKQn0gpMSA",
    authDomain: "monitoract-bc4fa.firebaseapp.com",
    databaseURL: "https://monitoract-bc4fa-default-rtdb.firebaseio.com",
    projectId: "monitoract-bc4fa",
    storageBucket: "monitoract-bc4fa.appspot.com",
    messagingSenderId: "366628099620",
    appId: "1:366628099620:web:fd65ef4c156b26daaf6ab1"
};

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
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
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
