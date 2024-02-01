import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

function ShoppingCart(props) {
    const { navigate } = useNavigation();

    const cartItems = useSelector(state => state);

    return (
        <TouchableOpacity onPress={() => navigate('Card')} style={styles.button}>
            <View style={styles.itemCountContainer}>
                <Text style={styles.itemCountText}>{cartItems.length}</Text>
            </View>
            <Icon name="cart" size={32} color="#101010" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        marginRight: 10,
    },
    itemCountContainer: {
        backgroundColor: '#ff7d7d',
        width: 28,
        height: 28,
        borderRadius: 14,
        position: 'absolute',
        right: 22,
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2000,

    },
    itemCountText: { color: "#fff", fontWeight: "bold", },


})

export default ShoppingCart