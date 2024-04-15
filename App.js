import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [confirmedNumber, setConfirmedNumber] = useState();
  const [gameStarted, setGameStarted] = useState(false);
  const [numberGuessed, setnumberGuessed] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  console.log(gameStarted, gameOver);

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

  function gameReset() {
    setGameStarted(false);
    setnumberGuessed(false);
    setGameOver(false);
    setNumber("");
    setConfirmedNumber();
  }

  function GuessedNumber() {
    setnumberGuessed(true);
  }

  function handleNumberInput(inputNumber) {
    setNumber(inputNumber);
  }

  return (
    <>
      <StatusBar style="auto" />

      <SafeAreaView style={styles.container}>
        {gameOver ? (
          <GameOverScreen gameReset={gameReset} />
        ) : gameStarted ? (
          <GameScreen
            confirmedNumber={confirmedNumber}
            fnctnGuessedNumber={GuessedNumber}
            gameOver={gameOver}
            setGameOver={setGameOver}
            numberGuessed={numberGuessed}
            setnumberGuessed={setnumberGuessed}
          />
        ) : (
          <StartGameScreen
            number={number}
            numberConfirm={numberConfirm}
            handleNumberInput={handleNumberInput}
          />
        )}
      </SafeAreaView>
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
