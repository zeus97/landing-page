import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import '../../styles/LearnmoreSection.css';

//images
import image1 from '../../images/learn1.jpg';
import image2 from '../../images/learn2.jpg';

function LearnmoreSection() {

    const [animation1, setAnimation1] = useState<boolean>(false);
    const [animation2Ref, animation2Observer] = useInView();

    const handleScroll = ()=>{
        if (window.scrollY >= 230){
            setAnimation1(true);
        }else{
            setAnimation1(false);
        }
    }

    useEffect(() => {
      window.addEventListener('scroll',handleScroll);
    
      return () => {
        window.removeEventListener('scroll',handleScroll);
      }
    }, [window.scrollY])
    

    

    

  return (
    <>
        <section className='learnmore-section1' id='learnmore'>
            <div  className={animation1 ? 'learnmore-section1-c animation1' : 'learnmore-section1-c'}>
                <div className='learnmore-section1-info-c'>
                    <h1>Enjoy streaming music.</h1>
                    <p>Get the best music experience by streaming top hits
                        and the hottest new songs from your favorite artists.
                    </p>
                </div>
                <div className='learnmore-section1-img'>
                    <img src={image1} />
                    
                </div>
            </div>
        </section>

        <section className='learnmore-section2'>
        <div  className={animation2Observer ? 'learnmore-section2-c' : 'learnmore-section2-c hidden'}>
                <div ref={animation2Ref} className={animation2Observer ? 'learnmore-section2-img animation2': 'learnmore-section2-img'}>
                    <img src={image2} />
                    
                </div>
                <div className={animation2Observer ? 'learnmore-section2-info-c animation3' : 'learnmore-section2-info-c'}>
                    <h1>Create playlists.</h1>
                    <p>Create personalized playlists for yourself or friends.
                       Share your music with the world and discover new music
                       from others. 
                    </p>
                </div>
            </div>
        </section>    
    </>
  )
}

export default LearnmoreSection