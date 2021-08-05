const Controles = (props) => {
  return(
  
    <div className="col-12 icons">
    <i className="fas fa-fast-backward fa-2x " onClick={() => props.skipOp(false)}></i>
    <i className={props.isPlaying ? "fas fa-pause-circle fa-5x mx-5" :"fas fa-play-circle fa-5x mx-5" } onClick={()=> props.setIsPlaying(!props.isPlaying)}></i>
    <i className="fas fa-fast-forward  fa-2x" onClick={() => props.skipOp()}></i>

  </div>

 

  )
}

export default Controles;