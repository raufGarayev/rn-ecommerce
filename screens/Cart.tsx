import {useState, useEffect} from 'react'
import {View, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import CustomText from '../components/CustomText'
import { decCartAmount, incCartAmount } from '../redux/slices/cartSlice'

const Cart = () => {
    const cart = useSelector((state: any) => state.cart)
    const dispatch = useDispatch()

    const [total, setTotal] = useState(0)

    const handleDecreaseAmount = (id) => {
        dispatch(decCartAmount(id))
    }

    const handleIncreaseAmount = (id) => {
        dispatch(incCartAmount(id))
    }

    useEffect(() => {
        let totalPrice = 0;
        cart.forEach((item) => {
          totalPrice += item.price * item.amount;
        });
        setTotal(totalPrice);
      }, [cart]);

    return (
        <View style={{height: '100%'}}>
            <Navbar title={"Cart"} button={false} />
            <ScrollView>
                {cart.map(c => (
                    <View key={c.id} style={styles.product}>
                        <Image source={{uri: c.image}} style={styles.image}/>
                        <View style={styles.productInner}>
                            <CustomText style={styles.title} text={c.title} />
                            <View style={styles.bottom}>
                                <View style={styles.amount}>
                                    <TouchableOpacity onPress={() => handleDecreaseAmount(c.id)}><CustomText text={"-"} style={styles.amountText} /></TouchableOpacity>
                                    <View style={styles.amountNumber}>
                                        <CustomText style={styles.amountText} text={c.amount} />
                                    </View>
                                    <TouchableOpacity onPress={() => handleIncreaseAmount(c.id)}><CustomText text={"+"} style={styles.amountText} /></TouchableOpacity>
                                </View>
                                <CustomText style={styles.price} text={c.amount ? `${c.price * c.amount} AZN` : `${c.price} AZN`} />
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.cartBottom}>
                <View>
                    <CustomText text={"Total"} />
                    <CustomText text={`${total} AZN` } />
                </View>
                <TouchableOpacity><CustomText text={"Buy"} /></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    product: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    productInner: {
        justifyContent: 'space-between'
    },
    image: {
        width: 140,
        height: 150,
        resizeMode: 'contain',
    },
    title: {
        color: '#000',
        fontSize: 16,
        flexWrap: 'wrap'
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '65%'
    },
    amount: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#dedede',
        borderRadius: 50,
        gap: 10,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    amountText: {
        color: '#000',
        fontSize: 15,
    },
    amountNumber: {
        backgroundColor: '#f2f2f2',
        borderRadius: 50,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    price: {
        color: '#000',
        fontSize: 16,
        fontWeight: '700'
    },
    cartBottom: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#dedede',
        borderTopColor: '#dedede',
        padding: 10
    }
})

export default Cart