import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import React from 'react';
import styles from './styles';

const Home = ({navigation}) => {

    const portada = require('../../../assets/images/portada.png')
    const handleCategories = ()=> {
        navigation.navigate('Categories')
    }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titulo}>¡Bienvenido a BreakTime!</Text>
        <Image source={portada} style={styles.img} />
        <View style={styles.textContainer}>
            <Text style={styles.text}>Tenemos una variedad muy amplia de diseños para que elijas la mejor taza para tus desayunos o meriendas!</Text>
        </View>
        <TouchableOpacity onPress={()=> handleCategories()} style={styles.categories} >
            <Text style={styles.text2}>Observa nuestras categorias</Text>
            <Text style={styles.btn}>Ver Categorias</Text>
        </TouchableOpacity>
        <View>

        </View>
      </View>
    </SafeAreaView>
  );
};



export default Home;
