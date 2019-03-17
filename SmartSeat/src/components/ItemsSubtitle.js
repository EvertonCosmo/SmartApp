import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Bolinha from './Bolinha';




class ItemsSubtitle extends Component{

     b = new Bolinha();
    subtitle = [
        {
            title:'indevidamente ocupada'
        },
        {
            title:'ausente'
        },
        {
            title:'não comprada'

        }

    ];


    renderTitle(){
        return this.subtitle.map((item,prop) => {
            return (
                <View key={prop}>
                 <Text  style = {{fontSize:10}}>{item.title}</Text>

             </View>
            );
          
        });

        // return this.subtitle.forEach(element => {
        //     return(
        //         <View> 
        //             <Text>{element} jksd</Text>

        //         </View>
        //     );
        // });
    }

    
    
    
    render(){
        return(
            
            <View style={{flexDirection:'row', padding: '2%'}}>{this.b.renderItem(this.subtitle)}
                {this.renderTitle()}
               
            </View>
        );
    }

} 

export default ItemsSubtitle;