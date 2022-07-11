import './App.css';
import {useState} from 'react'
import { connect} from 'react-redux'
import { incrementNumber, decrementNumber} from './actions/action'

function App({count,incrementNumber,decrementNumber}) {

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
      count : state.count                 // count huwa lprops , state.count huwa dial reducer 
  }

}

function mapDispatchToProps(dispatch){

return  {
  incrementNumber : () => dispatch(incrementNumber()),
  decrementNumber : () => dispatch(decrementNumber())
}

}

export default connect(mapStateTopProps,mapDispatchToProps)(App);
