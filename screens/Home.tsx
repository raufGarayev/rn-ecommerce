import {useEffect} from 'react'
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";
import { useGetProductsQuery } from "../redux/slices/apiSlice";
import { ProductArray } from "../types";
import Navbar from '../components/Navbar';
import CustomText from '../components/CustomText';
import Search from '../components/Search';

const Home = () => {
    
    const { data } = useGetProductsQuery([]);
    
    return (
        <View>
            <Navbar title={"Discover"} button={false} />
            <Search />
            <ScrollView style={styles.container}>
                <View style={styles.row}>
                    {data?.map((p) => (
                        <View key={p.id} style={styles.product}>
                            <Image source={{ uri: p.image }} style={styles.image} />
                            <CustomText style={styles.productTitle} text={p.title} />
                            <CustomText style={styles.productPrice} text={`${p.price} AZN`} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
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
    }
  });

export default Home;
