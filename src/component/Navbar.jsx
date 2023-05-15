import React from 'react'

const Navbar = () => {
    return (
        <nav id="myNav">
            <div className="row no-gutters">
                <div className="col col-lg-8">
                    <div className="navbar navbar-expand-md">

                        <div className="navbar-brand">
                            <i className="fa-solid fa-mug-hot h1 text-light"></i>
                            <span className='h4 pl-2 text-light'>Cafeteria</span>
                        </div>

                        <button className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar-menu">
                        <i className="fa-solid fa-bars text-light"></i>
                        </button>
                        <div className="collapse navbar-collapse" id='myNavbar-menu' >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#home" className="nav-link">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#about" className="nav-link">ABOUT</a>
                                </li>

                                <li className="nav-item">
                                    <a href="#items" className="nav-link">SERVICESES</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#testimonial" className="nav-link">TESTIMONIALS</a>
                                </li>

                                <li className="nav-item">
                                    <a href="#nav-footer" className="nav-link">CONTECT US</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
               
                <div className="col col-lg-4 contact">
               
                <div className="row no-gutters text-light pt-4">

                    <div className="col-4">
                    <i className="fa-solid fa-phone pr-2"></i>
                <span>+923179734653</span>
                    </div>
                    
                    <div className="col-8 ">
                    <i className="fa-solid fa-envelope pl-2 pr-2"></i>
                    <span><a href="#" className='text-light'>muhammad.abbas.edu.now@gmail</a></span>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;