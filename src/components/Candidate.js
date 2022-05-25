import classes from './Candidate.module.css';

const Candidate = (props) => {
  
  
  return (
    <li className={classes.meal} onClick={()=>{props.ondetail(props.id)}}>
      <div>
        <h3 style={{display: "inline"}}>Name: </h3>
        <h3 style={{display: "inline"}}>{props.name}</h3>
        <div></div>
        <h3 style={{display: "inline" }}>Status: </h3>
        <div style={{display: "inline" , marginLeft:'10px'}} className={classes.price}>{props.status}</div>
       
      </div>
      <div></div>
    </li>
  );
};

export default Candidate;
