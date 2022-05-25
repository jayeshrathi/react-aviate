import { useEffect, useState } from "react"
import Card from './Layout/Card'
import classes from './CandidateDetail.module.css'
const CandidateDetail = (props) => {

    const [detail, setdetail] = useState([])
    const [update, setupdate] = useState(1)


    async function getAllCandidates(detailid) {
        const response = await fetch("http://127.0.0.1:8000/candidatedetailed/" + detailid, {
            method: "GET",
            headers: { 'content-type': 'application/json' }
        })
        const data = await response.json()
        console.log('inside fetching all candidates', data);
        setdetail(data)

    }
    
    async function statuspost(body) {
        const response = await fetch("http://127.0.0.1:8000/candidatedetailed/" + props.id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { 'content-type': 'application/json' }
        })
        const data = await response.json()
        setupdate((prev)=>{return prev++})

    }



    try {
        useEffect(() => {
            getAllCandidates(props.id)
        }, [props.id,update])
    }
    catch (error) { console.log(error.message) }
    
        const acceptHandler = () => {
            console.log("accept handler");
            statuspost({ 'status': "accepted" })
            setTimeout(()=>{   setupdate((prev)=>{return prev+1}); console.log(update);}, 100)
        
            
            
        }

   
        const rejectHandler = () => {
            console.log("reject handler");
            statuspost({ 'status': "rejected" })
            setTimeout(()=>{   setupdate((prev)=>{return prev+1}); console.log(update)}, 100)
         
        }
  


    return (
        <Card>

            <table >
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>{detail['name']}</td>

                    </tr>
                    <tr>
                        <td>Gmail:</td>
                        <td>{detail['gmail']}</td>

                    </tr>
                    <tr>
                        <td>Experience:</td>
                        <td>{detail['experience']}</td>

                    </tr>
                    <tr>
                        <td>Previous Company:</td>
                        <td>{detail['previous_company']}</td>

                    </tr>
                    <tr>
                        <td>status:</td>
                        <td>{detail['status']}</td>

                    </tr></tbody>
            </table>
            {detail.length === 0 && <h1>Something went wrong</h1>}
            {detail['status']!=='accepted' && <button className={classes.button} onClick={acceptHandler}>Accept</button>}

            {detail['status']!=='rejected' && <button style={{ marginLeft: '0.8rem' }} className={classes.button} onClick={rejectHandler}>Reject</button>}
        </Card >

    )
}


export default CandidateDetail