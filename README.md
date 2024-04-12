# Guess The Number Game

<img src="./assets/Screenshot%202024-04-11%20at%2022.54.23.png" width="150">

This is a simple number guessing game built with React Native.

## Game Description

The game starts with the user selecting a number between 1 and 99. Once the number is confirmed, the game screen is displayed where the computer tries to guess the number. If the computer guesses the number correctly, the game is over and the user wins.

## Build Process

The game is built using React Native and Expo. The state management is handled using React's `useState` hook.

The game consists of three main screens:

1. `StartGameScreen`: This is where the user selects and confirms a number to start the game.

2. `GameScreen`: This is where the computer tries to guess the number. If the computer guesses the number correctly, the `gameOver` state is set to `true`.

3. `GameOverScreen`: This screen is displayed when the game is over. The user can choose to play again, which resets the game state and returns to the `StartGameScreen`.

The `App` component manages the game state and renders the appropriate screen based on the current state.
