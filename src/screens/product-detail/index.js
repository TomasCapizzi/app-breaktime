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
   const bread = useSelector(state => state.breads.selected);
   const handleAddItemCart = () => {
    dispatch(addItem(bread))
    navigation.navigate('Categories')
   }
   
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.container}>
       <Text style={styles.titulo}>{bread.name}</Text>
         <Image source={bread.img} style={styles.img} />
         <Text style={styles.text}>{bread.description}</Text>
         <Text style={styles.precio}>$ {bread.price}</Text>

         <Button title="Agregar al carrito" onPress={() => handleAddItemCart()} color={COLORS.primary} />
       </View>
     </SafeAreaView>
   );
 };
 
 
 
 export default ProductDetail;
 