import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IndevidamenteOcupada from './src/components/IndevidameteOcupada';
import PassageiroAusente from './src/components/PassageiroAusente';
import PoltronaNComprada from './src/components/PoltronaNComprada';
import Bolinha from './src/components/Bolinha';
import ItemsSubtitle from './src/components/ItemsSubtitle';
import Retangulo from './src/components/Retangulo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {Socket as io} from 'socket.io'
import SocketIOClient from 'socket.io-client'
// import {Socket as io} from 'socket.io'
// import { environment } from '../config/environment';


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


 


constructor(){
  // super(props)
super()

  state = {
    value:'',
  }

}


  componentDidMount(){
    var socket = io.connect('http://localhost:3000'); //connect to server

    // this.socket = SocketIOClient('http://localhost:3000');

    this.socket.on('data', (data) => {
        console.log(data);

    });
      
      
      // document.getElementById('data').innerHTML = data;
    


    // fetch('http://192.168.1.8:30001/api/')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     this.setState({ value: responseJson });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }
 
  
  render() {

   
    return (
    
        <View style={styles.bus}>
        
        <Bolinha></Bolinha>
        {/* <Bolinha></Bolinha>  */}
       
         {/* <View style={styles.container}> */}
               {/* <IndevidamenteOcupada></IndevidamenteOcupada> */}
                              {/* <PassageiroAusente></PassageiroAusente> */}
                                    {/* <PoltronaNComprada></PoltronaNComprada> */}
              
        {/* </View> */}
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
