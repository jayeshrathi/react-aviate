import { useEffect, useState } from "react"
import Candidate from './Candidate'
import classes from './Candidate.module.css'
import Card from './Layout/Card'
const CandidateList=(props)=>{
 const [list,setList]   =useState([])
 useEffect(()=>{
     try{
     async function getAllCandidates(){
         const response=await fetch("http://127.0.0.1:8000/")
         const data=await response.json()
         console.log(data);
         setList(data)
         
     }
     
     getAllCandidates()}
     catch(error){console.log(error.message)}
     
 },[])
 
    const mealsList = list.map((meal) => (
      <Candidate ondetail={props.ondetail}
              id={meal.id}
        key={meal.id}
        name={meal.name}
        status={meal.status}
      
      />
    ));
   
return (<section className={classes.meals}>
    <Card>
      {!(mealsList.length >0 )&& <h1>No candidated Apllied</h1>}
      <ul>{mealsList}</ul>
    </Card>
  </section>
)
}
export default CandidateList