import { COLORS } from '../../utils/constants/colors';
import Cart from '../../screens/cart';
import MapScreen from '../../screens/location/Map';
import NewPlaceScreen from '../../screens/location/NewPlace';
import { Platform } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen
                name="Nuevo"
                component={NewPlaceScreen}
                options={{title: 'Nueva direccion'}} 
            />
            <Stack.Screen
                name="Map"
                component={MapScreen}
                options={{title: 'Mapa'}} 
            />
        </Stack.Navigator>
    )
}

export default CartStackNavigation;