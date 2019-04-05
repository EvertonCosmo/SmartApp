import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Bolinha from './Bolinha';

export default class Retangulo extends Component{
    render(){
        return(
            <View style={styles.retangulo}>
                <View style={styles.circle}>
                    <Bolinha></Bolinha>
                </View>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    retangulo: { 
        marginLeft: '5%',
        marginTop: '5%',
        width: wp('45%'),
        height: hp('40%'),
        backgroundColor: '#21325b'
      },
      circle: {
        flexDirection: 'row',
        marginLeft: '45%',
        width: wp('45%'),
        height: hp('40%'),
        backgroundColor: '#21325b',
        borderRadius: 1000
      },
      circle2:{
        flexDirection: 'row',
        marginLeft: '45%',
        width: wp('5%'),
        height: hp('10%'),
        backgroundColor: 'red',
        borderRadius: 1000
      }



});
