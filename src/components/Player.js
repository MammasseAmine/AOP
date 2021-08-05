import {useState, useEffect , useRef} from 'react';
import Controles from './Controles';
import PlayerDetails from './PlayerDetails';



function Player(props){

  const  audio_elm = useRef(null);
  const  [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if(isPlaying){
      audio_elm.current.play();
    }else{
      audio_elm.current.pause();

    }
  });

  const skipOp = (forwards = true) =>{

    if(forwards){

      props.setCurruentOpIndex(()=>{
        let tmp = props.currentOpIndex;
        tmp++;

        if (tmp > props.op.length - 1){
          tmp = 0;
        }
        return tmp;
      });

    }else{

      props.setCurruentOpIndex(()=>{
        let tmp = props.currentOpIndex;
        tmp--;

        if (tmp <  0){
          tmp = props.op.length - 1;
        }
        return tmp;
      });

    }

  }

  return (
    <>
    <div className="col-lg-8 col-12 ">
    <section className="container animate__animated animate__zoomIn animate__slower">

    <audio src={props.op[props.currentOpIndex].src} ref = {audio_elm} ></audio>

      <PlayerDetails  opnings={props.op[props.currentOpIndex]}/>

       <Controles isPlaying={isPlaying} setIsPlaying={setIsPlaying} skipOp = { skipOp}/> 

      <div className="col-12 nxt-prv">

      <p className="float-end h4"> <b>{props.op[props.nextOpIndex].title} Op {props.op[props.nextOpIndex].op_number}</b> <i className="fas fa-angle-right"></i></p>
      <p className="float-start h4 "><i className="fas fa-angle-left"></i>    <b>{props.op[props.prevOpIndex].title} Op {props.op[props.prevOpIndex].op_number}</b> </p>

      </div>
  
     

  
  </section>

  </div>
  
  <footer><p>Made With ♥ MAMMASSE Amine</p></footer>
  </>
  )
}

export default Player;