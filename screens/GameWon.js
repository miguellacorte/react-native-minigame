import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const GameWon = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Congratulations! You won the game!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default GameWon;