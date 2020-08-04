import React from 'react';
import { View, StyleSheet, Button, Image, Text } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  const { roundsNumber, userNumber, beginNewGame } = props;

  return (
    <View style={style.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View>
        <Image
          fadeDuration={300}
          source={require('../assets/success.png')}
          style={style.imageContainer}
        />
      </View>
      <View style={style.resultContainer}>
        <BodyText style={style.resultText}>
          Your phone needed <Text style={style.highlights}>{roundsNumber}</Text>{' '}
          rounds to guess your number{' '}
          <Text style={style.highlights}>{userNumber}</Text>{' '}
        </BodyText>
      </View>
      <MainButton onPress={beginNewGame}>NEW GAME</MainButton>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100% ',
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    width: 300,
    height: 300,
    overflow: 'hidden',
    marginVertical: 30,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 18,
  },
  highlights: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
