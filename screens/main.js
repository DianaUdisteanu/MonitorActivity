import React from 'react';
import {Image, View, Text, ImageBackground, TouchableOpacity, LogBox} from 'react-native';

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Warning: ...']);

export default class Main extends React.Component{
    constructor(){
        super();
        this.state={};
    };

    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground style = {{width:"100%", height:"100%"}} source={require("../app/images/background_1.png")}>
                    <View style={{flex:0.55}}>
                        <Image style = {{width:"100%", height:"100%"}} source={require("../app/images/background_blue.png")}/>
                        <View style={{position:'absolute', top:"20%", left:"3%"}}>
                            <Text style={{fontFamily:"bold-font", fontSize:40, color:'white'}}>MonitorActivity</Text>
                            <Text style={{fontFamily:"bold-font", fontSize:20, color:'white'}}>Be active. Be healthy.</Text>
                        </View>
                    </View>
                    <View style={{flex:0.45, alignItems:'center', justifyContent:'center'}}>
                        <View style={{position:'absolute', bottom:"60%", width:"100%"}}>
                            <TouchableOpacity style={{borderRadius:10, backgroundColor:"#84ACCE", width:"90%", height:60, marginHorizontal:"5%", alignItems:'center', justifyContent:'center'}} onPress={() => this.props.navigation.navigate("Activity")}>
                                <Text style={{fontFamily:"bold-font", fontSize:20, color:'white'}}>Start tracking your activity</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}