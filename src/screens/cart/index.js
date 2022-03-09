import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { confirmCart, removeItem } from "../../store/actions/cart.action";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "../../components/cart-item";
import React from "react";
import styles from "./styles";

const Cart = ({navigation}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);

    const handleConfirm = () => {
        //dispatch(confirmCart(items, total));
        navigation.navigate("Nuevo");
    }

    const handleDelete = (id) => {
        dispatch(removeItem(id));
    }

    const renderItems = (data) => (
        <CartItem item={data.item} onDelete={handleDelete} />
    )
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tu Carrito</Text>
            <View style={styles.list}>
                <FlatList
                    data={items}
                    renderItem={renderItems}
                    keyExtractor={(item) => item.id}
                />
            </View>
            {
                total > 0 ?
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.confirm} onPress={() => handleConfirm()}>
                        <Text>Confirmar</Text>
                        <View style={styles.total}>
                            <Text style={styles.text}>Total:</Text>
                            <Text style={styles.text}>${total}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                : null
            }

        </View>
    )
}

export default Cart;