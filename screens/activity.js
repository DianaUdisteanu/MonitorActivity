import React from 'react';
import {Image, View, Text, ImageBackground, TouchableOpacity, LogBox} from 'react-native';

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);

import * as firebase from "firebase";

export default class Activity extends React.Component{
    constructor(){
        super();
        this.state={
            pulseFirebase:"",
            stepsFirebase:""
        };
        this.pulse = "";
        this.steps = "";
    };

    componentDidMount(){
        this.fetchingPulseFromFirebase();
        this.fetchingStepsFromFirebase();
    }

    fetchingStepsFromFirebase = () => {
        setInterval(() => {
            firebase.database().ref('/Steps').once('value').then((snapshot) => {
                var stepsVal = snapshot.val();
                this.steps = stepsVal;
                this.setState({
                    stepsFirebase: this.steps
                })
            })
     }, 3000);
    }

    fetchingPulseFromFirebase = () => {
        setInterval(() => {
            firebase.database().ref('/Pulse').once('value').then((snapshot) => {
                var pulseVal = snapshot.val();
                this.pulse = pulseVal;
                this.setState({
                    pulseFirebase: this.pulse
                })
            })
     }, 3000);
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground style = {{width:"100%", height:"100%"}} source={require("../app/images/background_2.png")}>
                    <View style={{flex:0.55}}>
                        <Image style = {{width:"100%", height:"100%"}} source={require("../app/images/background_blue.png")}/>
                        <View style={{position:'absolute', top:"20%", left:"3%" , right:"3%"}}>
                            <Text style={{fontFamily:"bold-font", fontSize:40, color:'white'}}>Measure</Text>
                            <Text style={{fontFamily:"bold-font", fontSize:18, color:'white'}}>The application counts in real time the number of steps and measures the BPM.</Text>
                        </View>
                    </View>
                    <View style={{flex:0.45, alignItems:'center', justifyContent:'center'}}>
                        <View style={{position:'absolute', bottom:"65%", width:"100%", flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                            <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
                                <Image source={require("../app/images/icon_steps.png")} style={{width:20, height:20}}/>
                                <Text style={{fontFamily:"normal-font", fontSize:20, color:'#84ACCE'}}>steps</Text>
                                <Text style={{fontFamily:"bold-font", fontSize:40, color:'#84ACCE'}}>{this.state.stepsFirebase.replace("\n",'')}</Text>
                            </View>
                            <View style={{flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
                                <Image source={require("../app/images/icon_heart.png")} style={{width:20, height:20}}/>
                                <Text style={{fontFamily:"normal-font", fontSize:20, color:'#84ACCE'}}>pulse</Text>
                                <Text style={{fontFamily:"bold-font", fontSize:40, color:'#84ACCE'}}>{this.state.pulseFirebase.replace("\n",'')}</Text>
                            </View>
                        </View>
                        <View style={{position:'absolute', bottom:"45%", width:"100%"}}>
                            <TouchableOpacity style={{borderRadius:10, backgroundColor:"#84ACCE", width:"90%", height:60, marginHorizontal:"5%", alignItems:'center', justifyContent:'center'}} onPress={() => this.props.navigation.navigate("Main")}>
                                <Text style={{fontFamily:"bold-font", fontSize:20, color:'white'}}>Stop tracking your activity</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}