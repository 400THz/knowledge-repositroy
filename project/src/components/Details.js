import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useParams} from 'react-router-dom';

const Details = () => {



  const [getdocdata, setDocdata] = useState([]);
  console.log(getdocdata);

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {

    const res = await fetch(`/getdocument/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });


    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");

    }
    else {
      setDocdata(data)
      console.log("get data ");
    }


  }

  useEffect(() => {
    getdata();
  }, [])


  return (

    <div className='conatiner mt-3'>
      <h1 align='center'> <font color="#008080	">Welcome Readers! </font> </h1>
      <Card sx={{ maxWidth: 1500 }}>
        <CardContent>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              {/* <img src="/profile.png" style={{ width: 50 }} alt="profile" /> */}
              {/* <h4 className="mt-3">Document Title:</h4> <span >{getdocdata.document_name}</span>
              {/* <span >{getdocdata.document_name}</span></p> */}
              {/* <h4 className="mt-3">Document Validity:</h4> <p><span >{getdocdata.document_validity}</span></p>
              <h4 className="mt-3">Document Description: </h4>  <p><span >{getdocdata.description}</span></p> */} 

              
              <h3><p className="mt-3">Document Title: <font color="#008080	"><span >{getdocdata.document_name}</span></font></p></h3>
{/* new line added */}
              {/* <h3><p className="mt-3">Document Title: <font color="blue"> <span >{getdocdata.publication}</span></font></p></h3> */}

              <h3><p className="mt-3"> Document Validity: <font color="#008080	"> <span >{getdocdata.document_validity}</span></font></p></h3>
              <h3><p className="mt-3">Document Description: <font color="#008080	"><span>{getdocdata.description}</span></font></p></h3>
             
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}

export default Details