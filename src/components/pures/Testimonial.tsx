import React, { useEffect } from 'react'
import '../../styles/Testimonial.css';

interface Props{
    description:string,
    name:string,
    image:string,
    stars:number
}

function Testimonial({description, name, image, stars}:Props) {

    let starsArray = [0,0,0,0,0];
    
    const starsFilled = starsArray.map((e,i)=>{
        if(i >= stars){
            return e;
        }
         return e =1;
    })

    
    
    
    
  return (

    <div className='testimonial'>
        <div className='testimonial-info'>
            
            <p className='testimonial-description'>
                <i className="bi bi-quote"></i>
                {description}
                <i className="bi bi-quote"></i>
            </p>
            <h3 className='testimonial-name'>-{name} </h3>
            <div>
                {
                    starsFilled.map((star,index)=>{
                        return (
                            <i key={index}
                             className={star == 1 ? 'bi bi-star-fill star-filled' : 'bi bi-star-fill star-empty'}></i>
                        )
                    })
                }
            </div>
        </div>
        <div className='testimonial-img'>
                <img src={image} alt={name}/>
        </div>
    </div>
  )
}

export default Testimonial