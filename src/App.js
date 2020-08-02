import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
import './App.scss';
import Window from './components/Window'
// import io from 'socket.io-client';

function App() {

  // const [state, setstate] = useState("this");


  // function fetchData(){
  //   Axios.get('http://localhost:8080/backend')
  //     .then(response => (
  //       setstate(response.data.data)
  //     ));
  // }

  // function openSocket(){
    // var socket = io();
  // }

  useEffect(() => {
    // fetchData();
    // openSocket();
  }, [])

  return (
    <div className="App">
      <Window />
    </div>
  );
}

export default App;
