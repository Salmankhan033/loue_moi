import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {contents, useColor} from '../context';
import ParentScreen from './ParentScreen';



const Test = () => {
  const {appTheme} = useColor();
  return (
    <ParentScreen>  
            <View>
        <Text style={{fontSize:appTheme.dimen.textSize24, 
          fontFamily:'Nunito-Bold'
          }}>{contents('testing')}</Text>
      </View>
      </ParentScreen>

  );
};

export default Test;

const styles = StyleSheet.create({});
