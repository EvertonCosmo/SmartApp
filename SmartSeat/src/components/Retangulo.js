import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Bolinha from './Bolinha';

export default class Retangulo extends Component{
    render(){
        return(
            <View style={styles.retangulo}>



                <View style={styles.circle}></View>
                                            
               <View style={styles.circle2}></View>

          

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
        width: wp('40%'),
        height: hp('40%'),
        backgroundColor: '#21325b',
        borderRadius: 1000
      },
      circle2: {
        backgroundColor: '#226699',
        flexDirection: 'row',
        width: wp('3%'),
        height: hp('5%'),
        marginLeft: '-2.5%',
        marginTop: '-45%',
        borderRadius: 1000
      }

});
