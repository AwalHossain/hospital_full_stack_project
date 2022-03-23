import { CDBTable, CDBTableBody, CDBTableHeader } from "cdbreact";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

export const Tables = () => {
  const [info, setInfo] =useState([]);
      useEffect(()=>{
        fetch('https://sleepy-peak-11374.herokuapp.com/api/getAllServices')
        .then(resp => resp.json())
        .then(data => setInfo(data.service))
    },[info])

    // Delete item
    const handleDelete =(id)=>{

      fetch(`https://sleepy-peak-11374.herokuapp.com/api/deleteService/${id}`,
 {
        method: "delete",
        headers: {
          "content-type":"application/json",
        }
      }
      )
      .then(res=> res.json())
      .then(data => {
        if(data.success === true){
          alert("Deleted successfulle")
        }
      }
        )
    }

  return (
    <div className="d-flex">
      <div>
        <Sidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        {/* <Navbar/> */}
        <h1>Kalalm</h1>
        <div style={{height:"100%"}}>
          <div style={{padding:"20px 5%",height:"calc(100% - 64px)",overflowY:"scroll"}}>
            <div style={{display:"grid", gridTemplateColumns:"repeat(1, minmax(200px, 1000px))"}}>
              <div className="mt-5 ">
                <h4 className="font-weight-bold mb-3">Table Head Options</h4>
                <h5>Dark Header</h5>

               
                 
                    <CDBTable responsive>
                    <CDBTableHeader color="dark">
                      <tr>
                        <th>#</th>
                        <th>Surger Name</th>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                    { info.map((data,index)=>(
                    < >
                      <tr>
                        <td>{index}</td>
                        <td>{data.title}</td>
                        <td>{data.desc}.slice(0, 50)</td>
                        <td>
                          <Link to={`edit/${data._id}`}>Edit</Link>
                          </td>
                        <td>
                          <button onClick={()=>handleDelete(data._id)}>Delete</button>
                          </td>
                      </tr>
                      <tr>

                      </tr>
                    </>
                      ))
                    }
                    </CDBTableBody>
                  </CDBTable>


                {/* header */}
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
