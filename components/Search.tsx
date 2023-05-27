import {View, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native'
import Iconic from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

const Search = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.search}>
            <TextInput style={styles.searchInput} />
            <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.filter}><Iconic name='ios-filter' color='white' size={20} /></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 9
    },
    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '100%',
        flex: 1,
        height: 53
    },
    filter: {
        width: 53,
        backgroundColor: '#000',
        height: 53,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fText: {
        color: '#fff'
    }
})

export default Search