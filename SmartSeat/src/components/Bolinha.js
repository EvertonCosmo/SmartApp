import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Bolinha extends Component{


        colors=[
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
            value:'white',
        },
        {
            value:'orange'
        },
        {   
            value:'pink'
        }
    ];

 //mudaCor = () => {
//     color = this.gera_cor()
//     this.setState({color: color})
//   }
    // ];
    
    selected(object){
        // this.setState({backgroundColor:'yellow'})
        object.value = 'yellow';
        
    }

    renderItem(array){
        
        if(array.length > 5){ 
            return array.map((item,prop) => {
                return (
                    // <TouchableOpacity> 
                         <View key={prop} style={[styles.seat, {backgroundColor: item.value}]}><Text style={styles.txt}>{prop}</Text></View>
                    //  </TouchableOpacity>
                );
            });
        }else if(array.length <=3){
            return array.map((item,prop) => {

                return (
                    
                    <View key={prop} style={[styles. seatSubtitle,{backgroundColor:'red', marginRight:90}]}>
                             {/* <Text style={{fontSize:hp(5),textAlign:'right', color:'white'}}>{item.title}</Text> */}
                    </View>

                );
            });
        }

    }


    render(){
        return(
      
         <View style={{flexDirection: 'row', padding:6,}}>{this.renderItem(this.colors)}
                
         </View>
 
       
         
        );
    }
}

const styles = StyleSheet.create({

    seat: {
        marginLeft: '2%',
        marginTop: '0.5%',
        width: wp('10%'),
        height: hp('20%'),
        borderRadius: 1000,
    
      },
      seatSubtitle: {
        marginLeft: '2%',
        marginTop: '0.5%',
        width: wp('10%'),
        height: hp('20%'),
        borderRadius:1000
    
      },
      txt:{
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        padding:26
      },

    //   Items

    textSubtitle:{
        fontSize: 22,
        color: '#fff',
        marginHorizontal: '2.5%',
        marginVertical: '2.5%',
        padding: 1
      }


});
