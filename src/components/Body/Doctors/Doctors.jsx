import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Doctors.css'

const Doctors = () => {
    const whats =  <FontAwesomeIcon icon="fa-brands fa-whatsapp-square" />
  return (
    <div className='docBg'>
             <div className="container ">
                 <h1 className='docMainTitle pt-5 display-4'>Our Team Of Specialist </h1>
                <div className="row g-4  row-cols-lg-4 row-cols-md-2 row-cols-1 cad text-center py-5">
                    <div className='p-2  mx-auto  bg-white card'>
                        <div className=''>
                            <img className='docImg' src="https://cliniq.bold-themes.com/classic/wp-content/uploads/sites/3/2021/09/team_05.jpg" alt="doctor" />
                        </div>
                        <div className='mb-0 mt-4'>
                            <p className='docTitle pt-2 mb-0'>Senior Surgeon</p>
                            <span className='docName h4'>Dr Melissa Dosch</span>
                            {/* <FontAwesomeIcon icon="fa-brands fa-whatsapp-square" /> */}
                        <div >
                        <img className='iconImg' alt='' iconImg src="https://img.icons8.com/ios/50/000000/whatsapp--v1.png"/>
                        <img className='iconImg mx-2' alt='' src="https://img.icons8.com/ios/50/000000/twitter--v1.png"/>
                        </div>
                        </div>
                    </div>
                    <div className='p-2 mx-auto bg-white card'>
                        <div>
                            <img className='docImg' src="https://cliniq.bold-themes.com/classic/wp-content/uploads/sites/3/2021/09/team_05.jpg" alt="doctor" />
                        </div>
                        <div>
                            <h4 className='docTitle'>Senior Surgeon</h4>
                            <h3 className='docName'>Dr Melissa Dosch</h3>
                        </div>
                    </div>
                    <div className='p-2 mx-auto bg-white card'>
                        <div>
                            <img className='docImg' src="https://cliniq.bold-themes.com/classic/wp-content/uploads/sites/3/2021/09/team_05.jpg" alt="doctor" />
                        </div>
                        <div>
                            <h4>Senior Surgeon</h4>
                            <h3>Dr Melissa Dosch</h3>
                        </div>
                    </div>
                    <div className='p-2 mx-auto bg-white card'>
                        <div>
                            <img className='docImg' src="https://cliniq.bold-themes.com/classic/wp-content/uploads/sites/3/2021/09/team_05.jpg" alt="doctor" />
                        </div>
                        <div>
                            <h4>Senior Surgeon</h4>
                            <h3>Dr Melissa Dosch</h3>
                        </div>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default Doctors