import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [confirmedNumber, setConfirmedNumber] = useState();
  const [gameStarted, setGameStarted] = useState(false);
  const [numberedGuessed, setnumberedGuessed] = useState(false);

  function numberConfirm() {
    if (number <= 0 || number > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "cancel" },
      ]);
      setNumber("");
    } else {
      setConfirmedNumber(number);
      setGameStarted(true);
    }
  }

  function GuessedNumber() {
    setnumberedGuessed(true);
    
  }

  function handleNumberInput(inputNumber) {
    setNumber(inputNumber);
  }

  let Screen = gameStarted ? (
    <GameScreen confirmedNumber={confirmedNumber} fnctnGuessedNumber={GuessedNumber}/>
  ) : (
    <StartGameScreen
      number={number}
      numberConfirm={numberConfirm}
      handleNumberInput={handleNumberInput}
    />
  );

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>{Screen}</View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
