import { useState ,useEffect} from 'react'
import './App.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import MatchTable from './component/Table';
import Schedule from './component/Schedule';

function App() {
  const [teams,setTeams]=useState(["CSK","RCB","DC","SRH","MI","RR","KKR","PBKS"])

  const [inputValue,setInputValue]=useState("")

  const [errorMsg,setErrorMsg]=useState("")
  

  const keyClicked=(event)=>{
    if(event.code==="Enter"){
      var arr=teams;
      arr.push(inputValue)
      setTeams(arr)
      setInputValue("")
    }
   
    
  }

  const removeTeam=(team)=>{
    setTeams(teams.filter(temp=>{
      return team!==temp
    }))
  }


  const handleChange=(event)=>{
    setInputValue(event.target.value);
  }
  const prepareSchedule=()=>{
    if(teams.length<4)
    setErrorMsg("Minimum 4 teams are required");
    else if(teams.length%2!==0)
   setErrorMsg("teams should be even , so either add or remove 1 team");
    else
    setErrorMsg("");
  }

  useEffect(()=>{
      prepareSchedule()
  },[teams])

  
  

  return (
   <div poke
   style={{
    backgroundImage: "url(https://res.cloudinary.com/dyrpr7kkh/image/upload/v1687365699/ipld_vdnal9.jpg)" ,
    
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '2200px',
    color: 'black',
  }}
  >
   
   <div className='searchBar'>
  <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">Add Teams</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Add a team name and press enter'
          value={inputValue}
          onChange={handleChange}
          onKeyDown={keyClicked}
        />
         
      </InputGroup>
      
      
      {teams.map(team=>(
        
        <span className='capsule'>{team}
        <CloseButton className='remove' onClick={()=>removeTeam(team)}/>
        </span>
        
       
      ))}

     <h3 className='error'>{errorMsg}</h3>

     {!errorMsg &&  <Schedule teams={teams}/>}   
     
      </div>
   </div>
  )
}

export default App
