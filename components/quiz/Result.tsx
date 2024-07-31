import { Pressable, StyleSheet, Text, View } from "react-native";

export interface ResultProps {
    pontuation: number
    totalQuests: number
    restart: () => void
}

export default function Result(props: ResultProps) {

    const {pontuation, totalQuests, restart} = props

    return (
        <View style={styles.container}>
            <Text style={styles.text}>You're Correct</Text>
            <Text style={styles.feature}>
                {Math.round((pontuation / totalQuests) * 100)}%
            </Text>
            <Pressable style={styles.button} onPress={restart}>
                <Text style={styles.textButton}>Restart</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 15,
        opacity: 0.8,
        borderRadius: 100
    },
    text: {
        color: '#bbb',
        fontSize: 20
    },
    feature: {
        color: '#fff',
        fontSize: 60,
        fontWeight: 700
    },
    button: {
        marginTop: 20,
        backgroundColor: '#2E4D48',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    textButton: {
        color: '#fff',
        fontWeight: 500
    }
})