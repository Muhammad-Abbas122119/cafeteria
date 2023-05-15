import React from 'react'

const NavFooter = ()=>{
    return(
        <div id="nav-footer" className='mt-4 ml-4 pt-4'>
            <div className="container">
                <div className="row">
                    <div className="h2 text-uppercase text-center w-100 text-light my-5">hot cafee</div>

                    <div className='d-flex flex-column flex-lg-row w-100 justify-content-between border-bottom border-white mb-5 px-md-4'>

                        <input type="email" className='form-control text-white' placeholder='Email Address' />

                        <span className='subscribe text-capitalize'><a href="#">subscribe</a></span>

                    </div>
                </div>


                <div className="row">

                    <div className="col-md-6 col-lg-4">
                        <ul className='list-unstyled text-white'>
                            <li className="h4 text-uppercase">menu</li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Coffee Services</a></li>
                            <li><a href="#">Testimonial</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <ul className='list-unstyled text-white'>
                            <li className="h4 text-uppercase">Coffee</li>
                            <li><a href="#">Black Coffee</a></li>
                            <li><a href="#">Red Coffee</a></li>
                            <li><a href="#">Chocolate Coffee</a></li>
                            <li><a href="#">Lemon Grass Tea</a></li>
                            <li><a href="#">Green Tea</a></li>
                        </ul>
                    </div>
                    
                    <div className="col-md-6 col-lg-4">
                        <ul className='list-unstyled text-white'>
                            <li className="h4 text-uppercase">follow us</li>
                           
                            <li className="d-flex">

                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            </li>

                            <li>
                                <span><i className='fa fa-map-marker'></i>
                                    Location   
                                </span>
                            </li>

                            <li>
                                <span><i className="fa fa-phone"></i>
                                Call +923179734653
                                </span>
                            </li>

                            <li>
                                <span className='d-flex flex-row text-truncate align-items-end' >
                                    <i className="fa-solid fa-envelope"></i>
                                <a href="#" title='muhammad.abbas.edu.now@gmail.com'>muhammad.abbas.edu.now@gmail.com</a>
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavFooter;