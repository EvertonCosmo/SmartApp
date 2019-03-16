import React, {Component} from 'react';


class Bolinha extends Component{

    state = {
        color: [
            {
            value:'blue',
            key:1
            },
        {
            value:'red',
            key:2
        },{
            value:'green',
            key:3
        },
        {
            value:'yellow',
            key:4
        },
        {   
            value:'gray',
            key:5
        }]

      };
    
    renderBall(){
        return state.map((item) => {
            return (
                <View style={[styles.assento, {backgroundColor: this.item.color}]}>{item.key}</View>

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
            
            <View>{this.renderBall()}</View>

         
        );
    }

    
}

const styles = StyleSheet.create({
   
    assento: {
        marginLeft: '2.5%',
        marginTop: '0.5%',
        width: 40,
        height: 40,
        borderRadius: 1000,
      },
});
export default Bolinha;