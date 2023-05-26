import {View, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native'

const Search = () => {
    return (
        <View style={styles.search}>
            <TextInput style={styles.searchInput} />
            <TouchableOpacity style={styles.filter}><Text style={styles.fText}>S</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        height: 80,
        paddingHorizontal: 10,
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