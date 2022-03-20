import React from 'react'
import './MiddlePoster.css'
const MiddlePoster = () => {

    return (
        <div>
            <div className='bg'>
                <div class="container">
                <div class="row g-5">
                        <div class="col-6 col-md-3 text-center ">
                            <div className='icone'>
                                <i class="fas fa-heart"></i>
                            </div>
                            <span style={{ color: "#23abe1" }} className=''>Over</span>
                            <div className='display-3 text-white fw-bold'>180</div>
                            <h4 className='text-white fa-2x'>saved hearts</h4>

                        </div>
                      
                           <div class="col-6 col-md-3 text-center">
                            <div className='icone'>
                                <img src="https://img.icons8.com/ios/50/000000/heart-with-pulse.png" />                            </div>
                            <span style={{ color: "#23abe1" }} className=''>Over</span>
                            <div className='display-3 text-white fw-bold'>180</div>
                            <h4 className='text-white fa-2x'>saved tooth</h4>

                        </div>
                     
                         
                          <div class="col-6 col-md-3 text-center">
                            <div className='icone'>
                                <i class="fas fa-lungs"></i>
                            </div>
                            <span style={{ color: "#23abe1" }} className=''>Over</span>
                            <div className='display-3 text-white fw-bold'>180</div>
                            <h4 className='text-white fa-2x'>saved lunch</h4>

                        </div>
                       
                           <div class="col-6 col-md-3 text-center ">
                            <div className='icone'>
                                <i class="fas fa-heart"></i>
                            </div>
                            <span style={{ color: "#23abe1" }} className=''>Over</span>
                            <div className='display-3 text-white fw-bold'>180</div>
                            <h4 className='text-white fa-2x'>saved stomach</h4>

                        </div>
                       
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MiddlePoster