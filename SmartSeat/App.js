
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IndevidamenteOcupada from './src/components/IndevidameteOcupada';
import PassageiroAusente from './src/components/PassageiroAusente';
import PoltronaNComprada from './src/components/PoltronaNComprada';
import Bolinha from './src/components/Bolinha';


export default class App extends Component {
  state = {
    color: 'red'
  };

  gera_cor = function(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
  
    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}

  mudaCor = () => {
    color = this.gera_cor()
    this.setState({color: color})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bus}> 
          <Bolinha></Bolinha>
          <Bolinha></Bolinha>
           </View>
        <View style={styles.legenda}>
          <Text style={styles.text}>Legenda:</Text>
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
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
 
  
  bus: { //'#21325b' -> Azul escuro
    flex: 1,
    backgroundColor: '#226699'
  },
  text: {
    top:-5,
    fontSize: 25,
    color: '#fff',
    marginHorizontal: '2.5%',
    flexDirection: 'column'
  },
 
  legenda: { //'#226699' -> Azulzinho
    flex: 0.45,
    flexDirection: 'column',
    backgroundColor: '#309323',
    padding: 10
  }
});
