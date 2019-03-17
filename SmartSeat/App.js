
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IndevidamenteOcupada from './src/components/IndevidameteOcupada';
import PassageiroAusente from './src/components/PassageiroAusente';
import PoltronaNComprada from './src/components/PoltronaNComprada';
import Bolinha from './src/components/Bolinha';
import ItemsSubtitle from './src/components/ItemsSubtitle';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



export default class App extends Component {
  // state = {
  //   color: 'red'
  // };

//   gera_cor = function(){
//     var hexadecimais = '0123456789ABCDEF';
//     var cor = '#';
  
//     // Pega um número aleatório no array acima
//     for (var i = 0; i < 6; i++ ) {
//     //E concatena à variável cor
//         cor += hexadecimais[Math.floor(Math.random() * 16)];
//     }
//     return cor;
// }

//   mudaCor = () => {
//     color = this.gera_cor()
//     this.setState({color: color})
//   }

  render() {
    return (
    
        <View style={styles.bus}> 
            <Bolinha></Bolinha>
            <Bolinha></Bolinha>
          
            <View style={styles.container}>
              {/* <ItemsSubtitle></ItemsSubtitle> */}
              <IndevidamenteOcupada></IndevidamenteOcupada>
              <PassageiroAusente></PassageiroAusente>
              <PoltronaNComprada></PoltronaNComprada>
              
            </View>
         </View>
    );
  }

}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#fff',
    // justifyContent: 'space-between',
    width:wp(100),
    // height:hp(1)

  
  },  
  bus: { //'#21325b' -> Azul escuro
    flex: 1,
    backgroundColor: '#226699'
  },

  
});
