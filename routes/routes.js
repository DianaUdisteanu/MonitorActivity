import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from "../screens/main";
import Activity from "../screens/activity";

const Stack = createStackNavigator();
function AddIntoStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" 
                              component={Main} 
                              options={({navigation}) => ({
                                  headerShown: false
                              })}
                />
                <Stack.Screen name="Activity" 
                              component={Activity} 
                              options={({navigation}) => ({
                                  headerShown: false
                              })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AddIntoStack;