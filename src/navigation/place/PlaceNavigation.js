import { Platform, Text, TouchableOpacity } from 'react-native'

import { COLORS } from '../../utils/constants/colors';
import MapScreen from '../../screens/location/Map';
import NewPlaceScreen from '../../screens/location/NewPlace';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const PlaceStack = createNativeStackNavigator()

const PlaceNavigator = () => (
    <PlaceStack.Navigator
        initialRoute='Place'
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? COLORS.violeta : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.violeta,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}
    >
        <PlaceStack.Screen
            name="Nuevo"
            component={NewPlaceScreen}
            options={{title: 'Nueva direccion'}} 
        />
        <PlaceStack.Screen
            name="Map"
            component={MapScreen}
            options={{title: 'Mapa'}} 
        />
    </PlaceStack.Navigator>
)


export default PlaceNavigator