import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeBottomTabNavigator from './homeBottomTabNavigator'

const Stack = createStackNavigator();

function RootNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false,
                }}
            >
                <Stack.Screen name="HomeBottomTab" component={HomeBottomTabNavigator} />
            </Stack.Navigator>                
        </NavigationContainer>
    )
}

export default RootNavigation
