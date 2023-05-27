import {View, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import CustomText from '../components/CustomText'
import Icon from 'react-native-vector-icons/FontAwesome'
import { removeFavs } from '../redux/slices/favsSlice'


const Favorites = () => {
    const favs = useSelector((state: any) => state.favs)
    const dispatch = useDispatch()

    const renderStars = (rate) => {
        const fullStars = Math.floor(rate);
        const halfStar = rate - fullStars >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
        const stars = [];
    
        // Render full stars
        for (let i = 0; i < fullStars; i++) {
          stars.push(<Icon key={`full-star-${i}`} name="star" color="orange" />);
        }
    
        // Render half star if applicable
        if (halfStar) {
          stars.push(<Icon key="half-star" name="star-half-full" color="orange" />);
        }
    
        // Render empty stars
        for (let i = 0; i < emptyStars; i++) {
          stars.push(<Icon key={`empty-star-${i}`} name="star-o" color="orange" />);
        }
    
        return stars;
    };

    const handleFavRemoval = (product) => {
        dispatch(removeFavs(product))
        console.log(favs)
    }
    
    return (
        <View>
            <Navbar title={"Favorites"} button={true}/>
            <ScrollView style={styles.products}>
                {favs?.map(f => (
                    <View key={f.id} style={styles.product}>
                        <Image source={{ uri: f.image }} style={styles.image} />
                        <View style={styles.productInner}>
                            <View style={{gap: 10}}>
                                <CustomText text={f.title} style={styles.title} />
                                <View style={styles.rating}>
                                    <CustomText text={f.rating.rate} />
                                    <View style={styles.ratingStar}>
                                        {renderStars(f.rating.rate)}
                                    </View>
                                    <CustomText text={`(${f.rating.count})`} />
                                </View>
                            </View>
                            <CustomText text={`${f.price} AZN`} />
                            <View style={styles.bottom}>
                                <TouchableOpacity onPress={() => handleFavRemoval(f)} style={styles.rmvBtn}><CustomText text={"Remove"} style={styles.rmvBtnText} /></TouchableOpacity>
                                <TouchableOpacity style={styles.cartBtn}><CustomText text={"Add to Cart"} style={styles.cartBtnText} /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    products: {
      height: '100%',
      backgroundColor: '#fff'
    },
    product: {
      flexDirection: 'row',
      backgroundColor: 'white',
      gap: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#dedede',
      paddingVertical: 7
    },
    productInner: {
      flex: 1,
      justifyContent: 'space-between',
    },
    image: {
      width: 140,
      height: 150,
      resizeMode: 'contain',
    },
    title: {
      fontSize: 14,
      fontWeight: '700',
      color: '#000',
    },
    rating: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    ratingStar: {
      flexDirection: 'row',
      gap: 2,
    },
    bottom: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rmvBtn: {
      width: 100,
      borderWidth: 1,
      borderColor: '#000',
      paddingVertical: 5,
      marginRight: 10,
      borderRadius: 4,
      alignItems: 'center',
      justifyContent: 'center',
    },
    rmvBtnText: {
      color: '#000',
      fontSize: 15,
    },
    cartBtn: {
      flex: 1,
      backgroundColor: '#000',
      paddingHorizontal: 10,
      borderRadius: 4,
      alignItems: 'center',
      marginRight: 10,
      paddingVertical: 1,
    },
    cartBtnText: {
      color: '#fff',
      fontSize: 15,
      paddingVertical: 5,
    },
  });
  

export default Favorites