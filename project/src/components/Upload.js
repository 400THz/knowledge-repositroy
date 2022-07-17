import React, { useState ,} from 'react'
import { useNavigate } from 'react-router-dom'
// import 'react-datepicker/dist/react-datepicker.css'

const Upload = () => {



  const history = useNavigate("");

  const [inpval, setINP] = useState({

    document_name: "",
    publication:"", 
    document_validity: "",
    description: ""
  })


  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }
  


  const addinpdata = async(e) => {
    e.preventDefault();

    const { document_name,publication,  document_validity, description } = inpval;
    
    const res = await fetch("/upload", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
      body: JSON.stringify({
        document_name, publication , document_validity, description
      })

    });


  
  const data = await res.json();
    console.log(data);

    if(res.status === 422 || !data){
      // alert("error");
      console.log("error");
      alert("error");
    }
    else{
      alert("data uploaded");
      history("/")
      console.log("data uploaded");
    }
  }




  return (

    <div className="container">
      {/* <NavLink to="/"> HOME</NavLink> */}
      <form className="mt-3">

        <div class="mb-3">
          <label for="doc_name" class="form-label">Document Title</label>
         <input type="string" name="document_name" value={inpval.document_name} onChange={setdata} class="form-control" id="doc_name" />
        </div>

        {/* <div class="mb-3">
          <label for="publication_year" class="form-label"> publication Year</label>
          <input type="number"  name="publication" value={inpval.publication} onChange={setdata}
          class="form-control" id="dpublication_year"  />
        </div> */}

        

        <div class="mb-3">
          <label for="doc_validity" class="form-label" >Document Validity(mention year only in YYYY format)</label>
          {/* <Calendar onChange={onChange} value={value} /> */}
          <input type="Number" name="document_validity" value={inpval.document_validity} onChange={setdata}
          class="form-control" id="doc_validity" />
        </div>

        <div class="mb-3">
          <label for="doc_description" class="form-label">Document Description</label>
          <textarea type="string" name="description" value={inpval.description} onChange={setdata} className='form-control' id="" cols="20" rows="4"></textarea>
        
        </div>

        <div class="mt-4 text-center">
          <button type="submit" onClick={addinpdata} class="btn btn-primary" >Submit</button>
        </div>
      </form>

    </div>
    


  )
}

export default Upload;
