import React, {useState, useEffect} from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'

const Edit = () => {
  // const [getdocdata, setDocdata] = useState([]);
  // console.log(getdocdata);
    
  
    const history = useNavigate("");

    const [inpval, setINP] = useState({
    
        document_name:"",
        // publication:"",
        document_validity:"",
        description:""
      }
    )
    
      
    const setdata = (e)=>{
            console.log(e.target.value);
            const {name, value} = e.target;
            setINP((preval)=>{
              return{
                ...preval,
                [name]:value
              }
            }
          )
    }

    const {id} = useParams("");
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
        
        setINP(data)
          console.log("get data ");

      }


  }

  useEffect(() => {
      getdata();
  },[]);

  const updatedoc = async(e) =>{
    e.preventDefault();

    const {document_name,publication, document_validity,description} = inpval;

    const res2 = await fetch(`/updatedoc/${id}`,{
      method: "PATCH",
      headers: {
                "Content-Type": "application/json"
      },
      body:JSON.stringify({
        document_name,publication, document_validity,description
      })
    });

    const data2 = await res2.json();
    console.log(data2);

    if(res2.status=== 422 || !data2){
      alert("fill the data");

    }else{

      alert("data updated");
      history("/")


    }

  }

  return (
    <div className="container">
        <NavLink to="/"> HOME </NavLink>
      <form className="mt-3">

        <div class="mb-3">
          <label for="doc_name" class="form-label">Document Title</label>
          <input type="text" name="document_name" value={inpval.document_name} onChange={setdata} class="form-control" id="doc_name" />
        </div>
{/* 
        <div class="mb-3">
          <label for="publication_year" class="form-label"> publication Year</label>
          <input type="number"  name="publication" value={inpval.publication} onChange={setdata}
          class="form-control" id="dpublication_year"  />
        </div> */}


        <div class="mb-3">
          <label for="doc_validity" class="form-label">Document Validity</label>
          <input type="number"  name="document_validity" value={inpval.document_validity} onChange={setdata}
          class="form-control" id="doc_validity"  />
        </div>

        <div class="mb-3">
          <label for="doc_description" class="form-label">Document Description</label>
          <textarea name="description" value={inpval.description} onChange={setdata} className='form-control' id="" cols="20" rows="5"></textarea>
        </div>

        
        

        <button type="submit" onClick= {updatedoc} class="btn btn-primary">Submit</button>
      </form>

    </div>
  )
}

export default Edit