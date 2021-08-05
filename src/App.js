import {useState, useEffect} from 'react';
import Player from './components/Player'


function App() {
 /*    liste of  Songs              */
 const [op, setOp] = useState([
   {
     title : "Attaque des Titans",
     op_number : "n° 1",
     img_src : "./images/Attaque_des_Titans.jpg",
     src : "./openings/Attaque_des_Titans.mp3"
   },
   {
    title : "One Piece",
    op_number : "n° 11",
    img_src : "./images/One_Piece.jpg",
    src : "./openings/One_Piece.mp3"
  },
  {
    title : "Naruto Shippûden",
    op_number : "n° 3",
    img_src : "./images/Naruto_Shippûden.jpg",
    src : "./openings/Naruto_Shippûden.mp3"
  }
 ]);

const [currentOpIndex, setCurruentOpIndex] = useState(0);
const [nextOpIndex, setNextOpIndex] = useState(currentOpIndex + 1);

const [prevOpIndex, setPrevOpIndex] = useState(op.length - 1);



useEffect(() => {

  setNextOpIndex(()=>{
    if(currentOpIndex + 1 > op.length - 1) {
      return 0;
    }else {
      return currentOpIndex + 1;
    }
  })

},[currentOpIndex]);

useEffect(() => {

  setPrevOpIndex(()=>{
    if(currentOpIndex - 1 <0) {
      return op.length - 1 ;
    }else {
      return currentOpIndex - 1;
    }
  })

},[currentOpIndex]);



  return (
    <div className="row d-flex justify-content-center box">
    <p className="title display-1 animate__animated animate__fadeInTopLeft animate__slower">Anime<img src="images/animation_200_krva98rx.gif"  height="100" width="100" />pening Player</p>
   <Player 
   currentOpIndex={currentOpIndex}
    setCurruentOpIndex = {setCurruentOpIndex}
    nextOpIndex = {nextOpIndex}
    prevOpIndex = {prevOpIndex}
    op = {op}
    />
</div>

  );
}

export default App;
