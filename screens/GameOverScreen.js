import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const GameOverScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game Over</Text>
            <Text style={styles.subtitle}>Better luck next time!</Text>
            <Text style={styles.subtitle}>You ran out of attempts (5 tries)</Text>
           <Button title="Try Again" onPress={props.gameReset} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 30,
        color: 'gray',
    },
});

export default GameOverScreen;