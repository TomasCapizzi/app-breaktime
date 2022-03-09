import { COLORS } from '../../utils/constants/colors';
import Categories from '../../screens/categories/index';
import Home from '../../screens/home';
import { Platform } from 'react-native';
import ProductDetail from '../../screens/product-detail/index';
import Products from '../../screens/products/index';
import React from 'react';
import Salida from '../../screens/salida/Salida';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
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
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen 
            name="Products"
            component={Products}
            options={({ route }) => ({
                title: route.params.name,
                headerStyle: {
                    backgroundColor: route.params.color
                },
            })}
        />
        <Stack.Screen 
            name="ProductDetail"
            component={ProductDetail}
            options={({ route }) => ({
                title: route.params.name,
            })}
        />
        <Stack.Screen name='Salida' component={Salida}/>
        </Stack.Navigator>
    )
}

export default ShopStackNavigation;