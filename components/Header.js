import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors'
import TitleText from './TitleText';


const Header = props => {


  return (
    <View style={styles.header}>
      <TitleText>{props.title}</TitleText>
    </View>
  );
};
//adding streak
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop:35,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: 'cente'
        
    },
});

//comment 

export default Header;