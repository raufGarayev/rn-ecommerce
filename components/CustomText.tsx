import {Text, StyleSheet} from 'react-native'


const CustomText = ({text, style}) => {
    return (
        <Text style={[style, styles.font]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    font: {
        fontFamily: 'SourceSansPro-Regular'
    }
})

export default CustomText