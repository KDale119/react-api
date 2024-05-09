import React from 'react';
import './App.css';
import DataDisplay from "./components/DataDisplay";
import AlbumForm from "./components/AlbumForm";

function App() {
  return (
      <div className="App">
          <h2 className="header">Albums</h2>
          <DataDisplay/>
          <AlbumForm/>
      </div>
  );
}

export default App;
