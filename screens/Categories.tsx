import { useEffect } from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import { useGetCategoriesQuery } from '../redux/slices/apiSlice'
import CustomText from '../components/CustomText'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { setFilter } from '../redux/slices/filterSlice'

const formatCategory = (category: any) => {
    let formattedCategory = category.charAt(0).toUpperCase() + category.slice(1)
    formattedCategory = formattedCategory.replace("Men's clothing", "Men").replace("Women's clothing", "Women")
    return formattedCategory;
}

const Categories = ({navigation}) => {

    const {data} = useGetCategoriesQuery([])
    const dispatch = useDispatch()

    const handleCategory = (category: any) => {
        dispatch(setFilter(category))
        navigation.navigate('Home')
    }

  return (
    <View style={styles.categories}>
        {data?.map((category: string, i: number) => (
            <TouchableOpacity onPress={() => handleCategory(category)} key={i} style={styles.category}>
                <CustomText text={formatCategory(category)} style={styles.catText} />
                <Icon name="chevron-forward" color="#000" size={20} />
            </TouchableOpacity>
        ))}
        <TouchableOpacity 
            style={styles.category}
            onPress={() => {
                dispatch(setFilter(''))
                navigation.navigate('Home')
            }}
        >
            <CustomText text={"All"} style={styles.catText} />
            <Icon name="chevron-forward" color="#000" size={20} />
        </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
    categories: {
        height: '100%',
        backgroundColor: '#fff'
    },
    category: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: .5,
        borderBottomColor: '#000',
    },
    catText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000'
    }
})

export default Categories