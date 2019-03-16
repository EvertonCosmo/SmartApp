import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
<<<<<<< HEAD
=======
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
>>>>>>> bf17e4f4678d7d0262532b2df0e0f6de60c0d6d5

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
<<<<<<< HEAD
                <View key = {prop} style={[styles.assento, {backgroundColor: item.value}]}>
                     <Text style={{color:'#000',fontSize:20,textAlign:'center', padding:20}}>{prop}</Text>
                </View>
                
=======
                <View style={[styles.assento, {backgroundColor: item.value}]}><Text style={styles.txt}>{item.key}</Text></View>

>>>>>>> bf17e4f4678d7d0262532b2df0e0f6de60c0d6d5
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
            
<<<<<<< HEAD
            <View style={{flexDirection:'row',padding:10}}>{this.renderBall()}</View>
            // <View style={{flexDirection:'row'}}>{this.renderBall()}</View>
=======
            <View style={{flexDirection: 'row'}}>{this.renderBall()}</View>

>>>>>>> bf17e4f4678d7d0262532b2df0e0f6de60c0d6d5
         
        );
    }
}

const styles = StyleSheet.create({
   
    assento: {
        marginLeft: '2.5%',
        marginTop: '0.5%',
<<<<<<< HEAD
        width: 70,
        height: 70, 
        borderRadius: 1000,
        // padding: 20,
        
    
=======
        width: wp('6%'),
        height: hp('10%'),
        borderRadius: 1000
>>>>>>> bf17e4f4678d7d0262532b2df0e0f6de60c0d6d5
      },
      txt:{
        color: '#000',
        fontSize: 20,
        textAlign: 'center'
      }
});
export default Bolinha;