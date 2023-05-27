import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import CustomText from './CustomText'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';

interface NavbarProps {
    title: string;
    button?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({title, button}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.navbar}>
            <CustomText style={styles.navTitle} text={title} />
            {button && (
                <TouchableOpacity onPress={() => navigation.goBack()}><Icon name="arrow-back" color="#000" size={24} /></TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 60,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    navTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
        
    }
})

export default Navbar