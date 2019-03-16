import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class Bolinha extends Component{
    
    // state = [
        color=[
            {
            value:'blue',
            
            },
        {
            value:'red',
            
        },{
            value:'green',
        
        },
        {
            value:'#00FFFF',
           
        },
        {   
            value:'gray',
            
        },
        {
            value:'white'
        },
        {
            value:'orange'
        },
        {   
            value:'pink'
        }
    ];


    // ];
    
      
    renderBall(){
        return this.color.map((item,prop) => {
            return (
                <View style={[styles.assento, {backgroundColor: item.value}]}><Text style={styles.txt}>{item.key}</Text></View>

            );
        });

    }


    render(){
        return(
           
            // <View>
            //   {state.map((prop, key) => {
            //      return (
                    
            //         //  <View style={[styles.assento, {backgroundColor: this.state.color}]}></View>
            //         //  <Button style={{borderColor: prop[0]}}  key={key}>{prop[1]}</Button>
                     
            //     );
            //  })}
            
            
            
            
            // </View>
            
            <View style={{flexDirection: 'row'}}>{this.renderBall()}</View>

         
        );
    }
}

const styles = StyleSheet.create({
   
    assento: {
        marginLeft: '2.5%',
        marginTop: '0.5%',
        width: wp('6%'),
        height: hp('10%'),
        borderRadius: 1000
      },
      txt:{
        color: '#000',
        fontSize: 20,
        textAlign: 'center'
      }
});
export default Bolinha;