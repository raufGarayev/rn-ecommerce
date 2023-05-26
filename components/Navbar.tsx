import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import CustomText from './CustomText'

const Navbar = ({title, button}) => {
    return (
        <View style={styles.navbar}>
            <CustomText style={styles.navTitle} text={title} />
            {button && (
                <TouchableOpacity></TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 60,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    navTitle: {
        fontSize: 32,
        fontWeight: '700',
        color: '#000',
        fontFamily: 'SoureSansPro-Regular'
        
    }
})

export default Navbar