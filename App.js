import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default class App extends React.Component {
    constructor(props){
      super(props)

      this.state={
        result : '0',
        num1 :'',
        num2 :'',
        st:'',
        ch: 0,
        
      }
    }

    onPress(p){
      if( p == 'C')
      { 
        this.setState( {result:'0' ,
        num1 :'',
        num2 :'',
        st:'',
        ch:0,
        } )
      }
      else 
      { 
        if(this.state.result == '0')
        { 
          this.setState( {result : p , num1 :p } )
        }
        else
        {
          if(this.state.ch == 0)
          {
            this.setState( {num1:this.state.num1 + p , result:this.state.num1 + p} )
          }
         if(this.state.ch == 1)
          {
            this.setState( {num2:this.state.num2 + p  , result:this.state.num2 + p} )
          }
        }
      }
    }

    onPresssym(s){
      if( s=='+' || s=='-'|| s=='*'|| s=='/')
      {
        this.setState( {st : s , ch : 1 , result:this.state.num1}  )
      }
      else if(s == '=')
      { 
        var a=Number(this.state.num1)
        var b=Number(this.state.num2)

        if(this.state.st=='+')
        {
          this.setState( {result : a + b , ch:0 } )
        }
        else if(this.state.st=='-')
        {
          this.setState( {result : a - b , ch:0 }  )
        }
        else if(this.state.st=='*')
        {
          this.setState( {result : a * b , ch:0 }  )
        }
        else if(this.state.st=='/')
        {
          this.setState( {result : a / b , ch:0 }  )
        }
         this.setState( {num1:"" , num2:""} )
      }
    }
      
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.put}>
          <Text style={{alignSelf:'flex-end',color:'white',fontSize:60}}> {this.state.result} </Text>
        </View>

        <View style={styles.gbtn}>
          <TouchableOpacity style={styles.btnS} onPress= { ()=> this.onPress('C') } > 
            <Text style={styles.btnf}>AC</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnS}  onPress= { ()=> this.onPresssym('+') }> 
            <Text style={styles.btnf}>+/-</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnS}  onPress= { ()=> this.onPresssym('%') }> 
            <Text style={styles.btnf}>%</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnS2} onPress= { ()=> this.onPresssym("/") } > 
            <Text style={styles.btnf1}>/</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.gbtn}>
          <TouchableOpacity style={styles.btn} onPress= { ()=> this.onPress('7') }> 
            <Text style={styles.btnf1}>7</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress= { ()=> this.onPress('8') }> 
            <Text style={styles.btnf1}>8</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress= { ()=> this.onPress('9') }> 
            <Text style={styles.btnf1}>9</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnS2} onPress= { ()=> this.onPresssym('*') }> 
            <Text style={styles.btnf1}>X</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.gbtn}>
          <TouchableOpacity style={styles.btn} onPress= { ()=> this.onPress('4') }> 
            <Text style={styles.btnf1}>4</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress= { ()=> this.onPress('5') }> 
            <Text style={styles.btnf1}>5</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress= { ()=> this.onPress('6') }> 
            <Text style={styles.btnf1}>6</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnS2} onPress= { ()=> this.onPresssym('-') }> 
            <Text style={styles.btnf1}>-</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.gbtn}>
          <TouchableOpacity style={styles.btn} onPress= { ()=> this.onPress('1') }> 
            <Text style={styles.btnf1}>1</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress= { ()=> this.onPress('2') }> 
            <Text style={styles.btnf1}>2</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress= { ()=> this.onPress('3') }> 
            <Text style={styles.btnf1}>3</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnS2} onPress= { ()=> this.onPresssym('+') }> 
            <Text style={styles.btnf1}>+</Text> 
          </TouchableOpacity>
        </View>

        <View style={styles.gbtn}>
          <TouchableOpacity style={styles.btn0} onPress= { ()=> this.onPress('0') }> 
            <Text style={styles.btnf1}>0</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress= { ()=> this.onPress('.') }> 
            <Text style={styles.btnf1}>.</Text> 
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnS2} onPress= { ()=> this.onPresssym('=') }> 
            <Text style={styles.btnf1}>=</Text> 
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'black',
    padding:8

  },
  put:{
    flex: 3,
    flexDirection: 'row',
    alignSelf:'flex-end'
  },
  gbtn:{ 
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn:{
    flex: 1, 
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#444444',
    borderRadius: 50,
    margin:8,
    height: 60,
  },
  btn0:{
    flex: 2.2, 
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#444444',
    borderRadius: 40,
    margin:8,
    height: 60,
  },
  btnS:{
    flex: 1, 
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#999999',
    borderRadius: 40,
    margin:8,
    height: 60,
  },
  btnS2:{
    flex: 1, 
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 40,
    margin:8,
    height: 60,

  },
  btnf:{
    fontSize:22,
    color:'black',
  },
  btnf1:{
    fontSize:22,
    color:'white',
  },

});
