import { Alert, Button, Text, View } from 'react-native'
import React , {useEffect, useState} from 'react'

import { COLORS } from '../../utils/constants/colors';
import Geolocation from '@react-native-community/geolocation';
import Mapa from '../mapa/Mapa';
import styles from './styles';
import { useRoute } from '@react-navigation/native';

const LocationSelector = ({ onLocation, onMapLocation }) => {
    const [pickedLocation, setPickedLocation] = useState('');
    const route = useRoute();
    const mapLocation = route?.params?.mapLocation;

    useEffect(() => {
        if(mapLocation) {
            setPickedLocation(mapLocation);
            onLocation(mapLocation);
        }
    }, [mapLocation])

    const handleGetLocation = () => {
        Geolocation.getCurrentPosition(
            position => {
                console.warn(position);
                const { latitude, longitude} = position.coords;
                const location = {
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }
                setPickedLocation(location)
                onLocation(location);
            },
            error => {
                console.warn(error);
                Alert.alert(
                    'Could not fetch location',
                    'Please enable location services and try again',
                    [{ text: 'Okay' }]
                )
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
                forceRequestLocation: true,
                showLocationDialog: true,
            }
        )
    }

    const handlePickOnMap = () => {
        onMapLocation();
    }

    return (
        <View style={styles.container}>
            {/* <View style={styles.preview}>
                {pickedLocation ? 
                    <Text>{pickedLocation.latitude}, {pickedLocation.longitude}</Text> :
                    <Text>No hay una ubicación seleccionada</Text>
                    
                }
            </View> */}
            <Mapa
                location={pickedLocation}
                style={styles.preview}
            >
                <Text>No hay una ubicación seleccionada</Text>
            </Mapa>
            <View style={styles.action}>
                <Button
                    title="Seleccionar ubicación"
                    color={COLORS.violeta}
                    onPress={handleGetLocation}
                />
            </View>
            
        </View>
    )
}


export default LocationSelector;