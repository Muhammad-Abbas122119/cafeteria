import React ,{useState} from 'react'

import { testimonial } from './Array';

const Testimonial  =() =>{

    const [items , setItems] = useState(testimonial)

    const styles = {padding:' 20px 10px 80px'} // use for the carousel-item tag styling

    return(
        <div id="testimonial" className='mt-4 mr-4'>

                <div className="row py-4">

                    <div className="col-lg-6 text-center line">

                        <h1 className='text-uppercase text-white my-3'>get in touch</h1>

                        <form className=' my-2 my-lg-0 mx-2'>
                            <input type="text" placeholder='Name' className="form-control" />
                            <input type="number" placeholder='Phone/Mobile' className="form-control" />
                            <input type="email" placeholder='Email' className="form-control" />
                            <textarea name="" placeholder='Message' cols="30" rows="5" className='form-control'></textarea>
                            <button className='text-uppercase my-3'>send</button>
                        </form>

                    </div>

                    <div className="col-lg-6  my-3">
                        <h1 className='text-uppercase text-white text-center'>testimonial</h1>
                        <div className="row">
                            <div className="col">

                                <div className="carousel slide px-3" data-ride='carousel' id='testim-carousel'>
                                    <div className="carousel-inner">

                                        {
                                            items.map((item,index)=>{
                                                const {para , img , name , relation} = item;
                                                const itemClass = index===0?'carousel-item active' : 'carousel-item';
                                                
                                                return(
                                                    <div className={itemClass} key={index} style={styles}>

                                                    <div className='bg-white testim-item-inner'>
         
                                                    <p className="testim-message">{para}</p>
         
                                                     <div className='testim-pro'>
                                                         <img src={img} alt="" className="testim-img" />
                                                         <span className='pl-3 d-flex flex-column justify-content-end text-white'>
                                                             <div className="h4">{name}</div>
                                                             <div>{relation}</div>
                                                         </span>
                                                     </div>
                                                    </div>
         
                                                 </div>
                                                )
                                                
                                            })
                                        }

                                    </div>

                                    <button className="carousel-control-prev" data-slide='prev' data-target='#testim-carousel'>
                                        <span className="carousel-control-prev-icon"></span>
                                    </button>
                                    <button className="carousel-control-next" data-slide='next' data-target='#testim-carousel'>
                                        <span className='carousel-control-next-icon'></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Testimonial;