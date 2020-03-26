import React, { useState,useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

const SearchAllreports = () =>{

  const [token, setToken]= useState('ss');
  const [data,setData]= useState([]);
  const [listError, setListError] = useState(false);
  
  useEffect( ()=> {
    const fetchdata= async () => {
      axios.get('/listallreports' ,{ headers: {'x-auth-token' :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc4MTg2NzY5MjRjODZhMmNiYTAyYjUiLCJmaXJzdG5hbWUiOiJTdWJoIiwiaWF0IjoxNTg0OTg0NjkzfQ.xtms8es4kDYMSXvR8_4AyPU0D_xXvZ3wxG16GGbylx0",
      'Accept' : 'application/json',
      'Content-Type': 'application/json'
       }})
       .then( res=> {
         setData(res.data);
       })
       .catch((err)=> {
         setListError(true);
       })
    };

    fetchdata();
  }, []);

  const handleSubmit = async (e) => {
  await axios.get('/listallreports', { headers: {'x-auth-token' :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTc4MTg2NzY5MjRjODZhMmNiYTAyYjUiLCJmaXJzdG5hbWUiOiJTdWJoIiwiaWF0IjoxNTg0OTg0NjkzfQ.xtms8es4kDYMSXvR8_4AyPU0D_xXvZ3wxG16GGbylx0",
  'Accept' : 'application/json',
  'Content-Type': 'application/json'
   }})
  .then(function (response) {
    // handle success
    console.log(response);
    setToken("Done");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}
  return (

    <div>
      


      { data.length !== 0
        ? <div className="p-3">
          <table className="table">
      <thead>
        <tr>
          <th>Patient Email</th>
          <th>Heart Rate</th>
          <th>Blood Pressure</th>
          <th>Respiratory Rate</th>
          <th>Body Temperature</th>
          <th>Nurse Email</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item, idx) => (
        <tr key={idx}>
          <td>{item.patientemail}</td>
          <td>{item.heartrate}</td>
          <td>{item.bloodpressure}</td>
          <td>{item.respiratoryrate}</td>
          <td>{item.bodytemperature}</td>
          <td>{item.nursename}</td>
        </tr>
        ))}
      </tbody>
     </table>
          
        </div>
        : < div> <p> Loading...</p></div>
      }

     
   </div> 
  )
}

export default SearchAllreports 