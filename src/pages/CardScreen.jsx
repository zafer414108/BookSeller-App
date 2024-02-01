import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Seperator from '../components/Separator'
import { REMOVE_FROM_CART } from '../redux/actions/actionTypes'
import { useNavigation } from '@react-navigation/native'


const CardScreen = () => {
    const cartItems = useSelector(state => state)
    const dispatch = useDispatch()
    const removeItemFromCart = (item) => {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: { id: item.id },
        });
    };


    const { navigate } = useNavigation()
    return (
        <View style={styles.container}>
            <FlatList data={cartItems} keyExtractor={item => item.id.toString()} ItemSeparatorComponent={Seperator()} renderItem={({ item }) => (
                <View style={styles.bookItemCont}>
                    <Image source={{ uri: item.imgUrl }} style={styles.tumbnail} />
                    <View style={styles.bookItemMetaCont}>

                        <Text style={styles.textTitle}>{item.name}</Text>
                        <Text style={styles.textAuthor}>{item.author}</Text>

                    </View>
                    <View style={styles.buttonCont}>
                        <TouchableOpacity onPress={() => removeItemFromCart(item)} style={styles.button}>
                            <Text style={styles.btnText}>Remove - </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            )}
                ListEmptyComponent={() => <View style={styles.emptyCont}>
                    <Text style={styles.emptyText}>Cart is empty 😔</Text>
                    <TouchableOpacity onPress={() => navigate('Books')} style={styles.btnEmpty}>
                        <Text style={styles.btnText}>Go To Books</Text>
                    </TouchableOpacity>
                </View>}
            />
        </View>
    )
}

export default CardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    tumbnail: {
        width: 100,
        height: 150,
    },
    bookItemCont: {
        flexDirection: 'row',
        padding: 10,
    },
    bookItemMetaCont: { padding: 5, paddingLeft: 10 },
    textTitle: { fontSize: 22, fontWeight: '400' },
    textAuthor: { fontSize: 18, fontWeight: 'bold' },
    buttonCont: {
        position: 'absolute', top: 110,
        right: 10,
    },
    button: { borderRadius: 8, backgroundColor: '#ff3333', padding: 5 },
    btnText: { fontSize: 18, color: '#fff', },
    emptyCont: { flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 250, gap: 10 },
    emptyText: { fontSize: 28, },
    btnEmpty: { backgroundColor: 'blue', padding: 10, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
})