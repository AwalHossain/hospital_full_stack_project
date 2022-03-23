import { CDBTable, CDBTableBody, CDBTableHeader } from "cdbreact";
import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import "./Profile.css";

export const Profile = () => {

	const [info, setInfo] = useState([]);
	const [review, setReview] = useState([]);
	useEffect(() => {
	  fetch(" https://sleepy-peak-11374.herokuapp.com/api/admin/getReview/")
	  .then((res) => res.json())
	  .then((result) => setReview(result.review))
	}, [info])
  
	// Delete item
	
	const handleChange = (value, id) => {

		console.log(value, id);

		const data = {
			isApprove: value
		}
  
	  fetch(`https://sleepy-peak-11374.herokuapp.com/api/editReview/${id}`, {
		method: "PUT",
		headers: {
		  "content-type": "application/json",
		},
		body: JSON.stringify(data),
	  }
	  )
		.then(res => res.json())
		.then(data => {
		  if (data.success === true) {
			alert("Updated successfulle")
		  }
		}
		)
	}

	return (
		<div className="d-flex profile">
			<div>
      	<Sidebar/>
			</div>
			<div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        {/* <Navbar/> */}
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
                        <th> Name</th>
                        <th>Description</th>
                        <th>Rating</th>
                        <th>Status</th>
                        <th>Handle</th>
                      </tr>
                    </CDBTableHeader>
                    <CDBTableBody>
                    { review.map((data,index)=>(
                    < >
                      <tr>
                        <td>{index}</td>
                        <td>{data.name}</td>
                        <td>{data.desc}</td>
                        <td>
                          {data.rating}
                          </td>
                       
                       { data.isApprove? <td>Approved</td> : <td>Pending</td>}
                        
                        <td>
						<select onChange={(e)=>handleChange(e.target.value, data._id)} name="cars" id="cars">
  <option value="N/A">N/A</option>
  <option value="false">Disapprove</option>
  <option value="true">Approve</option>
</select>
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
}