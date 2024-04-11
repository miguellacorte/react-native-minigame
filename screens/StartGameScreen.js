import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Button from "../components/Button";


const StartGameScreen = (props) => {
    function confirm () {
        console.log('confirm function');
        props.numberConfirm();
    }

    function numberReset() {
      props.handleNumberInput(0);
      props.number = ''
    }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Guess my number!</Text>
      <View style={styles.numberInputComponent}>
        <Text style={{ fontSize: 18, margin: 10 }}>Enter a number</Text>
        <TextInput
          style={styles.numberInput}
          keyboardType="numeric"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={props.handleNumberInput}
          value={props.number}
          defaultValue={''}
        ></TextInput>
        <View style={styles.buttonsComponent}>
          <View style={styles.buttonContainer}>
            <Button title=" Reset " onPress={numberReset} />
          </View>
          <View style={styles.buttonContainer}>
            <Button title=" Confirm " onPress={confirm}  />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 100,
    margin: 10,
  },
  numberInput: {
    fontSize: 32,
    fontWeight: "bold",
    margin: 15,
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    width: 36,
  },

  buttonsComponent: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
   
  },
  numberInputComponent: {
    borderRadius: 20,
    padding: 20,
    margin: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    width: 300,
  },
  header: {
    margin: 50,
    fontSize: 20,
    fontWeight: "bold",
  },

  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StartGameScreen;
