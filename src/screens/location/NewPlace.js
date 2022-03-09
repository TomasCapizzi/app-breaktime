import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'

import  { COLORS } from '../../utils/constants/colors';
import LocationSelector from '../../components/locationSelector/LocationSelector';
import { addPlace } from '../../store/actions/places.actions';
import { useDispatch } from 'react-redux'

const NewPlaceScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [location, setLocation] = useState(null);

    const handleTitleChange = (text) =>  setTitle(text)

    const handleSave = () => {
        dispatch(addPlace(title,location))
        navigation.navigate('Salida')
    }

    const handleOnLocation = (position) => {
        setLocation(position)
    }

    const handleOnMapLocation = () => {
        navigation.navigate('Map', {
            location: location,
        });
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Elige la ubicación de entrega</Text>
                <LocationSelector onLocation={handleOnLocation} onMapLocation={handleOnMapLocation}/>
                <Button title="Confirmar dirección de Entrega" color={COLORS.accent} onPress={() => handleSave()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 30,
        marginVertical: 15
    },
    label: {
        fontSize: 18,
        marginVertical: 8,
        color:COLORS.accent,
        fontWeight: 'bold'
    }
})

export default NewPlaceScreen