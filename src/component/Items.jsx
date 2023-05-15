import React , {useState , useEffect} from 'react'
import OwlCarousel from 'react-owl-carousel'
import items from './Array'
const Items = ()=>{
    

    const [owlItems , setOwlItems] = useState(items);

    const [reSize , setReSize] = useState(window.innerWidth);
    useEffect(()=>{
        const handelSize = ()=>{
            setReSize(window.innerWidth);
        }

        window.addEventListener('resize', handelSize);

        return ()=>{ window.removeEventListener('resize',handelSize); }
    },[])



    return(
        <div id="items" className='mt-4 ml-4'>
            <div className="container">
                <div className="row">
                    <div className="col text-center lead text-light py-5">
                        <h2>COFFE SERVICES</h2>
                        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, sit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, autem!</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                       
                        <OwlCarousel className='owl-theme' 
                        items={reSize>990?3 : reSize<990 && reSize>600?2 :1}
                         margin={50}
                         nav
                         dots={false}
                         loop={true}
                         autoPlay={true}
                         smartSpeed={1000}
                         responsiveClass={true}
                         >
                            {
                                owlItems.map((item,index)=>{
                                    const {img , type , des} = item;
                                    console.log(img);
                                    // console.log(type);
                                    return(
                                        <div className="item row" key={index}>
                                            <div className={reSize>=600?"col-11 m-auto bg-light py-4" :'col-11 m-auto bg-danger py-4'}>
                                            <img src={img} alt="" className='owl-carousel-img ' />
                                            </div>
                                           <div className="col text-center text-light mt-4">
                                           <h3 className='text-uppercase'>{type}</h3>
                                            <p>{des}</p>
                                           </div>
                                        </div>
                                    )
                                })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items;