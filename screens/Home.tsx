import { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { useGetCategoryProductQuery, useGetProductsQuery } from "../redux/slices/apiSlice";
import { ProductArray } from "../types";
import Navbar from '../components/Navbar';
import CustomText from '../components/CustomText';
import Search from '../components/Search';
import Categories from './Categories';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProduct } from '../redux/slices/selectedProductSlice';
import { setFavs } from '../redux/slices/favsSlice';



const Home = ({navigation}) => {

  const dispatch = useDispatch()
  const filter = useSelector((state: string) => state.filter)
  const favs = useSelector((state: string) => state.favs)

  const { data, isLoading } = useGetProductsQuery();
  const {data: cats, isLoading: isCatsLoading} = useGetCategoryProductQuery(filter)
  const [filteredProds, setFilteredProds] = useState()
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    if(filter === '') {
      
      setFilteredProds(data)
    }
    else {
      setFilteredProds(cats)
    }

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [filter, data, cats])

  const handleProduct = (product: any) => {
    dispatch(setSelectedProduct(product))
    navigation.navigate('Product')
  }

  const handleFavIconPress = (product: any) => {
    dispatch(setFavs(product))
  };

  return (
    <ScrollView>
      <Navbar title={"Discover"} button={false} />
      {loading ? (
        <ActivityIndicator size="large" color="black" style={{height: '80%'}} />
      ) : (
        <ScrollView style={styles.container}>
        <Search />
        
        <View style={styles.row}>
          {filteredProds?.map((p: any) => (
            <TouchableOpacity onPress={() => handleProduct(p)} key={p.id} style={styles.product}>
              <Image source={{ uri: p.image }} style={styles.image} />
              <CustomText style={styles.productTitle} text={p.title} />
              <CustomText style={styles.productPrice} text={`${p.price} AZN`} />
              <TouchableOpacity onPress={() => handleFavIconPress(p)} style={styles.favIcon}>
                  <Icon name={favs.some((favProduct: any) => favProduct.id === p.id) ? 'heart' : 'heart-o'} color='#000' size={20} />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  product: {
    width: '48%',
    marginBottom: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 174,
    borderRadius: 10,
    resizeMode: 'contain'
  },
  productTitle: {
    fontWeight: '700',
    color: '#000',
    fontSize: 13,
    width: '100%',
    marginTop: 5
  },
  productPrice: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.6)',
    width: '100%'
  },
  favIcon: {
    backgroundColor: '#f2f2f2',
    width: 30,
    height: 30,
    position: 'absolute',
    right: 3,
    top: 3,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 4,
    zIndex: 1
  }
});

export default Home;
