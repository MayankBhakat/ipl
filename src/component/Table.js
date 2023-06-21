import Table from 'react-bootstrap/Table';

function MatchTable(props) {

  const venues={
    "CSK":"Cheapuk Stadium",
    "RCB":"Chinnaswami Stadium",
    "MI":"Whankhade Stadium",
    "RR":"Sawai Mansingh Stadium",
    "DC":"Arun Jaitley Stadium",
    "PBKS":"Mohali Stadium",
    "SRH":"Rajiv Gandhi Stadium",
    "KKR":"Eden Gardens Stadium",
    "GT":"Narendra Modi Stadium",
    "LSG":"Ekana Stadium"

  }

  const dates=props.datesArray
  return (
    <Table  style={{color: "red",
    border: 'solid 3px white',
    background: 'transparent',
    
    fontWeight: 'bold',}}>
      <thead>
        <tr>
          <th>#match NO</th>
          <th>Date</th>
          <th>Venue</th>
          <th>Match</th>
        </tr>
      </thead>
      <tbody>
        {props.matches.map((match,index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{dates[index]}</td>
          <td>{venues[match.split(" ")[0]]}</td>
          <td>{match}</td>
        </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default MatchTable;