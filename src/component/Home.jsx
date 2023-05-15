import React,{useState,useEffect} from 'react'
import carouselImg from './imgs/carousel-img.png'
const Home = () => {
    const [winSize,setWinSize] = useState(window.innerWidth);

    // console.log(winSize);
useEffect(()=>{const handleSize = ()=>{
    setWinSize(window.innerWidth);
}

window.addEventListener('resize',handleSize);

return ()=>{
    
window.removeEventListener('resize' , handleSize);
}
},[])

    return (
        <div id="home">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="carousel slide" data-ride="carousel" id="myCarousel">
                            <div className="carousel-inner">

                                <div className=" active carousel-item ">

                                    <img src={carouselImg} alt="" className='float-lg-right' />

                                    <div className={winSize<993?'carousel-caption bg-light':"headings-position"} >
                                        <span className='h1 mr-5 text-light'>HOT CAFETARIA</span>
                                        <p className="lead">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, exercitationem!
                                        </p>
                                        <button  className='custom-btn'>Read More</button>
                                        <button className='custom-btn'>Get A Quite</button>
                                    </div>

                                </div>
                                <div className="carousel-item">

                                    <img src={carouselImg} alt="" className='float-lg-right' />

                                    <div className={winSize<993?'carousel-caption bg-light':"headings-position"}>
                                        <span className='h1 mr-5  text-light'>HOT CAFETARIA</span>
                                        <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eius?</p>
                                        <button className='custom-btn'>Read More</button>
                                        <button className='custom-btn'>Get A Quite</button>
                                    </div>

                                </div>
                            </div>

                            <button className="carousel-control-prev" data-slide="prev" data-target="#myCarousel"> <span className="carousel-control-prev-icon"></span>
                            </button>

                            <button className="carousel-control-next" data-slide='next' data-target='#myCarousel'>
                                <span className='carousel-control-next-icon'></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;