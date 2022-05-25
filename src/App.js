import { Fragment, useState } from 'react';
import CandidateList from './components/CandidateList';
import CandidateDetail from './components/CandidateDetail'
import Header from './components/Layout/Header';
import classer from './components/CandidateDetail.module.css'
import CandidateForm from './components/CandidateForm';

function App() {
  const [detailid, setId] = useState(-1)
  const [display, setdisplay] = useState({ candidateList: true, NewCandidate: false, DetailedCandidate: false })
  const showCandidatListeHandler = () => {
    setdisplay(
      { candidateList: true, NewCandidate: false, DetailedCandidate: false, }
    );
  };

  const newCandidateHandler = () => {
    setdisplay(
      { CandidateList: false, NewCandidate: true, DetailedCandidate: false, }
    );
  };
  const deatailCandidateHandler = (id) => {
    setId( id)
    setdisplay(
      { candidateList: false, NewCandidate: false, DetailedCandidate: true, })
      
      
  };
console.log(detailid);
  return (
    <Fragment>

      
      {display['DetailedCandidate'] && <CandidateDetail onshowCandidatelist={showCandidatListeHandler}
        onNewCandidate={newCandidateHandler} id={detailid} />}

      {display['candidateList'] && <CandidateList
        onNewCandidate={newCandidateHandler} ondetail={deatailCandidateHandler} />}
       {display['candidateList'] &&  <button className={classer.buttonhai} onClick={newCandidateHandler}>Add Candidate</button>}
       
       {display['NewCandidate'] && <CandidateForm onshowCandidatelist={showCandidatListeHandler}
        onNewCandidate={newCandidateHandler} id={detailid} />}
    </Fragment>
  );
}

export default App;
