import React, { useState, useEffect } from 'react'
// import VisibilityIcon from '@mui/icons-material/Visibility';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from 'react-router-dom';
// import calendar from 'react-calendar';

const Home = () => {

    

    const [getdocdata, setDocdata] = useState([]);
    console.log(getdocdata);

    const getdata = async (e) => {

        const res = await fetch("/getdata", {
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

    const deletedocument = async (id) => {

        const res2 = await fetch(`/deletedocument/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("document deleted");
            getdata();

        }

    }

    // const current = new Date();
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


    return (


        <div className="mt-5">
            <div className="container">

           <font color= "#F8F8FF"> <h1 align='center'>"Today a reader, tomorrow a leader."</h1> </font>

                <div className="add_btn mt-2 mb-2">
                    {/* <i class="fa fa-upload" aria-hidden="true"></i> */}
                    <NavLink to="/upload" className="btn btn-primary">  Upload document</NavLink>

                </div>

                <table class="table">
                    <thead>
                        <tr class="table-dark">
                            <th scope="col">S.No.</th>
                            <th scope="col">Document Title</th>
                            {/* <th scope="col">Uploaded Date</th> */}
                            <th scope="col">Document Validity(Year)</th>
                            <th scope="col"> <center>Action</center> </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            getdocdata.map((element, id) => {

                                return (
                                    <>
                                        <tr>

                                            <th scope="row">{id + 1}</th>
                                            <td><span className="white-text">{element.document_name}</span></td>
                                            {/* <td>{element.publication}</td>  */}
                                            <td><span className="white-text">{element.document_validity}</span></td>
                                            {/* <td input type={Date}>{date}</td> */}
                                            <td className="d-flex justify-content-between">
                                            <span className="white-text">
                                                <NavLink to={`view/${element._id}`}> <button className="btn btn-success"> <RemoveRedEyeIcon/></button> </NavLink>

                                                <NavLink to={`edit/${element._id}`}> <button className="btn btn-success"> <ModeEditRoundedIcon /></button> </NavLink>
                                                <button className="btn btn-danger" onClick={() => deletedocument(element._id)}><DeleteIcon /></button>
                                            </span>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home