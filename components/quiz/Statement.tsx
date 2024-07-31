import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export interface StatementProps {
    statement: string
}

export default function Statement(props: StatementProps) {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.2)']} style={styles.background}/>
            <Text style={styles.text}>{props.statement}</Text>           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#852E9C',
        textAlign: 'center',
        padding: 20,
        borderEndStartRadius: 100,
        borderStartEndRadius: 100
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderEndStartRadius: 100,
        borderStartEndRadius: 100
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        opacity: 0.89
    }
})