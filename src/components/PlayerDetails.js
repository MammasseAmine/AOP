const PlayerDetails = (props) => {
  return(
<>
<div className="header"> {props.opnings.title} <br/><span>Op {props.opnings.op_number}</span> </div>
  
  
  <div className="row">
    <div className=" col-12 d-flex">
      <img src={props.opnings.img_src} className="img-thumbnail" />
    </div>
    
</div>
</>
  )
}

export default PlayerDetails;