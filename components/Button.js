import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
        styles.button,
      ]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 100,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
