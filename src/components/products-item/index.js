import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import React from 'react';
import styles from './styles';

const ProductItem = ({item, onSelected}) => {
  return (
    <View style={styles.container} >
        <TouchableOpacity 
            style={styles.containerTouchable}
            onPress={() => onSelected(item)}
        >
        <View>
            {
              item.img && <Image source={item.img} style={styles.img} />
            }

        </View>
        <View style={styles.detailsContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>$ {item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};



export default ProductItem;
