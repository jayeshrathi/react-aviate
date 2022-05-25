import { useState } from 'react';
import classes from './CandidateForm.module.css'
const CandidateForm=()=>{
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setexperience] = useState("");
  const [previous_company,setprevious_company]=useState("")
  const [college_name,setcollege_name]=useState("")
  const [message, setMessage] = useState("");
  
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:8000/candidatecreate/", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          gmail: email,
          experience: experience,
          previous_company:previous_company,
          college_name:college_name,
          status:'applied'
        }),
        headers: { 'content-type': 'application/json' }

      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

    return <div className={classes.App}>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={experience}
        placeholder="Experience"
        onChange={(e) => setexperience(e.target.value)}
      />
      <input
        type="text"
        value={previous_company}
        placeholder="Previous company"
        onChange={(e) => setprevious_company(e.target.value)}
      />
      <input
        type="text"
        value={college_name}
        placeholder="College Name"
        onChange={(e) => setcollege_name(e.target.value)}
      />

      <button type="submit">Create</button>

      <div className="message">{message ? <p style={{color:'red'}}>{message}</p> : null}</div>
    </form>
  </div>

}

export default CandidateForm