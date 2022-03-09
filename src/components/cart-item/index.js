import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import styles from './styles';

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.name}>{item.name}</Text>
            <Image source={item.img} style={styles.img} />
        </View>
        <View style={styles.details}>
          <Text style={styles.details.text}>Cantidad: {item.quantity}</Text>
          <Text style={styles.details.text}>$ {item.price}</Text>
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Ionicons name="trash-outline" size={20} style={styles.details.text} />
          </TouchableOpacity>
        </View>
    </View>
  );
};



export default CartItem;
