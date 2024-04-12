import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Alert,
  Pressable,
} from "react-native";

import Button from "../components/Button";

const GameScreen = (props) => {
  const [GuessNumber, setGuessNumber] = useState();
  const [minimum, setMinimum] = useState(1);
  const [maximum, setMaximum] = useState(99);
  const [guessMade, setGuessMade] = useState(false);
  const [guessed, setGuessed] = useState([]);

  function gameOver() {
    if (guessed.length == 4) {
      props.setGameOver(true);
      console.log("Game Over")
    }
  }
  

  console.log(props.confirmedNumber, GuessNumber, props.numberGuessed);

  function guesses() {
    setGuessed(() => [
      ...guessed,
      { text: GuessNumber, key: Math.random().toString() },
    ]);
  }

  let Screen;

  const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // This useEffect handles the side effect of generating a new guess
  useEffect(() => {
    if (!guessMade) {
      setGuessNumber(generateRandomNumber(minimum, maximum));
      
    }
  }, [guessMade]);

  // This useEffect handles the side effect of checking if the number has been guessed

  if (props.confirmedNumber == GuessNumber && !props.numberGuessed) {
    console.log("you won!");
    props.setnumberGuessed(true);
  }

  function higher() {
    setMinimum(GuessNumber);
    setGuessNumber(generateRandomNumber(GuessNumber, maximum));
    setGuessMade(true);
    guesses();
    gameOver();
  }

  function lower() {
    setMaximum(GuessNumber);
    setGuessNumber(generateRandomNumber(minimum, GuessNumber));
    setGuessMade(true);
    guesses();
    gameOver();
  }

  return (
    <>
      {props.numberGuessed ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.modal}>
              <Text style={styles.header}>
                Congratulations! You won the game!
              </Text>
              <Text> Number guessed: {props.confirmedNumber}</Text>
              <Text style={{marginBottom: 30}}> Guesses: {guessed.length}</Text>
              <Pressable>
                <Button title="Play Again" onPress={props.fnctnGuessedNumber} />
              </Pressable>
            </View>
          </View>
        </Modal>
      ) : (
        <View style={styles.container}>
          <Text style={styles.header}>Phone's Guess</Text>
          <View>{Screen}</View>
          <View style={styles.GuessInteractionContainer}>
            <Text style={styles.GuessNumberText}>{GuessNumber}</Text>
            <Text style={{ fontSize: 16 }}>
              is your number higher or lower?
            </Text>
            <View style={styles.buttons}>
              <View style={styles.buttonContainer}>
                <Button title=" Lower " onPress={lower} />
              </View>
              <View style={styles.buttonContainer}>
                <Button title=" Higher " onPress={higher} />
              </View>
            </View>
          </View>
          <View style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>
              Guesses: {guessed.length}
            </Text>
          </View>
          <FlatList
            data={guessed}
            renderItem={(itemData) => {
              return (
                <Text
                  style={styles.renderedGuess}
                  itemData={itemData}
                  id={itemData.item.id}
                >
                  {"Guess #"}
                  {guessed.length - itemData.index} {" Number="}
                  {itemData.item.text}
                </Text>
              );
            }}
          ></FlatList>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    justifyContent: "space-between",
    width: 300,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  renderedGuess: {
    color: "white",
    fontSize: 16,
    margin: 5,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 10,
    backgroundColor: "#007AFF",
    width: 275,
    marginBottom: 10,
    fontSize: 15,
    padding: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonContainer: {
    width: 100,
    margin: 10,
  },
  GuessInteractionContainer: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    justifyContent: "space-between",
    width: 300,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 50,
  },
  header: {
    textAlign: "center",
    padding: 20,
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    width: 300,
  },
  GuessNumberText: {
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    padding: 10,
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 40,
    borderBottomWidth: 1,
    width: 100,
    borderRadius: 20,
  },
});

export default GameScreen;
