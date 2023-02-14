import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import '../../styles/LearnmoreSection.css';
import foto1 from '../../images/prueba.jpg';

function LearnmoreSection() {
    const [test, setTest] = useState<boolean>(false);

    const handleScroll = ()=>{
        if (window.scrollY >= 230){
            setTest(true);
        }else{
            setTest(false);
        }
        console.log(window.scrollY);
    }

    useEffect(() => {
      window.addEventListener('scroll',handleScroll);
    
      return () => {
        window.removeEventListener('scroll',handleScroll);
      }
    }, [window.scrollY])
    

    const [animation1Ref, animation1Observer] = useInView();
    const [animation2Ref, animation2Observer] = useInView();
    

    

  return (
    <>
        <section className='learnmore-section1' id='learnmore'>
            <div ref={animation1Ref} className={test ? 'learnmore-section1-c animation1' : 'learnmore-section1-c'}>
                <div className='learnmore-section1-info-c'>
                    <h1>Enjoy streaming music.</h1>
                    <p>Get the best music experience by streaming top hits
                        and the hottest new songs from your favorite artists.
                    </p>
                </div>
                <div className='learnmore-section1-img'>
                    <div className='learnmore-section1-img-f'>

                    </div>
                </div>
            </div>
        </section>

        <section className='learnmore-section2'>
        <div ref={animation2Ref} className={animation2Observer ? 'learnmore-section2-c' : 'learnmore-section2-c'}>
                <div className={animation2Observer ? 'learnmore-section2-img animation2': 'learnmore-section2-img'}>
                    <div className='learnmore-section2-img-f'>

                    </div>
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