import {Text, StyleSheet} from 'react-native';

interface TextProps {
    text: any;
    style: any;
}

const CustomText: React.FC<TextProps> = ({text, style}) => {
    return (
        <Text style={[styles.font, style ]}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    font: {
        fontFamily: 'SourceSansPro-Regular',
    }
})

export default CustomText