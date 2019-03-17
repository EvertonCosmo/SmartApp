import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
class PassageiroAusente extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.seat}></View>
                <View><Text style={styles.text}> Ausente</Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    seat: {
      
        marginLeft: '2%',
        marginTop: '0.5%',
        width: wp(5),
        height: hp(10),
        borderRadius: 1000,
        backgroundColor: 'green'
      },
      text: {
        fontSize: 22,
        color: '#000',
        marginHorizontal: '2.5%',
        marginVertical: '2.5%',
        padding: 5
      }
});

export default PassageiroAusente;