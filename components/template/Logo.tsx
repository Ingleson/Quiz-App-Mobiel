import { StyleSheet, Text, View } from "react-native";

export default function Logo() {
    return (
        <View>
            <Text style={styles.fontPrimary}>SPACE QUIZ</Text>
            <Text style={styles.font}>Questions from another world!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    font: {
        color: '#fff',
        fontFamily: 'A-Space_Thin_Demo',
        fontSize: 15
    },
    fontPrimary: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'SPACEMISSION',
        fontSize: 40
    }
});