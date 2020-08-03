import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const GameOverScreen = (props) => {
  const { roundsNumber, userNumber, beginNewGame } = props;

  return (
    <View style={style.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of Rounds: {roundsNumber}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="NEW GAME" onPress={beginNewGame} />
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
