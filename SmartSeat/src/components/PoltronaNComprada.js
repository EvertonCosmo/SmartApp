import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class PoltronaNComprada extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.assento}></View>
                <View><Text style={styles.text}>Poltrona Não Comprada</Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    assento: {
        marginLeft: '2.5%',
        marginTop: '0.5%',
        width: 40,
        height: 40,
        borderRadius: 1000,
        backgroundColor: 'gray'
      },
      text: {
        fontSize: 22,
        color: '#fff',
        marginHorizontal: '2.5%',
        marginVertical: '2.5%',
        padding: 5
      }
});

export default PoltronaNComprada;