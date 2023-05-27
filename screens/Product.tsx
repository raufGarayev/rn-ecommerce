import { useState } from 'react'
import {View, StyleSheet, TouchableOpacity, ScrollView, Image, TouchableWithoutFeedback, Dimensions} from 'react-native'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import CustomText from '../components/CustomText'
import Icon from 'react-native-vector-icons/FontAwesome'
import { addToCart } from '../redux/slices/cartSlice'

const screenHeight = Dimensions.get('window').height;

const Product = () => {
    const product = useSelector((state: any) => state.selectedProduct)
    const dispatch = useDispatch()
    
    const [size, setSize] = useState('')

    const handleSize = (size: string) => {
        setSize(size)
        console.log("hi")
    }

    const handleAddToCart = (product: any) => {
        dispatch(addToCart(product))
    }

    return (
        <View style={{height: screenHeight}}>
            <Navbar title={"Details"} button={true}/>
            <View style={styles.product}>
                <View style={styles.productInner}>
                    <Image source={{ uri: product.image }} style={styles.image} />
                    <CustomText text={product.title} style={styles.title} />
                    <View style={styles.review}>
                        <Icon name="star" color="orange" size={18}/>
                        <CustomText text={`${product.rating.rate}/5`} style={[styles.reviewText, {color: '#000'}]} />
                        <CustomText text={`(${product.rating.count} reviews)`} style={styles.reviewText} />
                    </View>
                    <CustomText text={product.description} style={styles.description} />
                    <View style={styles.size}>
                        <CustomText text={"Choose size"} style={styles.sizeText} />
                        <View style={styles.sizes}>
                            <TouchableOpacity onPress={() => handleSize('s')} style={[styles.sizeBtn, size === 's' && styles.selectSizeBtn]}><CustomText text={"S"} style={[styles.sizeIcon, size === 's' && styles.selectSizeIcon]} /></TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSize('m')} style={[styles.sizeBtn, size === 'm' && styles.selectSizeBtn]}><CustomText text={"M"} style={[styles.sizeIcon, size === 'm' && styles.selectSizeIcon]} /></TouchableOpacity>
                            <TouchableOpacity onPress={() => handleSize('l')} style={[styles.sizeBtn, size === 'l' && styles.selectSizeBtn]}><CustomText text={"L"} style={[styles.sizeIcon, size === 'l' && styles.selectSizeIcon]} /></TouchableOpacity>
        
                        </View>
                    </View>
                </View>
                
            </View>
            <View style={styles.bottom}>
                <View style={styles.bottomInner}>
                    <View>
                        <CustomText text={"Price"} style={styles.priceText}/>
                        <CustomText text={`${product.price} AZN`} style={styles.priceNum} />
                    </View>
                    <TouchableOpacity style={styles.cartBtn} onPress={() => handleAddToCart(product)}><Icon name="shopping-basket" color="#fff" size={16} /><CustomText text={"Add to Cart"} style={styles.cartText} /></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    product: {
        alignItems: 'center'
    },
    productInner: {
        width: 341
    },
    image: {
        width: '100%',
        height: 350,
        resizeMode: 'contain',
        backgroundColor: '#fff',
    },
    title: {
        width: '100%',
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        marginTop: 15
    },
    review: {
        flexDirection: 'row',
        gap: 5,
        marginTop: 7
    },
    reviewText: {
        fontSize: 15,
    },
    description: {
        marginVertical: 20
    },
    sizeText: {
        fontSize: 16,
        color: '#000',
        fontWeight: '700',
    },
    sizes: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 12,
    },
    sizeBtn: {
        width: 50,
        height: 47,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)'
    },
    selectSizeBtn: {
        backgroundColor: '#000',
    },

    sizeIcon: {
        color: '#000',
        fontSize: 16,
        fontWeight: '700',
    },
    selectSizeIcon: {
        color: '#fff',
    },
    bottom: {
        width: '100%',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        padding: 5,
    },
    bottomInner: {
        width: 341,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceText: {
        color: '#000',
    },
    priceNum: {
        color: '#000',
        fontWeight: '700',
        fontSize: 20
    },
    cartBtn: {
        width: 170,
        height: 50,
        backgroundColor: '#000',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    cartText: {
        color: '#fff',
        fontSize: 16
    }
})

export default Product