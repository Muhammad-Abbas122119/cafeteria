// -----------------ITEM COMPONENT-------------

import blackTea from './imgs/blackTea.png'
import redTea from './imgs/redTea.png'
import cofee from './imgs/cofee.png'


import testimonialImg from './imgs/testimonial.jpg' // --> for testimonial component

const item = [
    {
        img:blackTea,
        type:'Black tea',
        des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, sit!'
    },
    {
        img:redTea,
        type:'red coffe',
        des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, sit!'
    },
    {
        img:cofee,
        type:'lamon grass tea',
        des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, sit!'
    },
    {
        img:redTea,
        type:'red cofee',
        des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, sit!'
    },
    {
        img:cofee,
        type:'lamon grass tea',
        des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, sit!'
    },
    {
        img:blackTea,
        type:'Black tea',
        des:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, sit!'
    }

]

// ------------------TESTIMONIAL COMPONENT---------------

const testimonial = [
    {
        para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, rerum quo sit soluta molestias necessitatibus rem dolor voluptatum incidunt beatae, repellat, voluptatibus quisquam unde. Quae est cupiditate id a minima veniam exercitationem excepturi. Harum, tenetur reprehenderit eaque quos facilis laboriosam.',

        img:testimonialImg,

        name:'Abbas',

        relation:'Custumer'
    },
    {
        para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, rerum quo sit soluta molestias necessitatibus rem dolor voluptatum incidunt beatae, repellat, voluptatibus quisquam unde. Quae est cupiditate id a minima veniam exercitationem excepturi. Harum, tenetur reprehenderit eaque quos facilis laboriosam.',

        img:testimonialImg,

        name:'Abbas',

        relation:'Custumer'
    },
    {
        para:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, rerum quo sit soluta molestias necessitatibus rem dolor voluptatum incidunt beatae, repellat, voluptatibus quisquam unde. Quae est cupiditate id a minima veniam exercitationem excepturi. Harum, tenetur reprehenderit eaque quos facilis laboriosam.',

        img:testimonialImg,

        name:'Abbas',

        relation:'Custumer'
    }
]


export default item; 

export {testimonial};