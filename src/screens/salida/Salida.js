import {
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import React from 'react';
import styles from './styles';

const Salida = ({navigation}) => {
  
      const portada = require('../../../assets/images/portada.png')
      const handleCategories = ()=> {
          navigation.navigate('Categories')
      }
  
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Image source={portada} style={styles.img} />
          <Text style={styles.titulo}>Gracias por tu compra!</Text>
          <TouchableOpacity onPress={()=> handleCategories()} style={styles.categories} >
              <Text style={styles.text2}>Observa nuestras categorias</Text>
              <Text style={styles.btn}>Comprar más</Text>
          </TouchableOpacity>
          <View>
  
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  
  
  export default Salida;
  