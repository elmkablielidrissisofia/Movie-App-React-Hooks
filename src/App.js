import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddMovie from './component/AddMovie';

function App() {
  const [Movie,setMovie]=useState([{titre:"colombiana",rate:4,image:"https://fr.web.img5.acsta.net/medias/nmedia/18/83/57/40/19733268.jpg"},{titre:"sans un bruit",rate:3,image:"https://media.senscritique.com/media/000019286668/325/Sans_un_bruit_2.jpg"}])
  const AjoutMovie=(titre,rate,image)=>{
    setMovie([...Movie,{titre:titre,rate:rate,}])
  }
  return (
    <div className="App">
      <movieListe movie={Movie}/>
      <AddMovie AjoutMovie={AjoutMovie} />
    </div>
  );
}

export default App;
