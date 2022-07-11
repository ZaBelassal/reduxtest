import './App.css';
import {useState} from 'react'
import { connect } from 'react-redux' 

function App({count}) {

  // const [number, setNumber] =useState(0)

  // function incrementNumber(){
    
  //   setNumber(number+1)

  // }

  // function decrementNumber(){
  //  setNumber(number-1)
  // }

  return (
    <div className="App">
          Redux TUTO
          <button onClick={incrementNumber}>Increment +</button>
          {count}
          <button onClick={decrementNumber}>Decrement -</button>
    </div>
  );
}

function mapStateTopProps(state){

  return {
      count : state.count
  }

}

export default connect(mapStateTopProps)(App);
