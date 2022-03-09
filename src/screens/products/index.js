import {
   FlatList,
   SafeAreaView,
   View,
} from 'react-native';
import React, { useEffect } from 'react';
import { filterTaza, selectTaza } from '../../store/actions/tazas.action';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../../components/products-item/index';
import { TAZAS } from '../../utils/data/tazas';
import styles from './styles';

const Products = ({navigation, route}) => {
  
  const dispatch = useDispatch();
  const categoryTazas = useSelector(state => state.tazas.filteredTaza)
  const category = useSelector(state => state.categories.selected);
  
  const handleSelectedProduct = (item) => {
    dispatch(selectTaza(item.id));
    navigation.navigate('ProductDetail', 
      {
        name: item.name,
      }
    );
  }

  const renderProducts= ({item}) => {
    return (
      <ProductItem item={item} onSelected={handleSelectedProduct} />
    )
  }

  useEffect(() => {
    dispatch(filterTaza(category.id));
  }, [])

   return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <FlatList
         data={categoryTazas}
         renderItem={renderProducts}
         keyExtractor={item => item.id}
       />
    </View>
  </SafeAreaView>
   );
 };
 
 
 
 export default Products;
 