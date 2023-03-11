import React, { useRef, useEffect } from 'react'
import '../../styles/TestimonialSection.css';

//Testimonial component
import Testimonial from '../pures/Testimonial';

//images
import testimonial1 from '../../images/testimonial1.jpg';
import testimonial2 from '../../images/testimonial2.jpg';
import testimonial3 from '../../images/testimonial3.jpg';

function TestimonialSection() {

  const slider = useRef<HTMLDivElement>(null);

  const SlideAnimation = ()=>{
    if(slider.current !== null){
      if(slider.current.children.length > 0){
        const firstChild = slider.current.children[0];
        slider.current.style.transition = '300ms ease-out all';
        slider.current.style.transform = 'translateX(-600px)';

        const transition = ()=>{
          if(slider.current !== null){
            slider.current.style.transition = 'none';
            slider.current.style.transform = 'translateX(0)';
            slider.current.appendChild(firstChild);

          }
        }
        slider.current.addEventListener('transitionend',transition);
      }
      
    }
  };

  useEffect(()=>{
    const intervalSlider = setInterval(()=>{
      SlideAnimation();
    },4000)

    return ()=> clearInterval(intervalSlider);
  },[])
  

  return (
    <section className='testimonial-section'>
      <div className='slider-c'>
        <div className='slider' ref={slider}>
            <Testimonial
            description='This app is amazing! I can easily find all my favorite songs and create playlists to suit my mood.
             Highly recommend!'
            name='Olivia L.'
            image={testimonial1}
            stars={4} />

            <Testimonial
            description='I use this app every day and it never disappoints. The selection of music is vast and I discover new artists all the time.'
            name='James P.'
            image={testimonial2}
            stars={5} />

            <Testimonial
            description="I'm so glad I found this app! The user interface is simple and easy to navigate. Plus, there are no ads to interrupt my listening experience."
            name='Emily G.'
            image={testimonial3}
            stars={3} />
        </div>

      </div>

    </section>
  )
}

export default TestimonialSection