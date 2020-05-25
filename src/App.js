import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from './table';
import Counter from './state';
import Score from './score';
import CPUForm from './Form'
function App() {
  return (
    <div className="App">
      {/* <Table/> */}
      {/* <Counter/> */}
      {/* <Score></Score> */}
      <CPUForm></CPUForm>
    </div>
  );
}

export default App;
