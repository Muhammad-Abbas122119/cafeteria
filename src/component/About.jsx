import React from 'react'

const About = () =>{
return(
    <div id="about" className='mr-4 mt-4'>
        <div className="container">
            <div className="row ">
                <div className="col-md-6">
                    <img src="imgs/about.png" alt="" className='about-img' />
                </div>

                <div className="col-md-6 text-light d-flex flex-column justify-content-center" >
                    <h1>ABOUT HOT CAFETERIA</h1>
                    <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, voluptatibus.</p>
                    <button className='custom-btn'>READ MORE </button>
                </div>
            </div>
        </div>
    </div>
)
}

export default About;