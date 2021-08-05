const Suivant = (props) => {
  return(
  
    <div className="col-12">
    <p className="float-end next-op">Next Opening :      <b>{props.nextOp.title} Op {props.nextOp.op_number}</b> </p>

    </div>
 

  )
}

export default Suivant;