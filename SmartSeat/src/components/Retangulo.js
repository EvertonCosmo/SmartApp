import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Bolinha from './Bolinha';

export default class Retangulo extends Component {
  numbers = [1, 2, 3, 4];
  //, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46

  /*poeBolinha = () => {
    return this.numbers.map((item) => {
      return (
        // <TouchableOpacity> 
        <View style={styles.seat}><Text style={styles.txt}>{item}</Text></View>
        //  </TouchableOpacity>
      );
    });
  }*/
  poeBolinha = (item) => {
    return (
        <View style={styles.seat}><Text style={styles.txt}>{item}</Text></View>
    );
  }

  aux = () => {
    let arr = [];
    this.numbers.map((item) => {
      arr.push(this.poeBolinha(item));
    });
    return arr;
  }

  ballsListArr = this.numbers.map(item => (
    <View style={styles.seat} key={item} ><Text style={styles.txt}>{item}</Text></View>
  ));

  render() {
    return (
      <View>
        <View style={styles.circle}></View>
        <View style={styles.retangulo}>
          <View style={styles.containerSeat}>
            {this.ballsListArr}
          </View>
        </View>
        <View style={styles.circle2}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  retangulo: {
    marginLeft: '10%',
    marginTop: '-31.5%',//'7.5%',
    width: wp('60%'),
    height: hp('55%'),
    backgroundColor: '#21325b',
    padding: 15
  },
  circle: {
    flexDirection: 'row',
    marginLeft: '35%',
    marginTop: '10%',//'10%',
    width: wp('55%'),
    height: hp('55%'),//hp('55%'),
    backgroundColor: '#21325b',
    borderRadius: 1000
  },
  circle2: {
    backgroundColor:  '#226699',
    flexDirection: 'row',
    width: wp('5%'),
    height: hp('7%'),
    marginLeft: '8%',
    marginTop: '-27%',
    borderRadius: 1000
  },
  seat: {
    width: wp('4%'),
    height: hp('7%'),
    borderRadius: 1000,
    backgroundColor: 'red'

  },
  txt: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    flexDirection: 'row',
    padding: 10
  },
  containerSeat: {
    flexDirection: 'column',
    marginTop: '0%',
    marginLeft: '95%'
  }

});
