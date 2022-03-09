import {
   Button,
   Image,
   SafeAreaView,
   Text,
   View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import {COLORS} from '../../utils/constants/colors';
import React from 'react';
import { addItem } from '../../store/actions/cart.action';
import styles from './styles';

const ProductDetail = ({navigation, route}) => {
   const dispatch = useDispatch();
   const taza = useSelector(state => state.tazas.selected);
   const handleAddItemCart = () => {
    dispatch(addItem(taza))
    navigation.navigate('Categories')
   }
   
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.container}>
       <Text style={styles.titulo}>{taza.name}</Text>
         <Image source={taza.img} style={styles.img} />
         <Text style={styles.text}>{taza.description}</Text>
         <Text style={styles.precio}>$ {taza.price}</Text>

         <Button title="Agregar al carrito" onPress={() => handleAddItemCart()} color={COLORS.primary} />
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default ProductDetail;
 